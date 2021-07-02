import React from 'react';
import { usePokemon } from '../../hooks/usePokemon';
import { getImgType } from '../../selectors/getImgType';
import './PokemonCard.css';
export const PokemonCard = ({id, name, stats, types, sprites, species}) => {
    const pokemonSpecies = usePokemon(species);
    let cont = 0;
    return (
        <div className="col">
            <div className="card card-info">
                <div className="contenedor">
                    <div className="nombrePokemon">
                        <span className="pokemon">{name[0].toUpperCase() + name.substring(1).toLowerCase()}</span>
                        {
                            types.map(type => (
                                <img key={cont+=1}src={getImgType(type.type.name)} alt="..." data-toggle="tooltip" className="imgtype" title={type.type.name} />
                            ))
                        }
                    </div>
                    <span className="numero">N.°{id.toString().padStart(3, "0")}</span>
                    <img src={sprites.front_default} className="card-img-top mt-3" alt="..." style={{maxWidth:"240px", marginLeft: '20%'}}/>
                </div>
                <div className="card-body">
                    <div align="center">
                        <span className="badge bg-success m-1">HP: {stats[0].base_stat}ps</span>
                        <span className="badge bg-danger m-1">Ataque: {stats[1].base_stat}ps</span>
                        <span className="badge bg-primary m-1">Defensa: {stats[2].base_stat}ps</span>
                        <span className="badge bg-danger m-1">Ataque Especial: {stats[3].base_stat}ps</span>
                        <span className="badge bg-info m-1">Defensa Especial: {stats[4].base_stat}ps</span>
                        <span className="badge bg-warning m-1">Velocidad: {stats[5].base_stat}ps</span>
                    </div>
                    <div>
                        <p align="center" className="card-text" style={{fontWeight: 500}}>{pokemonSpecies}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
