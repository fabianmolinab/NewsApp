/**
 * Este componente es un boton de tipo gradiente
 * @param {string} nombre Nombre del boton
 * @param {string} type Tipo de boton
 * */
import React from 'react';
import styled from 'styled-components';
import { colores } from '../../const/colores';

const Button = styled.button`
  position: absolute;
  width: 100%;
  height: 100%;
  font-weight: 600;
  background: ${ colores.blanco };
  border: 1.5px solid ${ colores.textoNegro };
  color: ${ colores.textoNegro };
  cursor: pointer;
  transition: all .3s;
  z-index: 3;
  border-radius: 10px;

  &:hover {
    color: ${ colores.textoNegro };
    font-weight: 700;
    border: none;
    background: linear-gradient(to right, ${ colores.azul }, ${ colores.verde }, ${ colores.verdeIntenso });
  }
`;

const Bg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${ colores.blanco };
  z-index: 2;
  transform: scale(1.05, 1.2);
  border-radius: 10px;
`;

const BgGradient = styled (Bg)`
  z-index: 1;
  transform: scale(0.2, 1.4);
  transition: all .4s;
`;

const ContenedorBoton = styled.div`
  width: 150px;
  height: 40px;
  background: ${ colores.blanco };
  position: relative;
  border-radius: 10px;

  &:hover ${ BgGradient } {
    transform: scale(1.1, 1.4);
    background: linear-gradient(to right, ${ colores.azul }, ${ colores.verde }, ${ colores.verdeIntenso });
  }
`;

export const ButtonGradient = ( {nombre, type} ) => {
  return (
      <>
        <ContenedorBoton>
          <Button type={ type }>
            { nombre }
          </Button>
          <Bg/>
          <BgGradient/>
        </ContenedorBoton>
      </>
  );
};
