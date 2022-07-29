import { OptionsProps } from "./types";

export default function Options({setNewTurn, setCurrentChoice}: OptionsProps): JSX.Element {
    const handleHp = () => {
        setNewTurn(false);
        setCurrentChoice('hp')
    }
    const handleAttack = () => {
        setNewTurn(false);
        setCurrentChoice('attack')
    }
    const handleDefense = () => {
        setNewTurn(false);
        setCurrentChoice('defense')
    }
    const handleSpeed = () => {
        setNewTurn(false);
        setCurrentChoice('speed')
    }
    return (
        <>
            <button type='button' onClick={handleHp}>hp</button>
            <button type='button' onClick={handleAttack}>attack</button>
            <button type='button' onClick={handleDefense}>defense</button>
            <button type='button' onClick={handleSpeed}>speed</button>

        </>
    )
}