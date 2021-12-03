/**
 * Componente de Header del Blog
 * */

import React, { useState } from 'react'
import styled from 'styled-components'
import { MenuNav } from './MenuNav'
import { InputBusqueda } from '../atoms/InputBusqueda'
import { IconHamburguesa } from '../atoms/IconHamburguesa'
import { colores } from '../../const/colores'
import { device } from '../../const/device'
import { Logo } from '../atoms/Logo'

export const Header = () => {
  const [menu, cambiarMenu] = useState({ estado: 'false' })

  return (
      <ContenedorTotal>
        <ContenedorHeader>
          <Logo/>
          <MenuNav menu={ menu }
                   cambiarMenu={ cambiarMenu }
          />
          <InputBusqueda/>
          <IconHamburguesa
              menu={ menu }
              cambiarMenu={ cambiarMenu }
          />
        </ContenedorHeader>
      </ContenedorTotal>
  )
}

const ContenedorTotal = styled.div`
  background-color: ${colores.marronClaro};
  position: static;

`

const ContenedorHeader = styled.header`
  display: flex;
  padding: 10px;
  height: 50px;
  justify-content: space-between;
  background-color: ${colores.marronClaro};
  max-width: 1200px;
  margin: 0 auto;

  @media ${device.laptop} {
    height: 70px;
    padding: 15px;
  }
`
