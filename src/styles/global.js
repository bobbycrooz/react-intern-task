import { createGlobalStyle } from 'styled-components'

export const GlobalStyles  = createGlobalStyle`
*,
*::before,
*::after {
    box-sizing: border-box;
      padding: 0;
    margin: 0;
}

body {
    background:#fff;
    color: #000;
    /* height: 100%;
    width:100%; */
  
  
    font-family: 'Roboto', sans-serif;
    transition: all 0.25s linear;
    display: flex;
    justify-content:center;
    align-items: center;
}

`