import styled, { css } from 'styled-components';

const ContendorGlobal = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 1000px;
  margin: 0 auto;
  height: 100%;
`;

const ImgLogin = styled.img`
  height: 600px;
  width: 49.5%;
  order: 0;
`;

const Header = styled.header`
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
`;

const ContenedorFlex = styled.div`
  display: flex;
  //align-items: center;

`;

const ContenedorInput = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;

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
  width: 400px;
  max-width: 450px;
  margin-top: 10px;
  padding: 10px;
  font-size: 16px;
  border: 1.5px solid #0ed46c;
  border-radius: 8px;

`;

export {
  ContendorGlobal,
  ImgLogin,
  Header,
  ContendorFormulario,
  ContenedorFlex,
  ContenedorInput,
  Input,
  Alerta,
};