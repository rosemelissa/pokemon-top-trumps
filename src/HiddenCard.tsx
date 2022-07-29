export default function HiddenCard(): JSX.Element {
    return (
        <div className='pokemon-card'>
            <p>???</p>
            <img className='pokemon-card-img' src='./images/pokeball.png' alt='Unknown Pokemon' />
            <p>hp: ???</p>
            <p>attack: ???</p>
            <p>defense: ???</p>
            <p>speed: ???</p>
        </div>
    )
}