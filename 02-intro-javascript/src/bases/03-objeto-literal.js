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


const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  correo: 'bastiant@colegioalanturing.edu.mx',
  password: 'alanturing03',
  edad: 6,
  direccion: {
    ciudad: 'New York',
    zip: 45070,
    lat: 14.3233,
    lng: 25.6566,
  },
};

console.log( persona );
const persona2 = { ...persona };
persona2.nombre = 'Elon';
console.log(persona2);
console.log(persona);





