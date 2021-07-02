import React, { useMemo } from 'react';
import { usePokemons } from '../../hooks/usePokemons';
import { getPokemons } from '../../selectors/getPokemons';
import {PokemonCard} from './PokemonCard';
export const PokemonList = ({cantidad}) => {
    const pokemons = usePokemons(cantidad);
    const data = useMemo(() => getPokemons(pokemons), [pokemons])
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4 mt-3 mb-3">
            {
                (data.length === cantidad) ?
                    data.map(pokemon => (
                        <PokemonCard key={pokemon.id} id={pokemon.id} name={pokemon.name} stats={pokemon.stats} types={pokemon.types} sprites={pokemon.sprites} species={pokemon.species.url}/>
                    ))
                : <h1 style={{color:'white'}}>No se cargaron pokemons</h1>
            }
        </div>
    )

}
