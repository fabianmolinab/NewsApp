import React from 'react';
import styled from 'styled-components';

import { device } from '../../const/device';

export const InputBusqueda = () => {
  return (
      <Input/>
  );
};

const Input = styled.input`

  display: none;

  @media ${ device.tablet } {
    display: block;
  }

`;


