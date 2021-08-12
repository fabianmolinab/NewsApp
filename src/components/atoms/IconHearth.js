import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colores } from '../../const/colores';

export const IconHearth = () => {

  return (
      <IconStyles/>

  );
};

const IconStyles = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: ${ colores.textoNegro };


  ${ props => props.heart && css`

    &:hover {
      color: ${ colores.rojo };
    }
  ` }
`;