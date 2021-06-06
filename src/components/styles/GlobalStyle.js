import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  &* {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  html {
    font-family: SF UI Text, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  body {
    background-color: #fff;
  }
`;