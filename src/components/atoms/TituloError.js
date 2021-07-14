/**
 * Titulo de error que se puede mostrar con la propiedad valido
 * @param {string} valido Muestra o no el mensaje
 * @param {string} error Contenido del mensaje
 * */
import React from 'react';
import styled, { css } from 'styled-components';

export const TituloError = ({ valido, error }) => {
  return (
    <ParrafoError valido={valido}>
      {error}
    </ParrafoError>
  );
};

const ParrafoError = styled.p`
  display: none;
  height: 50px;
  width: 90%;
  color: red;
  font-size: 17px;
  font-weight: 600;
  margin: 10px 0 5px 0;
  padding: 0 5px 0 10px;
  border-radius: 8px;

  ${props => props.valido === 'true' && css`
    display: none;
  ` }
  ${props => props.valido === 'false' && css`
    display: block;
  ` }
`;
