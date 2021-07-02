import {useState, useEffect} from 'react';

export const usePokemon = (url) => {
    const [pokemon, setpokemon] = useState('');
    useEffect(() => {
        fetch(url)
        .then(resp => resp.json())
        .then((poke) => {
            poke.flavor_text_entries.forEach( curiosos => {
                if(curiosos.language.name === 'es'){
                    setpokemon(curiosos.flavor_text);
                }
            });
        });
    }, [url])
    return pokemon;
}