import { useEffect, useState } from "react";

export const usePokemons = (cantPokemons) => {
    const [pokemonInfo, setpokemonInfo] = useState([])
    useEffect(() => {
        let url = '';
        for(let i = 1; i < cantPokemons+1; i++){
            url = `https://pokeapi.co/api/v2/pokemon/${i}`;
            fetch(url)
            .then( resp => resp.json())
            .then(data => {
                setpokemonInfo(pokemonInfo => [...pokemonInfo, data]);
            })
        }
    }, [cantPokemons])


    return pokemonInfo;
}
