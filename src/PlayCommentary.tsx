import { PlayCommentaryProps } from "./types";

export default function PlayCommentary({newTurn, setNewTurn, compIndex, setCompIndex, userIndex, setUserIndex, turnNumber, setTurnNumber}: PlayCommentaryProps): JSX.Element {
    const handleNextTurn = () => {
        setNewTurn(true);
        setTurnNumber(turnNumber => turnNumber + 1);
    }
    if (newTurn) {
    return (
        <>
            <p>It is {(turnNumber % 2 === 0) ? 'computer' : 'user'} 's turn</p>
            {(turnNumber % 2 === 0) && <>
                <p>Computer to play</p>
                <button onClick={() => setNewTurn(false)}>Computer turn</button>
            </>}
        </>
    )
    } else {
        return (
            <>
                <p>{(turnNumber % 2 === 0) ? 'computer' : 'user'} played ...</p>
                <p> someone won</p>
                <button onClick={handleNextTurn}>Next turn</button>
            </>
        )
    }
}