import React, {useMemo} from 'react'
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getPokemonByName } from '../../selectors/getPokemonByName';
import { PokemonCard } from '../Pokemones/PokemonCard';
import { usePokemons } from '../../hooks/usePokemons';

import './Search.css'
export const SearchScreen = ({history}) => {
    const {search} = useLocation();
    const { q = '' } = queryString.parse(search);
    const [ formValues, handleInputChange ] = useForm({
        searchText: q
    });
    const pokemonsList = usePokemons(890);
    const { searchText } = formValues;
    const pokemonsFiltrados = useMemo(() => getPokemonByName(q, pokemonsList), [q, pokemonsList]);
    const handleSubmit = (event) => {
        event.preventDefault();
        history.push(`?q=${searchText}`);
    };
    let cont = 0;
    return (
        <>
            <div className="row">
                <div className="col">
                    <form onSubmit={handleSubmit} >
                        <div className="card">
                            <input type="text" autoFocus name="searchText" value={searchText || ''} onChange={handleInputChange} placeholder="Buscar pokemons" className="form-control" autoComplete="off"/>
                        </div>
                        <button type="submit" className="btn btn-success m-3 buscarBoton">Buscar</button>
                    </form>
                </div>
            </div>
            <div className="row row-cols-3 g-4 mt-5">
                {
                    (q === '') && <div className="alert alert-info" align="center" style={{left: '110%', pointerEvents:'none'}}>
                        Busca Pokemons arriba 🡹
                    </div>
                }
                {
                    (q !== '' && pokemonsFiltrados.length === 0) && <div className="alert alert-warning" align="center">
                        No hay un pokemon con el nombre '{q}'
                    </div>
                }
                {
                    pokemonsFiltrados.map( pokemon =>
                        <PokemonCard key={cont+=1} id={pokemon.id} name={pokemon.name} stats={pokemon.stats} types={pokemon.types} sprites={pokemon.sprites} species={pokemon.species.url}/>
                    )
                }
            </div>
        </>
    )
}
