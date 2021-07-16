import React from 'react';
import styled from 'styled-components';
import { device } from '../../const/device';

export const ImgLogin = () => {
  return (
    <Img alt="Imagen Login"
      src="./assets/imgs/imagen-login.svg"
    />
  );
};

const Img = styled.img`
  height: 600px;
  width: 59.5%;
  order: 0;

  //La imagen no aparece en mobile
  @media ${device.mobileS} {
    display: none;
  };

  @media ${device.tablet} {
    display: block;
  };

`;

