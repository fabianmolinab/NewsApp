/**
 * Componente de tipo label con cambios de colores dependiendo la propiedad color
 * @param {string} color Cambiar el color del texto
 * @param {string} name Contenido del label
 * */
import React from 'react';
import styled, { css } from 'styled-components';
import { colores } from '../../styles/colores';

export const LabelInput = ({ color, name }) => {
  return (
    <Label color={color}>
      {name}
    </Label>
  );
};

const Label = styled.label`
  color: black;
  margin: 10px 0 5px 0;
  font-weight: 600;

  ${props => props.color === 'true' && css`
    color: ${colores.verdeOscuro} !important;
  ` }

  ${props => props.color === 'false' && css`
    color: ${colores.rojo} !important;
  ` }
`;