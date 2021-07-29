import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { colores } from '../../styles/colores';

export const IconHamburguesa = () => {
  return (

      <Botton>
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
`;