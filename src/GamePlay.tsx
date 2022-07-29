import { PokemonCard, GamePlayProps } from "./types"
import DisplayCard from "./DisplayCard"
import HiddenCard from "./HiddenCard"
import Options from "./Options"
import PlayCommentary from "./PlayCommentary"
import { useEffect } from "react"

export default function GamePlay({compCards, setCompCards, userCards, setUserCards, newTurn, setNewTurn, compIndex, setCompIndex, userIndex, setUserIndex, turnNumber, setTurnNumber, latestWinner, setLatestWinner, currentChoice, setCurrentChoice, userCurrentCard, setUserCurrentCard}: GamePlayProps): JSX.Element{
    return (
        <>
            <p>Computer cards: {compCards.length}</p>
            {newTurn ? <HiddenCard /> : <DisplayCard {...compCards[compIndex]} />}
            <p>Number of turns: {turnNumber}</p>
            <PlayCommentary compCards={compCards} setCompCards={setCompCards} userCards={userCards} setUserCards={setUserCards} newTurn={newTurn} setNewTurn={setNewTurn} compIndex={compIndex} setCompIndex={setCompIndex} userIndex={userIndex} setUserIndex={setUserIndex} turnNumber={turnNumber} setTurnNumber={setTurnNumber} latestWinner={latestWinner} setLatestWinner={setLatestWinner} currentChoice={currentChoice} setCurrentChoice={setCurrentChoice} userCurrentCard={userCurrentCard} setUserCurrentCard={setUserCurrentCard}/>
            <p>User cards: {userCards.length}</p>
            <DisplayCard {...userCards[userIndex]} />
            {/*-check if it is the user's turn*/}
            {(turnNumber % 2 !== 0) && <Options compCards={compCards} setCompCards={setCompCards} userCards={userCards} setUserCards={setUserCards} newTurn={newTurn} setNewTurn={setNewTurn} compIndex={compIndex} setCompIndex={setCompIndex} userIndex={userIndex} setUserIndex={setUserIndex} turnNumber={turnNumber} setTurnNumber={setTurnNumber} latestWinner={latestWinner} setLatestWinner={setLatestWinner} currentChoice={currentChoice} setCurrentChoice={setCurrentChoice}/>}
        </>
    )
}