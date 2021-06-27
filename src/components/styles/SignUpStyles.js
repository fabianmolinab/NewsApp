import styled from 'styled-components';

const ContenedorSignup = styled.form`
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;

const ContenedorName = styled.div`
  grid-column: span 2;

  input {
    width: 100%;
  }
`;

export {
  ContenedorSignup,
  ContenedorName,
};