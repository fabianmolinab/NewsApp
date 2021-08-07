/**
 * Imagen del Card del Blog en la pagina principal
 * */

import React from 'react';
import styled from 'styled-components';

export const ImgBlog = ( {src} ) => {
  return (
      <Contenedor>
        <ImgStyles src={ src } alt="Descripción del blog"/>
      </Contenedor>
  );
};

const Contenedor = styled.div`
  width: 60%;
  //height: 50px;
`;

const ImgStyles = styled.img`
  width: 60%;
  //height: 60%;
`;
