export default function HiddenCard(): JSX.Element {
    return (
        <div className='pokemon-card'>
            <p>???</p>
            <img src='questionmark' alt='Unknown Pokemon' />
            <p>hp: ???</p>
            <p>attack: ???</p>
            <p>defense: ???</p>
            <p>speed: ???</p>
        </div>
    )
}