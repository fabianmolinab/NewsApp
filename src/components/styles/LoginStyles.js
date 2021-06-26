import styled, { css } from 'styled-components';
import { device }      from '../ui/device.js';

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

  //Estilos para el signup || La pagina de registrate

  ${ props => props.signup && css`
    display: block;

    @media ${ device.tablet } {
      max-width: 900px;
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

const ContenedorInput = styled.div`
  width: 100%;
  height: 100px;
  //display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;

`;

const Label = styled.label`
  color: black;
  margin: 10px 0 5px 0;

  ${ props => props.color === 'true' && css`
    color: #0ed46c !important;
  ` }

  ${ props => props.color === 'false' && css`
    color: red !important;
  ` }
`;

const Alerta = styled.p`
  display: none;
  height: 50px;
  width: 90%;
  color: red;
  font-size: 17px;
  font-weight: 600;
  margin: 10px 0 5px 0;
  padding: 0 5px 0 10px;
  border-radius: 8px;

  ${ props => props.valido === 'true' && css`
    display: none;
  ` }
  ${ props => props.valido === 'false' && css`
    display: block;
  ` }
`;

const Input = styled.input`
  display: block;
  width: 90%;
  max-width: 95%;
  margin-top: 10px;
  padding: 10px;
  font-size: 16px;
  border: 1.5px solid #000;
  border-radius: 8px;

  ${ props => props.valido === 'true' && css`
    border: 1.5px solid #0ed46c;
  !important;
  ` }
  ${ props => props.valido === 'false' && css`
    border: 1.5px solid red !important;
  ` }
`;

export {
  ContendorGlobal,
  ImgLogin,
  ImgIcon,
  HeaderLogin,
  ContendorFormulario,
  ContenedorFlex,
  ContenedorInput,
  Label,
  Input,
  Alerta,
};