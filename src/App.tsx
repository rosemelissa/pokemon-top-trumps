import { useState } from "react";
import {PokemonCard} from './types'
import makePokemonCards from './utils/makePokemonCards'
import GamePlay from "./GamePlay";

function App(): JSX.Element {
  const initialCompCards = makePokemonCards(20);
  const initialUserCards = makePokemonCards(20);
  const [compCards, setCompCards] = useState<PokemonCard[]>([]);
  const [userCards, setUserCards] = useState<PokemonCard[]>([]);
  const [newTurn, setNewTurn] = useState<boolean>(true);
  const [compIndex, setCompIndex] = useState<number>(0);
  const [userIndex, setUserIndex] = useState<number>(0);
  const [turnNumber, setTurnNumber] = useState<number>(1);
  const [latestWinner, setLatestWinner] = useState<'user' | 'comp' | ''>('');
  const [currentChoice, setCurrentChoice] = useState<'hp' | 'attack' | 'defense' | 'speed'>('hp');
  const [userCurrentCard, setUserCurrentCard] = useState<PokemonCard>({name: '', img:'', hp:0, attack: 0, defense: 0, speed: 0})

  const handleStart = () => {
    setCompCards(initialCompCards)
    setUserCards(initialUserCards);
    setUserCurrentCard(initialUserCards[0])
  };
  
  if (compCards.length + userCards.length === 0) {
    return (
      <p onClick={handleStart}>Start</p>
    )
  } else if ((compCards.length === 40) || (userCards.length === 40)) {
    let overallWinner = '';
    (compCards.length === 40) ? overallWinner = 'comp' : overallWinner = 'user'
    return (
      <div className='overall-winner'>
        <h1>The winner is: {overallWinner}!</h1>
      </div>
    )
  } else {
    return (
      <>
        <GamePlay compCards={compCards} setCompCards={setCompCards} userCards={userCards} setUserCards={setUserCards} newTurn={newTurn} setNewTurn={setNewTurn} compIndex={compIndex} setCompIndex={setCompIndex} userIndex={userIndex} setUserIndex={setUserIndex} turnNumber={turnNumber} setTurnNumber={setTurnNumber} latestWinner={latestWinner} setLatestWinner={setLatestWinner} currentChoice={currentChoice} setCurrentChoice={setCurrentChoice} userCurrentCard={userCurrentCard} setUserCurrentCard={setUserCurrentCard}/>
      </>
    )
  }
  }

export default App;
