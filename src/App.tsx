import { useEffect, useState } from "react";
import { PokemonCard } from "./types";
import makePokemonCards from "./utils/makePokemonCards";
import GamePlay from "./GamePlay";

function App(): JSX.Element {
  // const initialCompCards = makePokemonCards(20);
  // const initialUserCards = makePokemonCards(20);
  const [compCards, setCompCards] = useState<PokemonCard[]>([]);
  const [userCards, setUserCards] = useState<PokemonCard[]>([]);
  const [newTurn, setNewTurn] = useState<boolean>(true);
  const [compIndex, setCompIndex] = useState<number>(0);
  const [userIndex, setUserIndex] = useState<number>(0);
  const [turnNumber, setTurnNumber] = useState<number>(0);
  const [latestWinner, setLatestWinner] = useState<"user" | "comp" | "">("");
  const [currentChoice, setCurrentChoice] = useState<
    "hp" | "attack" | "defense" | "speed"
  >("hp");

  useEffect(() => {
    setCompCards(makePokemonCards(20));
    setUserCards(makePokemonCards(20));
  }, []);

  const handleStart = () => {
    setTurnNumber(1);
  };

  if (turnNumber === 0) {
    return (
      <div id="loading-screen">
        <button type="button" id="start-button" onClick={handleStart}>
          Start
        </button>
      </div>
    );
  } else if (compCards.length === 40) {
    return (
      <div className="overall-winner">
        <h1 id="winner">The winner is: computer!</h1>
      </div>
    );
  } else if (userCards.length === 40) {
    return (
      <div className="overall-winner">
        <h1 id="winner">The winner is: you!</h1>
      </div>
    );
  } else {
    return (
      <div id="gameplay">
        <GamePlay
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
      </div>
    );
  }
}

export default App;
