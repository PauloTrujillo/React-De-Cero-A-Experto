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

//Funciones en JS

/*
const saludar = function ( nombre, noSaludos ){
  for (let i = 0; i < noSaludos; i++){
    console.log('Hola ' + nombre);
  }
}
*/

const handShake = ( name ) => {
  return `Turning connection on..... ${ name }`
}

const handShake2 = ( name ) => `Turning connection on..... ${ name }`

const handShake3 = ( ) => `Turning connection on..... Zenlex`

console.log(handShake('Famusa'));

console.log(handShake2('Tequila San Matias'));

console.log(handShake3());

const getUser = () => 
({
    uid: 'MX001',
    userName: 'paulot',
})

console.log(getUser());

const getUsuarioActivo = (nombre) => ( { uid: 'MX-00001', username: nombre } );

const usuarioActivo = getUsuarioActivo('Paulo');

console.log(usuarioActivo);











