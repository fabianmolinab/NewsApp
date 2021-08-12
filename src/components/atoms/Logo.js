import React from 'react';
import styled from 'styled-components';
import { device } from '../../const/device';

export const Logo = () => {
  return (
      <LogoStyles>NewsApp</LogoStyles>
  );
};

const LogoStyles = styled.h2`

  @media ${ device.tablet } {
    padding-top: 5px;

  }

`;