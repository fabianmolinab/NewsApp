import styled from 'styled-components';

const ContendorGlobal = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 1000px;
  margin: 0 auto;
  height: 100%;
`;

const ContendorLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 49.5%;
  max-width: 464px;
  height: 600px;
  background-color: white;
  margin: 100px auto;
  box-sizing: border-box;
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
  max-height: 300px;
  height: 100%;
  width: 100%;
`;

const ContenedorInput = styled.div`
  height: 100px;
  font-size: 18px;
  font-weight: 600;
  align-items: center;

  input {
    display: block;
    width: 400px;
    max-width: 450px;
    margin-top: 10px;
    padding: 10px;
    font-size: 16px;
    border: 1.5px solid #0ed46c;
    border-radius: 8px;
  }
`;

const ContenedorFlex = styled.div`
  display: flex;
`;

export {
  ContendorGlobal,
  ContendorLogin,
  ImgLogin,
  Header,
  ContendorFormulario,
  ContenedorInput,
  ContenedorFlex,
};