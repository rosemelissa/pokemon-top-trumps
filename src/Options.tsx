import { GamePlayProps, PokemonCard } from "./types";

export default function Options({compCards, setCompCards, userCards, setUserCards, newTurn, setNewTurn, compIndex, setCompIndex, userIndex, setUserIndex, turnNumber, setTurnNumber}: GamePlayProps): JSX.Element {
    const handleHp = () => {
        setNewTurn(false);
        // setCompIndex(compIndex => compIndex + 1);
        // setUserIndex(userIndex => userIndex + 1)
        if (userCards[userIndex].hp > compCards[compIndex].hp) {
            setUserCards([...userCards, compCards[(compIndex)]]);
            setCompCards([...compCards.slice(0, compIndex), ...compCards.slice(compIndex + 1)]);
            setCompIndex(compIndex => compIndex + 2);
            setUserIndex(userIndex => userIndex + 1)

        } else {
            setCompCards([...compCards, userCards[(userIndex)]]);
            setUserCards([...userCards.slice(0, userIndex), ...userCards.slice(userIndex + 1)]); 
            setCompIndex(compIndex => compIndex + 1);
        setUserIndex(userIndex => userIndex + 2)           
        }
    }
    return (
        <>
            <button type='button' onClick={handleHp}>hp</button>
        </>
    )
}