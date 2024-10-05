// src/Formulario.js
import React, { useState } from 'react';
import Resultado from './Resultado';

const Formulario = () => {
    const [numero, setNumero] = useState('');

    const handleChange = (e) => {
        setNumero(e.target.value);
    };

    return (
        <div>
            <input 
                type="number" 
                value={numero} 
                onChange={handleChange} 
                placeholder="Escribe un número" 
            />
            <Resultado numero={numero} />
        </div>
    );
};

export default Formulario;
