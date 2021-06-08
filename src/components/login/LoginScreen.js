import React              from 'react';
import { useHistory }     from 'react-router-dom';
import styled             from 'styled-components';
import { ButtonGradient } from '../ui/ButtonGradient';

import { BoxLogin }    from '../styles/login/BoxLogin';
import { GlobalStyle } from '../styles/GlobalStyle';

const BoxGlobal = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 1000px;
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
  margin: 40px;
  box-sizing: border-box;
`;

const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  max-height: 300px;
  height: 100%;
`;

const ContenedorInput = styled.div`
  height: 100px;
  font-size: 18px;
  font-weight: 600;
  align-items: center;

  label {
  }

  input {
    display: block;
    width: 70%;
    margin-top: 10px;
    padding: 10px;
    font-size: 16px;
  }
`;

export const LoginScreen = () => {

  const history = useHistory();
  console.log( history );

  const handleLogin = ( e ) => {
    e.preventDefault();
    history.push( '/' );
  };

  //Acción del boton para llevar a la pagina de Registrate
  const handleSignUp = () => {
    history.push( '/loginup' );

  };

  return (
      <>
        <GlobalStyle/>


        <BoxGlobal>
          <ImgLogin alt="Imagen Login"
                    src="./assets/imgs/imagen-login.svg"/>
          <BoxLogin>

            <Header>
              <h2>Iniciar Sección en Segment</h2>
            </Header>

            <FormLogin onSubmit={ handleLogin }>

              <ContenedorInput>
                <label>Correo Electronico</label>
                <input type="email"
                       placeholder="correo@dominio.com"
                       autoComplete="off"
                />
              </ContenedorInput>

              <ContenedorInput>
                <label>Contraseña</label>
                <input type="password"
                       placeholder="Ingrese la contraseña"
                />
              </ContenedorInput>


              <ButtonGradient type="submit"
                              nombre="Iniciar Sección"/>

              <button onClick={ handleSignUp }
              >
                Registrate
              </button>


            </FormLogin>

          </BoxLogin>


        </BoxGlobal>
      </>
  );
};
