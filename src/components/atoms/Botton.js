/**
 * Componente boton estandar
 * @param {function} onClick Accion despues del click
 * @param {string} nombre Contenido del boton
 * */
import styled      from 'styled-components';
import React       from 'react';
import { colores } from '../../styles/colores';

export const Botton = ( { onClick, nombre, type } ) => {
  return (
      <BottonStyles onClick={ onClick } type={ type }>
        { nombre }
      </BottonStyles>
  );
};

export const BottonStyles = styled.button`
  width: 150px;
  height: 40px;
  margin-left: 20px;
  font-size: 1.1em;
  background: ${ colores.blanco };
  border: 1.5px solid ${ colores.verde };
  cursor: pointer;
  color: ${ colores.verde };
  transition: all .4s;
  border-radius: 8px;

  &:hover {
    font-weight: 600;
    border-width: medium;
    transform: scale(1, 1.1);
  }
`;
