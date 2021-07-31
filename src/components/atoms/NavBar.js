/**
 *
 * */
import React from 'react';
import styled, { css } from 'styled-components';

import { NavLink } from 'react-router-dom';
import { colores } from '../../styles/colores';
import { fontSize } from '../../styles/fonts';
import { InputBusqueda } from './InputBusqueda';

export const NavBar = ( {menu, cambiarMenu} ) => {
  console.log (menu.estado);

  const activeLink = () => {

    if (menu.estado === 'true') {

      cambiarMenu ({
        ...menu,
        estado: 'false',
      });
    }

  };

  return (

      <ContenedorNav menu={ menu.estado }>
        <h3> Menu </h3>

        <Nav to="/blog/nuevo" activeClassName="selected">
          Lo nuevo
        </Nav>

        <Nav to="/blog/destacado" isActive={ () => activeLink }>
          Destacado
        </Nav>

        <Nav to="/blog/podcasts/">
          Podcasts
        </Nav>

        <InputBusqueda menuNav/>
      </ContenedorNav>
  );
};

const ContenedorNav = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${ colores.marronOscuro };
  color: ${ colores.blanco };
  padding: 20px 0;
  position: fixed;
  left: 100%;
  transition: left 0.3s;
  top: 50px;
  bottom: 0;
  right: 0;
  z-index: 102;
  font-size: 20px;
  overflow-y: auto;

  h3 {
    font-size: ${ fontSize.menu };
    margin-bottom: 10px;
  }

  ${ props => props.menu === 'true' && css`
    left: 0;
  ` }
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

  selected {
    color: red;
  }
`;





