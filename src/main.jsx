import React from 'react';
import ReactDOM from 'react-dom/client';
//import { PrimerComponente } from './Components/PrimerComponente';
import './assets/Styles/styles.css';
//import { SegundoComponente } from './Components/SegundoComponente'; 
//import { PrimerComponente } from './Components/PrimerComponente';
//import { ContadorApp } from './Components/ContadorApp';
import { ListadoApp } from '../ListadoApp'
import { AgregarTarea } from './Components/AgregarTarea';

//se manda texto entre comillas y valores entre llaves
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ListadoApp/>
  </React.StrictMode>

)