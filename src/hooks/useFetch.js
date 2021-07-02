import { useState, useRef, useEffect } from 'react'

export const useFetch = ( url ) => {
    const [state, setstate] = useState({
        data: null,
        loading: true,
        error: null
    });
    const estaCreado = useRef(true);
    useEffect(() => {
        return () => {
            estaCreado.current = false;
        };
    }, [])
    useEffect(() => {
        setstate({
            data: null,
            loading: true,
            error: null
        });
        fetch(url)
        .then( resp => resp.json())
        .then( data => {
            if(estaCreado.current){
                setstate(
                    {
                        loading: false,
                        error: null,
                        data
                    }
                );
            } else{
                console.log('No se llamó al setState')
            }
        })
        .catch( () => {
            setstate({
                data: null,
                loading: false,
                error: 'No se pudo generar la info'
            });
        })
    }, [url])
    return state;

}