import React from 'react'
import {PokemonList} from '../Pokemones/PokemonList'
export const HomeScreen = () => {
    return (
        <div>
            <PokemonList cantidad={9}/>
        </div>
    )
}
