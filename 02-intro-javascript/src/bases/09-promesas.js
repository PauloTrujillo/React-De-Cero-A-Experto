import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { getHeroeById } from './bases/08-imp-exp';

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

// const promesa = new Promise((resolve, reject) => { 
  
//   console.log('Log instantaneo');

//   setTimeout(() => {
//     const heroe = getHeroeById(2);
//     //reject('No se pudo encontrar el heroe');
//     resolve(heroe);
//   }, 2000);

// });

// promesa.then( (heroe) => {
//   console.log('heroe', heroe );
// })
// .catch( err => console.warn( err ) );

const getHeroeByIdAsync = ( id ) => {

  return new Promise((resolve, reject) => {

    console.log('Log instantaneo');

    setTimeout(() => {
      const p1 = getHeroeById(id);
      
      if (p1 !== undefined) {
        resolve(p1);
      } else if (p1 === undefined) {
        reject('No se pudo encontrar el heroe');
      }
      
    }, 1000);

  });

}

getHeroeByIdAsync(5).then(console.log).catch( console.warn);
