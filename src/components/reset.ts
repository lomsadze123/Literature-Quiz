import { createGlobalStyle } from "styled-components";
import windows from "../assets/windows.png";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    min-height: 100vh;
    background: #f8f8f8 url(${windows}) no-repeat center top;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 1100px) {
      background: #f8f8f8 url(${windows}) no-repeat;
    }
  }

`;

export default GlobalStyle;
