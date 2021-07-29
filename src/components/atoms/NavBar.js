/**
 *
 * */
import React from 'react';
import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
import { colores } from '../../styles/colores';
import { fontSize } from '../../styles/fonts';
import { InputBusqueda } from './InputBusqueda';

export const NavBar = () => {
  return (

      <ContenedorNav>
        <h3> Menu </h3>

        <Nav to="/blog/nuevo">
          Lo nuevo
        </Nav>

        <Nav to="/blog/destacado">
          Destacado
        </Nav>

        <Nav to="/blog/podcasts/">
          Podcasts
        </Nav>

        <InputBusqueda menuNav/>
      </ContenedorNav>
  );
};

const ContenedorNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${ colores.marronOscuro };
  color: ${ colores.blanco };
  padding: 20px 0;
  position: fixed;
  left: 0;
  top: 60px;
  bottom: 0;
  right: 0;
  z-index: 102;
  font-size: 20px;
  overflow-y: auto;

  h3 {
    font-size: ${ fontSize.menu };
    margin-bottom: 10px;
  }
`;

const Nav = styled (NavLink)`
  font-size: ${ fontSize.title };
  font-weight: 500;
  color: ${ colores.blanco };
  line-height: 70px;
  text-decoration: none;

  &:hover {
    color: ${ colores.marronClaro };
  }
`;





