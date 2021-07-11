import styled, { css } from 'styled-components';
import { colores }     from '../../styles/colores';

const ContenedorSignup = styled.form`
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;

//Contenedor de el nombre en el formulario de Signup
const ContenedorName = styled.div`
  grid-column: span 2;

  input {
    width: 100%;
  }
`;

/*Estilos para mostrar o no el mensaje enviado,
* Si es true su muestra el mensaje, si es false no se muestra
* Ambas son propiedad de tipo string del componente
*/

const RegistroEnviado = styled.p`
  font-size: 17px;
  font-weight: 600;

  ${ props => props.mensaje === 'true' && css`
    display: block;
  ` }
  ${ props => props.mensaje === 'false' && css`
    display: none;
  ` }
  ${ props => props.fallido && css`
    color: ${ colores.rojo };
  ` }

`;

export {
  ContenedorSignup,
  ContenedorName,
  RegistroEnviado,
};