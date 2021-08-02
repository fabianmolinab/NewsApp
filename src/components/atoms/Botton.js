/**
 * Componente boton estandar
 * @param {function} onClick Accion despues del click
 * @param {string} nombre Contenido del boton
 * @param {object} largeV Propiedad para hacer el botton mas ancho y verde
 * */
import React from 'react';
import styled, { css } from 'styled-components';
import { colores } from '../../const/colores';

export const Botton = ( {onClick, nombre, type, largeV} ) => {
  return (
      <BottonStyles onClick={ onClick } type={ type } largeV={ largeV }>
        { nombre }
      </BottonStyles>
  );
};

export const BottonStyles = styled.button`
  width: 150px;
  height: 40px;
  margin-left: 20px;
  font-weight: 700;
  background: ${ colores.verde };
  border: 1.5px solid ${ colores.verde };
  cursor: pointer;
  color: ${ colores.blanco };
  transition: all .4s;
  border-radius: 8px;

  &:hover {
    font-weight: 700;
    border-width: medium;
    transform: scale(1, 1.1);
  }

  ${ props => props.largeV && css`
    width: 200px;
    margin: 10px auto;
    background: ${ colores.verde };
    color: ${ colores.blanco };
  ` }
`;
