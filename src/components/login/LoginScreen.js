import React              from 'react';
import { ButtonGradient } from '../ui/ButtonGradient';

export const LoginScreen = () => {
  const NombreBotton = 'Iniciar Sección';
  return (
      <div>
        <div>

        </div>
        <h2>Iniciar Sección</h2>
        <form>
          <div>
            <input type="text"/>
            <label>Correo Electronico</label>
          </div>
          <div>
            <input type="text"/>
            <label>Contraseña</label>
          </div>
          <ButtonGradient nombre={ NombreBotton }/>
        </form>
      </div>
  );
};
