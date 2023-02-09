import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        font-family: 'PuraDak';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        width:100%;
        height: 100%;
        margin:0;
        padding:0;
        background-color: #ffffff;
        font-size:16px;
        color:rgba(58,58,58);
    }

    a{
        text-decoration: none;
    }
`;
