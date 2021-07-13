/**
 * Componete Header de formulario
 * @param {string} content Contenido de el titulo
 * @param {string} marginB_20 Estilo de MarginBotton 20px
 * */
import React           from 'react';
import styled, { css } from 'styled-components';

export const HeaderForm = ( { content, marginB_20 } ) => {
  return (
      <Header marginB_20={ marginB_20 }>
        { content }
      </Header>
  );
};

const Header = styled.h2`
  text-align: center;
  box-sizing: border-box;

  ${ props => props.marginB_20 && css`
    margin-bottom: 20px;
  ` }
`;
