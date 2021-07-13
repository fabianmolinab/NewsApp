import React           from 'react';
import styled, { css } from 'styled-components';

export const Logo = ( { grid } ) => {
  return (
      <ImgLogo src="./assets/imgs/segment-icon.svg"
               alt="Icono Segment" grid={ grid }/>
  );
};

const ImgLogo = styled.img`
  width: 60%;
  margin-bottom: 10px;

  ${ props => props.grid && css`
    
    width: 44px;
    
  ` }
`;

