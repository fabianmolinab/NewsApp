import React  from 'react';
import styled from 'styled-components';

const InputFormulario = ( { name, type, error, placeholder } ) => {
  return (
      <ContenedorInput>
        <label>{ name }</label>
        <input type={ type }
               placeholder={ placeholder }
               autoComplete="off"
        />
        <p> { error }</p>
      </ContenedorInput>

  );
};

const ContenedorInput = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  //margin-top: 20px;

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

  p {
    display: none;
    height: 50px;
    width: 90%;
    color: red;
    font-size: 17px;
    font-weight: 600;
    margin: 10px 0 5px 0;
    padding: 0 5px 0 10px;
    border-radius: 8px;
  }
`;

export default InputFormulario;
