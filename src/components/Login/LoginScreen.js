import React, {useContext} from 'react';
import { types } from '../../types/types';
import {AuthContext} from '../../auth/AuthContext';
import { useForm } from '../../hooks/useForm';

import './Login.css';

export const LoginScreen = ({history}) => {
    const [formValues, handleInputChange] = useForm();
    const {nombre} = formValues;
    const {dispatch} = useContext(AuthContext);
    const handleLogin = () => {
        const lastPath = localStorage.getItem('lastPath') || '/';
        history.replace(lastPath);
        dispatch({
            type: types.login,
            payload: {
                name: nombre[0].toUpperCase() + nombre.substring(1).toLowerCase()
            }
        })
    };
    return (
        <div className="container login">
            <img src="https://fontmeme.com/permalink/210630/94962b6ec63eeebf1f0b6bc93b0d4096.png" style={{maxWidth: '70%'}} className="banner" alt="pokemonBanner"/>
            <form onSubmit={handleLogin}>
                <input className="form-control mt-5 nombres" type="text" name="nombre" value={nombre || ''} onChange={handleInputChange} autoComplete="off" placeholder="Ingrese su Nombre..."/>
                <button className="btn btn-warning m-3 ingresar" type="submit">Ingresar</button>
            </form>
        </div>
    )
}
