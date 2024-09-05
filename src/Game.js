import React, { useState, useEffect, useCallback } from 'react';
import { useKeyPress } from 'react-use';
import Teclado from './Teclado';

const Game = () => {
  const [pacman, setPacman] = useState({ x: 5, y: 5 });
  const [direccion, setDireccion] = useState('DERECHA');

  const manejarTecla = useCallback((e) => {
    switch (e.key) {
      case 'ArrowUp':
        setDireccion('ARRIBA');
        break;
      case 'ArrowDown':
        setDireccion('ABAJO');
        break;
      case 'ArrowLeft':
        setDireccion('IZQUIERDA');
        break;
      case 'ArrowRight':
        setDireccion('DERECHA');
        break;
      default:
        break;
    }
  }, []);

  useKeyPress(manejarTecla);

  useEffect(() => {
    const moverPacman = () => {
      setPacman((prev) => {
        let { x, y } = prev;
        switch (direccion) {
          case 'ARRIBA':
            y -= 1;
            break;
          case 'ABAJO':
            y += 1;
            break;
          case 'IZQUIERDA':
            x -= 1;
            break;
          case 'DERECHA':
            x += 1;
            break;
          default:
            break;
        }
        return { x, y };
      });
    };

    const intervalo = setInterval(moverPacman, 200);

    return () => clearInterval(intervalo);
  }, [direccion]);

  return (
    <div>
      <Teclado pacman={pacman} />
    </div>
  );
};

export default Game;
