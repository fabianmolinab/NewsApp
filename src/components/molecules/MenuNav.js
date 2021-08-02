/**
 * Menu de Navegación de la aplicación principal
 * @param {object} menu valor del estado para desplegar o no el menu (mobile)
 * @param {function} cambiarMenu cambia el estado para deplegar o no el menu (mobile)
 * @param {function} desaparecerMenu cambia el estado para quitar el menu (mobile) cuando se click algun {nav}
 * */
import React from 'react';
import styled, { css } from 'styled-components';

import { NavLink } from 'react-router-dom';
import { colores } from '../../styles/colores';
import { fontSize } from '../../styles/fonts';
import { InputBusqueda } from '../atoms/InputBusqueda';

export const MenuNav = ( {menu, cambiarMenu} ) => {

  const desaparecerMenu = () => {
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

        <Nav to="/blog/nuevo" onClick={ desaparecerMenu }>
          Lo nuevo
        </Nav>

        <Nav to="/blog/destacado" onClick={ desaparecerMenu }>
          Destacado
        </Nav>

        <Nav to="/blog/podcasts/" onClick={ desaparecerMenu }>
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


`;





