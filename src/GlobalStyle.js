import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    /* 
        - Font Size System (px)
        10 / 12 / 14 / 16 / 18 / 20 / 24 / 30 / 36 / 44 / 52 / 62 / 74 / 86 / 98

        - Spacing System (px)
        2 / 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 80 / 96 / 128
    */
    
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        line-height: 1;
        background-color: #eeeeee;
    }
`;
