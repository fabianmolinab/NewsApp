import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const IconoMenu = () => {
  return (

      <Botton>
        <FontAwesomeIcon icon={ faBars }/>
      </Botton>
  );

};
const Botton = styled.button`
  bottom-style: none;

`;