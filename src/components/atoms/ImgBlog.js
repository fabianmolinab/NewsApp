/**
 * Imagen del Card del Blog en la pagina principal
 * */

import React from 'react';
import styled from 'styled-components';

export const ImgBlog = ( {src} ) => {
  return (
      <ImgStyles src={ src } alt="Descripción del blog"/>

  );
};

const ImgStyles = styled.img`
  border-radius: 6px;
  max-height: 40%;
`;
