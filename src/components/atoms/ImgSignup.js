import React       from 'react';
import styled      from 'styled-components';
import { device }  from '../../const/device';
import { colores } from '../../styles/colores';

export const ImgSignup = () => {
  return (
      <Img alt="Imagen de Registro" src="./assets/imgs/imagen-signup.svg"/>
  );
};

const Img = styled.img`
  height: 600px;
  width: 40%;
  order: 1;
  background-color: ${ colores.blanco };

  //La imagen no aparece en mobile
  @media ${ device.mobileS } {
    display: none;
  };

  @media ${ device.tablet } {
    display: block;
  };

`;

