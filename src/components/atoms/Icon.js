/**
 * Componente de Icono
 * @param {object} icon Icono a mostrar
 *
 * */

import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colores } from '../../const/colores';

export const Icon = ( {icon, desc, heart} ) => {

  return (
      <Container>
        <IconContainer>
          <IconStyles icon={ icon } heart={ heart }/>
        </IconContainer>
        <p>{ desc }</p>
      </Container>
  );
};

const Container = styled.div`
  display: flex;
  max-width: 60px;

  p {
    margin: 5px 3px;
    font-weight: 500;
    font-size: 15px;
  }

`;

const IconContainer = styled.button`
  background: none;
  border: none;
  cursor: pointer;
`;

const IconStyles = styled(FontAwesomeIcon)`
  font-size: 20px;
  color: ${ colores.textoNegro };

  ${ props => props.heart && css`

    &:hover {
      color: ${ colores.rojo };
    }
  ` }
`;