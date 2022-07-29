import { PokemonCard } from "./types";

export default function DisplayCard({
  name,
  img,
  hp,
  attack,
  defense,
  speed,
}: PokemonCard): JSX.Element {
  return (
    <div className="pokemon-card">
      <p>{name}</p>
      <img className="pokemon-card-img" src={img} alt={name} />
      <p>hp: {hp}</p>
      <p>attack: {attack}</p>
      <p>defense: {defense}</p>
      <p>speed: {speed}</p>
    </div>
  );
}
