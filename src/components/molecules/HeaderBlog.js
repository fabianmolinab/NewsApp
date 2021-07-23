import React from 'react';
import styled from 'styled-components';

import { Logo } from '../atoms/Logo';
import { NavBar } from '../atoms/NavBar';
import { InputBusqueda } from '../atoms/InputBusqueda';
import { IconoMenu } from '../atoms/IconoMenu';

export const HeaderBlog = () => {
  return (
      <ContenedorHeader>
        <Logo grid/>
        <NavBar/>
        <InputBusqueda/>
        <IconoMenu/>
      </ContenedorHeader>
  );
};

const ContenedorHeader = styled.header`
  display: flex;
`;