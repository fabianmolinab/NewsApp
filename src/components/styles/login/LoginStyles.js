import styled from 'styled-components';

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

export {
  ContendorGlobal,
  ImgLogin,
  Header,
  ContendorFormulario,
  ContenedorFlex,
};