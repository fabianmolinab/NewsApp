import React from 'react';
import {
  Alerta,
  ContenedorInput,
  Input, Label,
}            from '../../styles/LoginStyles';

export const InputFormulario = ( {
  estado,
  cambiarEstado,
  name,
  type,
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
        <Label color={ estado.valido }>{ name }</Label>
        <Input type={ type }
               placeholder={ placeholder }
               autoComplete="off"
               value={ estado.campo }
               onChange={ onChange }
               onBlur={ validacion }
               valido={ estado.valido }
        />

        <Alerta valido={ estado.valido }> { error }</Alerta>
      </ContenedorInput>

  );
};
