import React from 'react';
import styled from 'styled-components';
import { colores } from '../../const/colores';
import { fonts } from '../../const/fonts';

export const Title = ( {content} ) => {
  return (

      <TitleStyles>{ content }</TitleStyles>

  );
};

const TitleStyles = styled.h3`
  font-size: 20px;
  font-family: ${ fonts.regular };
  font-weight: 600;
  color: ${ colores.textoNegro };
  letter-spacing: normal;
  word-spacing: normal;
  line-height: 21px;
  cursor: pointer;

  &:hover {
    color: ${ colores.verde };
  }

  &:active {
    color: ${ colores.verdeOscuro };

  }
`;
