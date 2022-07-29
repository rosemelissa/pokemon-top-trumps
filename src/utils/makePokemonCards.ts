import { PokemonCard } from "../types"

export default function makePokemonCards(num: number): PokemonCard[] {
    const pokemonArray: PokemonCard[] = [];
    for (let i = 0; i < num; i++) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${Math.ceil(100*Math.random())}`)
        .then (response => response.json())
        .then ((jsonBody) => pokemonArray.push({
            name: jsonBody.forms[0].name,
            img: jsonBody.sprites.front_default,
            hp: jsonBody.stats[0].base_stat,
            attack: jsonBody.stats[1].base_stat,
            defense: jsonBody.stats[2].base_stat,
            speed: jsonBody.stats[5].base_stat,
            }
            ));
    }
    return pokemonArray;
}