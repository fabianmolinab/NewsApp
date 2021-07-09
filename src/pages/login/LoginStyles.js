import styled, { css } from 'styled-components';
import { device }      from '../../const/device.js';

const ContendorGlobal = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  height: 100%;

  @media ${ device.tablet } {
    flex-direction: row;
    max-width: 1000px;
  };

  //Estilos para el signup || La pagina de registrate || Hay que colocar esa propiedad para que se active

  ${ props => props.signup && css`
    display: block;

    @media ${ device.tablet } {
      max-width: 700px;
    };
  ` }
`;

const ImgIcon = styled.img`
  width: 60%;
  margin-bottom: 10px;
`;

const ImgLogin = styled.img`
  height: 600px;
  width: 49.5%;
  order: 0;

  //La imagen no aparece en mobile
  @media ${ device.mobileS } {
    display: none;
  };

  @media ${ device.tablet } {
    display: block;
  };

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
  width: 49.5%;

  @media ${ device.mobileS } {
    width: 80%;
  };
`;

const ContenedorFlex = styled.div`
  display: flex;
  margin-top: 15px;
  //align-items: center;
`;

export {
  ContendorGlobal,
  ImgLogin,
  ImgIcon,
  HeaderLogin,
  ContendorFormulario,
  ContenedorFlex,
};