import { GamePlayProps } from "./types";
import DisplayCard from "./DisplayCard";
import HiddenCard from "./HiddenCard";
import Options from "./Options";
import PlayCommentary from "./PlayCommentary";

export default function GamePlay({
  compCards,
  setCompCards,
  userCards,
  setUserCards,
  newTurn,
  setNewTurn,
  compIndex,
  setCompIndex,
  userIndex,
  setUserIndex,
  turnNumber,
  setTurnNumber,
  latestWinner,
  setLatestWinner,
  currentChoice,
  setCurrentChoice,
}: GamePlayProps): JSX.Element {
  return (
    <>
      <p id="comp-count">Computer cards: {compCards.length}</p>
      <div id="comp-card">
        {newTurn ? <HiddenCard /> : <DisplayCard {...compCards[compIndex]} />}
      </div>
      <p id="turn-number">Turn number: {turnNumber}</p>
      <div id="play-commentary">
        <PlayCommentary
          compCards={compCards}
          setCompCards={setCompCards}
          userCards={userCards}
          setUserCards={setUserCards}
          newTurn={newTurn}
          setNewTurn={setNewTurn}
          compIndex={compIndex}
          setCompIndex={setCompIndex}
          userIndex={userIndex}
          setUserIndex={setUserIndex}
          turnNumber={turnNumber}
          setTurnNumber={setTurnNumber}
          latestWinner={latestWinner}
          setLatestWinner={setLatestWinner}
          currentChoice={currentChoice}
          setCurrentChoice={setCurrentChoice}
        />
        {/*-check if it is the user's turn*/}
        {turnNumber % 2 !== 0 && newTurn && (
          <Options
            setNewTurn={setNewTurn}
            setCurrentChoice={setCurrentChoice}
          />
        )}
      </div>
      <p id="user-count">Your cards: {userCards.length}</p>
      <div id="user-card">
        <DisplayCard {...userCards[userIndex]} />
      </div>
    </>
  );
}
