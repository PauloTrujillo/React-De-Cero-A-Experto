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

//Desestructuración
//Asignacion desestructurante

const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman',
  rango: 'CapitanIronman'
};

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

//const { nombre, edad, clave } = persona;

//console.log( nombre );
//console.log( edad );
//console.log( clave );

const retornaPersona = ({ nombre, edad, clave, rango = 'Capitán' }) => {
  //console.log( nombre, edad, clave, rango );
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.1233,
      lng: -12.5636
    },
  }

}

const { nombreClave, anios, latlng: { lat, lng } } = retornaPersona(persona);

console.log(nombreClave, anios,);
console.log(lat, lng);




