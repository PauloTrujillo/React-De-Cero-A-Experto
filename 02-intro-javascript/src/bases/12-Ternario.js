import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import { getHeroeById } from './bases/08-imp-exp';

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

const activo = true;

//Operador Ternario
//const mensaje = ( activo ) ? 'Activo' : null;

//Forma corta
const mensaje = activo && 'Activo';

console.log(mensaje);
