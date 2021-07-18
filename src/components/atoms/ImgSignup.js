import React from 'react';
import styled from 'styled-components';
import { device } from '../../const/device';
import { colores } from '../../styles/colores';

export const ImgSignup = () => {
  return (
    <Img alt="Imagen de Registro" src="./assets/imgs/imagen-signup.svg" />
  );
};

const Img = styled.img`
  //La imagen no aparece en mobile
  display: none;

  @media ${device.tablet} {
    display: block;
    height: 40%;
    width: 39.5%;
    margin-top: 20px;
    order: 1;
  };
  @media ${device.desktop}{
    height: 600px;
    background-color: ${colores.blanco};
  }
`;

