/**
 * Componente general para parrafos tipo texto
 * @param {string} contenido Contenido del parrafo
 * @param {props} desc Propiedad para los estilos de descripción en los card del blog
 * */

import React from 'react';
import { fonts } from '../../const/fonts';
import styled, { css } from 'styled-components';

export const Parrafo = ( {contenido, desc} ) => {
  return (
      <ParrafoStyle desc>{ contenido }</ParrafoStyle>
  );
};

const ParrafoStyle = styled.p`

  font-family: ${ fonts.regular };
  font-size: 18px;
  line-height: 28px;
  letter-spacing: -0.003em;
  text-rendering: optimizeLegibility;

  ${ props => props.desc && css`
    font-size: 16px;
    color: #3a3a3a;
  ` }
`;