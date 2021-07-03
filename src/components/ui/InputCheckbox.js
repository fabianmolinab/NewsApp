import React from 'react';

const InputCheckbox = ( { estado, cambiarEstado } ) => {

  const handleInputChange = ( { target } ) => {
    cambiarEstado( { ...estado, checked: target.checked } );
  };

  return (
      <input type="checkbox" checked={ estado.checked }
             onChange={ handleInputChange }/>
  );
};

export default InputCheckbox;
