// src/FormularioUsuario.js
import React, { useState } from 'react';

const FormularioUsuario = () => {
    const [nombre, setNombre] = useState('');

    const handleChange = (e) => {
        setNombre(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`¡Hola, ${nombre}!`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={nombre} 
                onChange={handleChange} 
                placeholder="Escribe tu nombre" 
            />
            <button type="submit">Enviar</button>
        </form>
    );
};

export default FormularioUsuario;
