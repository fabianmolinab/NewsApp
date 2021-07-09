/**
 * Componente de input tipo checkbox
 * */
import React from 'react';

const InputCheckbox = ( { estado, cambiarEstado, name } ) => {

  const handleInputChange = ( { target } ) => {
    cambiarEstado( { ...estado, checked: target.checked } );
  };

  return (
      <input type="checkbox"
             checked={ estado.checked }
             onChange={ handleInputChange }
             name={name}
      />
  );
};

export default InputCheckbox;
