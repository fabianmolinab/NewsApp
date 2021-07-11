/**
 * Componente de input tipo checkbox
 * */
import React from 'react';

export const InputCheckbox = ( { estado, cambiarEstado, id } ) => {

  const handleInputChange = ( { target } ) => {
    cambiarEstado( { ...estado, checked: target.checked } );
  };

  return (
      <input type="checkbox"
             checked={ estado.checked }
             onChange={ handleInputChange }
             id={ id }
      />
  );
};


