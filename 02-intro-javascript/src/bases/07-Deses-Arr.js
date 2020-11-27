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

const departamentos = [ 'Finanzas', 'Sistemas', 'Direccion'  ];
const [ , , dep3 ] = departamentos
console.log(dep3);

const retornaArreglo = () => {
  return ['Surprise MuthaFucka', 123];
}

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros); 

const usingState = ( valor ) => {
  return [ valor, ()=>{ console.log( 'Hola Mundirijillo!!!') } ];
}

const [nombre, setNombre]  = usingState('R&D');

console.log(nombre);
setNombre();
