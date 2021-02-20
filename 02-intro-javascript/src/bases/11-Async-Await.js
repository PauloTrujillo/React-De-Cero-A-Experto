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

const getImagen = async () => {

  try {
    const apiKey = 'O71MoeBOQdszwS9ss9yR4e1TflAOjaLW';
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?apiKey=${apiKey}`);
    const { data } = await resp.json();

    const { url } = data.images.original
    const img = document.createElement('img');

    img.src = url;
    document.body.append(img);
    //console.log(img);

  } catch (error) {
    console.error(error);
  }



}

getImagen();

