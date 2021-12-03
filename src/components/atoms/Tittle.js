import React from 'react'
import styled from 'styled-components'
import { colores } from '../../const/colores'
import { fonts } from '../../const/fonts'

export const Title = ({ content }) => {
  return (

      <TitleStyles>{ content }</TitleStyles>

  )
}

const TitleStyles = styled.h3`
  font-size: 20px;
  font-family: ${fonts.regular};
  font-weight: 600;
  color: ${colores.textoNegro};
  letter-spacing: -0.003em;
  line-height: 28px;
  cursor: pointer;
  margin-top: 5px;

  &:hover {
    color: ${colores.verdeOscuro};
  }
`
