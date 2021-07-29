import React from 'react';
import styled, { css } from 'styled-components';
import { device } from '../../const/device';

export const InputBusqueda = ( {menuNav} ) => {
  return (
      <Input menuNav={ menuNav }/>
  );
};

const Input = styled.input`

  display: none;

  @media ${ device.laptop } {
    display: block;
  }

  ${ props => props.menuNav && css`
    display: block;

    @media ${ device.laptop } {
      display: none;
    }
  ` }

`;


