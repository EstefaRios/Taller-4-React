// src/App.js
import './App.css';
import React from 'react';
import ButtonClick from './ButtonClick';
import FormularioUsuario from './FormularioUsuario';
import Formulario from './Formulario';

function App() {
    return (
        <div className="App">
            <h1>Ejercicios de React</h1>
            <ButtonClick />
            <FormularioUsuario />
            <Formulario />
        </div>
    );
}

export default App;
