import React, { useReducer, useEffect } from 'react'
import {AppRouter} from './Routes/AppRouter';

import { authReducer } from './auth/authReducer';
import { AuthContext } from './auth/AuthContext';
import './assets/styles.css';

const init = () => {
    return JSON.parse(localStorage.getItem('user')) ||  {
        logged: false
    }
}
export const PokemonAPP = () => {
    const [user, dispatch] = useReducer(authReducer, {}, init);
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);
    return (
        <AuthContext.Provider value={{user, dispatch}}>
            <AppRouter />
        </AuthContext.Provider>
    )
}
