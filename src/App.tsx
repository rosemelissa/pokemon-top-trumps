import { useEffect, useState } from "react";
import {PokemonCard} from './types'
import makePokemonCards from './utils/makePokemonCards'
import DisplayCard from "./DisplayCard";

function App(): JSX.Element {
  const initialCompCards: PokemonCard[] = makePokemonCards(20);
  const initialUserCards: PokemonCard[] = makePokemonCards(20);
  const [compCards, setCompCards] = useState<PokemonCard[]>([]);
  const [userCards, setUserCards] = useState<PokemonCard[]>([]);
  const handleStart = () => {
    setCompCards(initialCompCards);
    setUserCards(initialUserCards);
  };
  

  // useEffect (() => {
  //   setCompCards(makePokemonCards(20));
  //   setUserCards(makePokemonCards(20))
  // }, [])

  if (compCards.length === 20) {
  return (
    <>
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
