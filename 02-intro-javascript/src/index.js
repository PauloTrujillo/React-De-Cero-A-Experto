import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { heroes } from './data/heroes';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id);

const getHeroeByName = (name) => heroes.find( (heroe) => heroe.name === name );

const getHeroesByOwner = (owner) => heroes.filter( (heroe) => heroe.owner === owner );

console.log( getHeroeById(4) );
console.log( getHeroeByName('Gualguarin') );
console.log( getHeroesByOwner('Marvel') );

