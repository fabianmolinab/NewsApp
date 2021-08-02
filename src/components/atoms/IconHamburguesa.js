/**
 * Componente de menu hambuerguesa que cambia dependiendo el estado
 * @param {object} menu
 * @param {function} cambiarMenu cambia el estado del Menu
 *
 **/
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { colores } from '../../const/colores';
import { device } from '../../const/device';

export const IconHamburguesa = ( {menu, cambiarMenu} ) => {

  const handleNav = () => {

    if (menu.estado === 'false') {
      cambiarMenu ({
        ...menu,
        estado: 'true',
      });
    } else {
      cambiarMenu ({
        ...menu,
        estado: 'false',
      });
    }
  };

  return (

      <Botton onClick={ handleNav }>
        <FontAwesomeIcon icon={ faBars }/>
      </Botton>
  );
};

const Botton = styled.button`
  color: ${ colores.marronOscuro };
  font-size: 23px;
  background: none;
  border: none;
  cursor: pointer;

  @media ${ device.laptop } {
    display: none;
  }
`;