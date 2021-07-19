import styled, { css } from 'styled-components';
import { device } from '../../const/device.js';

const ContendorGlobal = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  height: 100%;

  @media ${device.tablet} {
    flex-direction: row;
    max-width: 800px;
  };

  //Estilos para el signup || La pagina de registrate || Hay que colocar esa propiedad para que se active

  ${props => props.signup && css`

    @media ${device.tablet} {
      max-width: 800px;
      align-items: flex-start;
  };

  @media ${device.laptop} {
    max-width: 1000px;
  };
  ` }
`;

const HeaderLogin = styled.header`
  text-align: center;
  margin-bottom: 20px;
  box-sizing: border-box;
`;

const ContendorFormulario = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 600px;
  width: 40.5%;

  @media ${device.mobileS} {
    width: 80%;
  };
`;

const ContenedorFlex = styled.div`
  display: flex;
  margin-top: 15px;
`;

export {
  ContendorGlobal,
  HeaderLogin,
  ContendorFormulario,
  ContenedorFlex,
};
