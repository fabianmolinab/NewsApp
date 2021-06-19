import React                              from 'react';
import { Alerta, ContenedorInput, Input } from '../styles/login/LoginStyles';

export const InputFormulario = ( {
  estado,
  cambiarEstado,
  name,
  error,
  placeholder,
  expresionRegular,
} ) => {

  //Modifica el valor del formulario
  const onChange = ( { target } ) => {
    cambiarEstado( {
      ...estado,
      campo: target.value,
    } );
  };

  // Realiza la validación del formulario internamente
  const validacion = () => {
    if ( expresionRegular ) {
      if ( expresionRegular.test( estado.campo ) ) {
        cambiarEstado( {
          ...estado,
          valido: 'true',
        } );
      } else {
        cambiarEstado( {
          ...estado,
          valido: 'false',
        } );
      }
    }
  };

  return (
      <ContenedorInput>
        <label>{ name }</label>
        <Input type="text"
               placeholder={ placeholder }
               autoComplete="off"
               value={ estado.campo }
               onChange={ onChange }
               onBlur={ validacion }
        />
        <Alerta valido={ estado.valido }> { error }</Alerta>
      </ContenedorInput>

  );
};
