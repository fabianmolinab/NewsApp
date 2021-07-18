import styled, { css } from 'styled-components';
import { device } from '../../const/device';
import { colores } from '../../styles/colores';

const FormGrid = styled.form`
    display: flex;
    flex-direction: column;
    //width: 100%;
    //margin: 10px;
    padding: 25px;
    grid-template-columns: 1fr;
    grid-template-rows: 100px;
    font-size: 16px;

  @media ${device.tablet} {
    width: 60.5%;
    height: 100%;
    grid-template-columns: 1fr;
    column-gap: 20px;
  }

  @media ${device.desktop} {
    width: 60%;
    margin: 100px 10px 0 0;
    column-gap: 10px;
  }
`;

//Contenedor Grid que ocupa (2fr-column) 
//Propiedad Flex es display flex
const ContenedorGridC2 = styled.div`
  grid-column: span 1;

  @media ${device.tablet} {
    grid-column: span 2;
  }

  ${props => props.flex && css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  ` }

  ${props => props.paddB_15 && css`
    padding: 5px 0 15px 0;
  ` }

  ${props => props.paddT_15 && css`
    margin: 15px 0;
  `}

`;

/*Estilos para mostrar o no el mensaje enviado,
* Si es true su muestra el mensaje, si es false no se muestra
* Ambas son propiedad de tipo string del componente
*/

const RegistroEnviado = styled.p`
  font-size: 17px;
  font-weight: 600;

  ${props => props.mensaje === 'true' && css`
    display: block;
  ` }
  ${props => props.mensaje === 'false' && css`
    display: none;
  ` }
  ${props => props.fallido && css`
    color: ${colores.rojo};
  ` }
`;

export {
  FormGrid,
  ContenedorGridC2,
  RegistroEnviado,
};
