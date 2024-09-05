import React from 'react';
import './estilos.css'; 

const Teclado = ({ pacman }) => {
  const { x, y } = pacman;

  return (
    <div className="board">
      <div
        className="pacman"
        style={{
          left: `${x * 30}px`,
          top: `${y * 30}px`,
        }}
      />
    </div>
  );
};

export default Teclado;

