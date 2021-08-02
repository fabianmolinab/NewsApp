/**
 * Componente de Header del Blog
 * */

import React, { useState } from 'react';
import styled from 'styled-components';

import { Logo } from '../atoms/Logo';
import { MenuNav } from './MenuNav';
import { InputBusqueda } from '../atoms/InputBusqueda';
import { IconHamburguesa } from '../atoms/IconHamburguesa';
import { colores } from '../../styles/colores';

export const HeaderBlog = () => {

  const [menu, cambiarMenu] = useState ({estado: 'false'});

  return (
      <ContenedorTotal>
        <ContenedorHeader>
          <Logo grid/>
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
  );
};

const ContenedorTotal = styled.div`
  background-color: ${ colores.marronClaro };

  //
`;

const ContenedorHeader = styled.header`
  display: flex;
  padding: 10px;
  height: 50px;
  justify-content: space-between;
  background-color: ${ colores.marronClaro };
  max-width: 1200px;
  margin: 0 auto;
`;