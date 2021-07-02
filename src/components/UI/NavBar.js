import React, {useContext} from 'react'
import { Link, NavLink } from 'react-router-dom'
import fullscreen from '../../assets/fullscreen.png'
import logout from '../../assets/logout.png'
import pokedex from '../../assets/pokedex.png'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'
import './NavBar.css'


export const NavBar = () => {
    const {user: {name}, dispatch} = useContext(AuthContext);
    const handleFullScreen = (element) => {
        if(element.requestFullScreen) {
            element.requestFullScreen();
          } else if(element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
          } else if(element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen();
          }
        if(document.cancelFullScreen) {
            document.cancelFullScreen();
        } else if(document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if(document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
        }
    }
    const handleLogout = () => {
        dispatch({
            type: types.logout
        })
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png" alt="PokemonAPP" style={{maxHeight: '60px'}}/>
                </Link>
                <div className="collapse navbar-collapse" id="navbarScroll">
                    <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                        <li className="nav-item buscar">
                            {/* <NavLink to="/search" exact activeClassName="active" className="nav-item nav-link">
                                Buscar
                            </NavLink> */}
                        </li>
                    </ul>
                    <NavLink to="/search" exact style={{marginRight: '7%'}} title="Buscar Pokemons" data-bs-toggle="tooltip" data-bs-placement="top">
                        <img src={pokedex} alt="Pokemon"/>
                    </NavLink>
                    <span className="badge bg-warning nombre">Hola {name} espero que disfrutes buscando pokemons!</span>
                    <div className="boton">
                        <img src={logout} alt="LogOut" style={{maxHeight: "60px"}} title="Cerrar Sesión" onClick={handleLogout} />
                    </div>
                    <div className="boton m-3" onClick={() => handleFullScreen(document.documentElement)} title="Pantalla Completa">
                        <img src={fullscreen} alt="FullScreen" style={{maxHeight: "30px"}} />
                    </div>
                </div>
            </div>
        </nav>
    )
}
