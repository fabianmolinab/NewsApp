/**
 * Componente de input tipo checkbox de formulario de validación
 * @param {object} estado Valor del estado del Checkbox
 * @param {function} cambiarEstado Cambia el estado
 * @param {string} id Nombre para enlazar el input con el Label
 * */
import React from 'react'
import styled from 'styled-components'

export const InputCheckbox = ({ estado, cambiarEstado, id }) => {
  const handleInputChange = ({ target }) => {
    cambiarEstado({ ...estado, checked: target.checked })
  }

  return (
    <Input
      type="checkbox"
      checked={estado.checked}
      onChange={handleInputChange}
      id={id}
    />
  )
}

const Input = styled.input`
  display: inline-block;
  margin-right: 10px;
`
