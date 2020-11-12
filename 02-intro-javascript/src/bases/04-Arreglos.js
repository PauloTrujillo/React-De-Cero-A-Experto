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

//Arreglos en JS
//const arreglo = new Array( 100 );
const arreglo = [1,2,3,4];

/*
arreglo.push(1);
arreglo.push(2);
arreglo.push(3);
arreglo.push(4);
arreglo.push(5);
*/

let arreglo2 = [ ...arreglo, 5 ];

let arreglo3 = arreglo2.map(
  function(numero) { return 'Hola x' + numero }
);

arreglo3 = [ ...arreglo3, 'Hola Caon..' ];

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);



