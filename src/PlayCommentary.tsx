import { GamePlayProps } from "./types";
import { useEffect } from "react";

export default function PlayCommentary({userCards, setUserCards, compCards, setCompCards, newTurn, setNewTurn, compIndex, setCompIndex, userIndex, setUserIndex, turnNumber, setTurnNumber, latestWinner, setLatestWinner, currentChoice, setCurrentChoice}: GamePlayProps): JSX.Element {
    const handleTurn = () => {
        setNewTurn(false);
    }

    useEffect(() => {
        if (newTurn === false) {
            if (turnNumber % 2 === 0) {
                const choices: ('hp' | 'attack' | 'defense' | 'speed')[] = ['hp', 'attack', 'defense', 'speed']
                const choice: 'hp' | 'attack' | 'defense' | 'speed' = choices[Math.floor(Math.random()*4)];
                setCurrentChoice(choice)
                if (userCards[userIndex][choice] >= compCards[compIndex][choice]) {
                    setLatestWinner('user')
                    // setUserCards([...userCards, compCards[(compIndex)]]);
                    // setCompCards([...compCards.slice(0, compIndex), ...compCards.slice(compIndex + 1)]);
                    // setUserIndex(userIndex => userIndex + 1)
                } else {
                    setLatestWinner('comp')
                    // setCompCards([...compCards, userCards[(userIndex)]]);
                    // setUserCards([...userCards.slice(0, userIndex), ...userCards.slice(userIndex + 1)]);
                    // setCompIndex(compIndex => compIndex + 1) 
                }
            } else {
                const choice = currentChoice;
                if (userCards[userIndex][choice] >= compCards[compIndex][choice]) {
                    setLatestWinner('user')
                    // setUserCards([...userCards, compCards[(compIndex)]]);
                    // setCompCards([...compCards.slice(0, compIndex), ...compCards.slice(compIndex + 1)]);
                    // setUserIndex(userIndex => userIndex + 1);
                } else {
                    setLatestWinner('comp')
 
                    }
                }
        }
    }, [newTurn]);
  
    
    const handleNextTurn = () => {
        setNewTurn(true);
        setTurnNumber(turnNumber => turnNumber + 1);
        // setUserCurrentCard(userCards[userIndex]);
        if (latestWinner === 'user') {
            setUserCards([...userCards, compCards[(compIndex)]]);
            setCompCards([...compCards.slice(0, compIndex), ...compCards.slice(compIndex + 1)]);
            setUserIndex(userIndex => userIndex + 1);
        } else {
            setCompCards([...compCards, userCards[(userIndex)]]);
            setUserCards([...userCards.slice(0, userIndex), ...userCards.slice(userIndex + 1)]); 
            setCompIndex(compIndex => compIndex + 1);
        }
    }
    if (newTurn) {
    return (
        <>
            <p>It is {(turnNumber % 2 === 0) ? 'computer' : 'user'} 's turn</p>
            {(turnNumber % 2 === 0) && <>
                <p>Computer to play</p>
                <button onClick={handleTurn}>Computer turn</button>
            </>}
        </>
    )
    } else {
        return (
            <>
                <p>{(turnNumber % 2 === 0) ? 'computer' : 'user'} played {currentChoice}</p>
                <p>{latestWinner} won!</p>
                <button onClick={handleNextTurn}>Next turn</button>
            </>
        )
    }
}