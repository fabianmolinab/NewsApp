import { createGlobalStyle } from 'styled-components';
import { colores }           from './colores';

export const GlobalStyle = createGlobalStyle`

  &* {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  html {
    font-family: 'Quicksand', sans-serif;
    font-size: 16px;
  }

  body {
    background-color: ${ colores.blanco };
    color: ${ colores.textoNegro };
  }
`;