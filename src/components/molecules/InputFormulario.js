/**
 * Este componente es el input de algun formulario
 * @param {object} estado
 * @param {function} cambiarEstado Cambia el estado del input
 * @param {string} name Titulo del formulario
 * @param {string} type Tipo de Input
 * @param {string} error Mensaje de error
 * @param {object} expresionRegular Tipo de expresion regular
 * @param {props} signup Es una propiedad de estilos propios en la pagina signup
 */

import React from 'react'
import styled, { css } from 'styled-components'
import { Input } from '../atoms/Input'
import { LabelInput } from '../atoms/LabelInput'
import { TituloError } from '../atoms/TituloError'

export const InputFormulario = ({
  estado,
  cambiarEstado,
  name,
  type,
  error,
  expresionRegular,
  signup
}) => {
  return (
    <ContenedorInput signup={signup}>
      <LabelInput color={estado.valido} name={name} />

      <Input
        estado={estado}
        cambiarEstado={cambiarEstado}
        name={name}
        type={type}
        valido={estado.valido}
        expresionRegular={expresionRegular}
      />

      <TituloError valido={estado.valido} error={error} />
    </ContenedorInput>
  )
}

const ContenedorInput = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 15px;

  ${(props) =>
    props.signup &&
    css`
      align-items: center;
      label {
        width: 100%;
        margin-top: 15px;
      }
      input {
        width: 100%;
      }
    `}
`
