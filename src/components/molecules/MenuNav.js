/**
 * Menu de Navegación de la aplicación principal
 * @param {object} menu valor del estado para desplegar o no el menu (mobile)
 * @param {function} cambiarMenu cambia el estado para deplegar o no el menu (mobile)
 *
 * */
import React from 'react';
import styled, { css } from 'styled-components';
import { colores } from '../../const/colores';
import { InputBusqueda } from '../atoms/InputBusqueda';
import { device } from '../../const/device';
import { Nav } from '../atoms/Nav';

export const MenuNav = ( {menu, cambiarMenu} ) => {

  return (

      <ContenedorNav menu={ menu.estado }>

        <Nav estado={ menu }
             cambiarEstado={ cambiarMenu }
             nombre="Lo nuevo"
             to="/nuevo"
        />

        <Nav estado={ menu }
             cambiarEstado={ cambiarMenu }
             nombre="Destacados"
             to="/destacados"
        />

        <Nav estado={ menu }
             cambiarEstado={ cambiarMenu }
             nombre="Podcasts"
             to="/podcasts"
        />

        <Nav estado={ menu }
             cambiarEstado={ cambiarMenu }
             nombre="Videos"
             to="/videos"
        />

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

  @media ${ device.laptop } {
    flex-direction: row;
    justify-content: space-between;
    position: static;
    left: 0;
    top: 0;
    transition: none;
    z-index: auto;
    background-color: ${ colores.marronClaro };
    overflow: hidden;
  }

  ${ props => props.menu === 'true' && css`
    left: 0;
  ` }
`;

