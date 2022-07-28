import { PokemonCard, GamePlayProps } from "./types"
import DisplayCard from "./DisplayCard"
import HiddenCard from "./HiddenCard"

export default function GamePlay({compCards, setCompCards, userCards, setUserCards, newTurn, setNewTurn, compIndex, setCompIndex, userIndex, setUserIndex, turnNumber, setTurnNumber}: GamePlayProps): JSX.Element{
    return (
        <>
            <p>Computer cards: {compCards.length}</p>
            {newTurn ? <HiddenCard /> : <DisplayCard {...compCards[compIndex]} />}
            <p>Number of turns: {turnNumber}</p>
            {/* <PlayCommentary /> */}
            <p>User cards: {userCards.length}</p>
            <DisplayCard {...userCards[userIndex]} />
            {/*-check if it is the user's turn*/}
            {/* {(turnNumber % 2 !== 0) && <Options />} */}

        </>
    )
}