export const getPokemonByName = (name = '', pokemons) => {
    let pokemonsList = [];
    if(name === ''){
        return [];
    }
    if(pokemons.length > 0){
        pokemonsList = pokemons
    }
    return pokemonsList.filter(pokemons => pokemons.name.toLowerCase().includes(name.toLowerCase()));
}
