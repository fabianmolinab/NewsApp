/**
 * Componente que muestra mensaje de enviado o de error en el input dendiendo si la validación
 * @param {object} mensajeConfirmacion Valor del estado de validación
 *
 */
import React from 'react'
import styled, { css } from 'styled-components'
import { colores } from '../../const/colores'

export const MensajeError = ({ mensajeConfirmacion }) => {
  return (
    <>
      {mensajeConfirmacion.correcto === 'true' &&
      mensajeConfirmacion.fallido === 'false'
        ? (
        <RegistroEnviado mensaje={mensajeConfirmacion.correcto} correcto>
          Un mensaje fue enviado a su email para confirmar el registro
        </RegistroEnviado>
          )
        : mensajeConfirmacion.correcto === 'false' &&
        mensajeConfirmacion.fallido === 'true'
          ? (
        <RegistroEnviado mensaje={mensajeConfirmacion.fallido} fallido>
          Le falto alguno de los cambios
        </RegistroEnviado>
            )
          : (
        <RegistroEnviado mensaje={mensajeConfirmacion.fallido} fallido />
            )}
    </>
  )
}

const RegistroEnviado = styled.p`
  font-size: 17px;
  font-weight: 600;

  ${(props) =>
    props.mensaje === 'true' &&
    css`
      display: block;
    `}
  ${(props) =>
    props.mensaje === 'false' &&
    css`
      display: none;
    `}
  ${(props) =>
    props.fallido &&
    css`
      color: ${colores.rojo};
    `}
  ${(props) =>
    props.correcto &&
    css`
      color: ${colores.verdeOscuro};
    `}
`
