/**
 * Componente Header de formulario
 * @param {string} content Contenido de el titulo
 * @param {string} marginB30 Estilo de MarginBotton 20px
 * */
import React from 'react'
import styled, { css } from 'styled-components'

export const HeaderForm = ({ content, marginB30 }) => {
  return (
    <Header marginB_30={marginB30}>
      <h2>{content} </h2>
    </Header>
  )
}

const Header = styled.header`
  text-align: center;
  box-sizing: border-box;

  ${(props) =>
    props.marginB30 &&
    css`
      margin-bottom: 30px;
    `}
`
