/**
 * Titulo de error que se puede mostrar con la propiedad valido
 * @param {string} valido Muestra o no el mensaje
 * @param {string} error Contenido del mensaje
 * */
import React from 'react'
import styled, { css } from 'styled-components'
import { colores } from '../../const/colores'

export const TituloError = ({ valido, error }) => {
  return <ParrafoError valido={valido}>{error}</ParrafoError>
}

const ParrafoError = styled.p`
  display: none;
  width: 90%;
  color: ${colores.rojo};
  font-weight: 600;
  margin-top: 5px;

  ${(props) =>
    props.valido === 'true' &&
    css`
      display: none;
    `}
  ${(props) =>
    props.valido === 'false' &&
    css`
      display: block;
    `}
`
