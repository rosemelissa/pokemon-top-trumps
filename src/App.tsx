import { useEffect, useState } from "react";
import {PokemonCard} from './types'
import makePokemonCards from './utils/makePokemonCards'
import DisplayCard from "./DisplayCard";
import GamePlay from "./GamePlay";

function App(): JSX.Element {
  const initialCompCards: PokemonCard[] = makePokemonCards(20);
  const initialUserCards: PokemonCard[] = makePokemonCards(20);
  const [compCards, setCompCards] = useState<PokemonCard[]>([]);
  const [userCards, setUserCards] = useState<PokemonCard[]>([]);
  const [newTurn, setNewTurn] = useState<boolean>(true);
  const [compIndex, setCompIndex] = useState<number>(0);
  const [userIndex, setUserIndex] = useState<number>(0);
  const [turnNumber, setTurnNumber] = useState<number>(1);

  const handleStart = () => {
    setCompCards(initialCompCards);
    setUserCards(initialUserCards);
  };
  
  if (compCards.length === 20) {
  return (
    <>
      <GamePlay compCards={compCards} setCompCards={setCompCards} userCards={userCards} setUserCards={setUserCards} newTurn={newTurn} setNewTurn={setNewTurn} compIndex={compIndex} setCompIndex={setCompIndex} userIndex={userIndex} setUserIndex={setUserIndex} turnNumber={turnNumber} setTurnNumber={setTurnNumber}/>
      <p>First card:</p>
      <p>{compCards.length}</p>
      {compCards.map((card, i) => <DisplayCard key={i} {...card}/>)}
      <DisplayCard {...{name: 'me', img: 'dd', hp: 1, attack: 1, defense: 1, speed: 1}} />
    </>
  )
  } else {
    return (
      <p onClick={handleStart}>Start</p>
    )
  }
}

export default App;
