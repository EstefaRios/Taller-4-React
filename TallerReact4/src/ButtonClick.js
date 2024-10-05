// src/ButtonClick.js
import React from 'react';

const ButtonClick = () => {
    const handleClick = () => {
        alert('¡Botón clickeado!');
    };

    return (
        <button onClick={handleClick}>Click Me!</button>
    );
};

export default ButtonClick;
