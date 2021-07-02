import React from 'react';
import ReactDOM from 'react-dom';
import { PokemonAPP } from './PokemonAPP';


import background from './assets/fondo.png';
document.body.setAttribute("style", "background-image: url(" + background + ");background-size: 100%");


ReactDOM.render(
  <PokemonAPP />,
  document.getElementById('root')
);