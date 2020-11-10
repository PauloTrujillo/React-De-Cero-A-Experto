import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

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

const nombre = 'Fernando';
const apellido = 'Herrera';

let valorDado = 5;
valorDado = 9;

console.log(nombre, apellido, valorDado);

//No se debe usar var muthafucka
if (true) {
    let valorDado = 6;
    const nombre = 'Peter';
    console.log(valorDado);
    console.log(nombre);
}

