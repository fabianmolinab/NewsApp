/**
 * Componente de tipo label con cambios de colores dependiendo la propiedad color
 * @param {string} color Cambiar el color del texto
 * @param {string} name Contenido del label
 * */
import React from 'react'
import styled, { css } from 'styled-components'
import { colores } from '../../const/colores'

export const LabelInput = ({ color, name }) => {
  return <Label color={color}>{name}</Label>
}

const Label = styled.label`
  display: block;
  width: 100%;
  font-weight: 700;
  //padding: 10px 10px 5px 5px;
  min-height: 20px;
  cursor: pointer;

  ${(props) =>
    props.color === 'true' &&
    css`
      color: ${colores.verdeOscuro} !important;
    `}

  ${(props) =>
    props.color === 'false' &&
    css`
      color: ${colores.rojo} !important;
    `}
`
