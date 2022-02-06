import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { device } from '../../const/device'
import { colores } from '../../const/colores'

export const Logo = () => {
  return (
    <LinkStyles to="/">
      <LogoStyles>NewsApp</LogoStyles>
    </LinkStyles>
  )
}

const LogoStyles = styled.h2`
  @media ${device.tablet} {
    padding-top: 5px;
  }

  &:hover {
    color: ${colores.verdeOscuro};
  }
`
const LinkStyles = styled(Link)`
  text-decoration: none;
  color: ${colores.textoNegro};
`
