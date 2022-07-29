import { PokemonCard, GamePlayProps } from "./types"
import DisplayCard from "./DisplayCard"
import HiddenCard from "./HiddenCard"
import Options from "./Options"
import PlayCommentary from "./PlayCommentary"

export default function GamePlay({compCards, setCompCards, userCards, setUserCards, newTurn, setNewTurn, compIndex, setCompIndex, userIndex, setUserIndex, turnNumber, setTurnNumber}: GamePlayProps): JSX.Element{
    return (
        <>
            <p>Computer cards: {compCards.length}</p>
            {newTurn ? <HiddenCard /> : <DisplayCard {...compCards[compIndex]} />}
            <p>Number of turns: {turnNumber}</p>
            <PlayCommentary newTurn={newTurn} setNewTurn={setNewTurn} compIndex={compIndex} setCompIndex={setCompIndex} userIndex={userIndex} setUserIndex={setUserIndex} turnNumber={turnNumber} setTurnNumber={setTurnNumber}/>
            <p>User cards: {userCards.length}</p>
            <DisplayCard {...userCards[userIndex]} />
            {/*-check if it is the user's turn*/}
            {(turnNumber % 2 !== 0) ? <Options compCards={compCards} setCompCards={setCompCards} userCards={userCards} setUserCards={setUserCards} newTurn={newTurn} setNewTurn={setNewTurn} compIndex={compIndex} setCompIndex={setCompIndex} userIndex={userIndex} setUserIndex={setUserIndex} turnNumber={turnNumber} setTurnNumber={setTurnNumber}/> : <Options compCards={compCards} setCompCards={setCompCards} userCards={userCards} setUserCards={setUserCards} newTurn={newTurn} setNewTurn={setNewTurn} compIndex={compIndex} setCompIndex={setCompIndex} userIndex={userIndex} setUserIndex={setUserIndex} turnNumber={turnNumber} setTurnNumber={setTurnNumber}/>}

        </>
    )
}