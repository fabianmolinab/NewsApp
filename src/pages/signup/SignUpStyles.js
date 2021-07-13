import styled, { css } from 'styled-components';
import { colores }     from '../../styles/colores';

const FormGrid = styled.form`
  height: 600px;
  width: 60%;
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;

//Contenedor Grid que ocupa (2fr-column)
const ContenedorGridC2 = styled.div`
  grid-column: span 2;

  ${ props => props.input && css`
    input {
      width: 100%;
    }
  ` }

  ${ props => props.flex && css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  ` }
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
  FormGrid,
  ContenedorGridC2,
  RegistroEnviado,
};