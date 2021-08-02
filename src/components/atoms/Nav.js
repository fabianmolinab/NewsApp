/**
 * Componente NavLink
 *
 * @param {object} estado valor del estado para desplegar o no el menu (mobile)
 * @param {function} cambiarEstado cambia el estado para deplegar o no el menu (mobile)
 * @param {string} nombre
 * @param {string} to Dirección de enlace
 * @param {function} desaparecerMenu cambia el estado para quitar el menu (mobile) cuando se click algun {nav}
 */
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { fontSize } from '../../const/fonts';
import { colores } from '../../const/colores';
import { device } from '../../const/device';

export const Nav = ( {estado, cambiarEstado, nombre, to} ) => {

  const desaparecerMenu = () => {
    if (estado.estado === 'true') {
      cambiarEstado ({
        ...estado,
        estado: 'false',
      });
    }
  };

  return (
      <NavStyle to={ to }
                onClick={ desaparecerMenu }
                activeStyle={ activeStyle }
      >
        { nombre }
      </NavStyle>
  );
};

const NavStyle = styled (NavLink)`
  font-size: ${ fontSize.title };
  font-weight: 600;
  color: ${ colores.blanco };
  line-height: 70px;
  text-decoration: none;

  &:hover {
    color: ${ colores.verdeOscuro };
  }

  &:active {
    color: ${ colores.verdeOscuro };
  }


  @media ${ device.laptop } {
    font-size: ${ fontSize.regular };
    color: ${ colores.marronOscuro };
    line-height: 0;
    margin-right: 20px;

    &:hover {
      color: ${ colores.verdeOscuro };
    }

    &:active {
      color: ${ colores.verde };
    }
  }
`;

const activeStyle = {
  color: `${ colores.verdeOscuro }`,
};