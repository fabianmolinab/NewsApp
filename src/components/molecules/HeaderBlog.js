/**
 * Componente de Header del Blog
 * */

import React from 'react';
import styled from 'styled-components';

import { Logo } from '../atoms/Logo';
import { NavBar } from '../atoms/NavBar';
import { InputBusqueda } from '../atoms/InputBusqueda';
import { NavHamburguesa } from '../atoms/NavHamburguesa';
import { colores } from '../../styles/colores';

export const HeaderBlog = () => {
  return (
      <ContenedorHeader>
        <Logo grid/>
        <NavBar/>
        <InputBusqueda/>
        <NavHamburguesa/>
      </ContenedorHeader>
  );
};

const ContenedorHeader = styled.header`
  display: flex;
  padding: 10px;
  justify-content: space-between;
  height: 60px;
  background-color: ${ colores.marronClaro };
`;