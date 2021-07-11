import React  from 'react';
import styled from 'styled-components';

export const Icono = () => {
  return (
      <ImgIcon src="./assets/imgs/segment-icon.svg"
               alt="Icono Segment"/>
  );
};

const ImgIcon = styled.img`
  width: 60%;
  margin-bottom: 10px;
`;

