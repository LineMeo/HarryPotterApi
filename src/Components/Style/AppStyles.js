import styled, { createGlobalStyle } from "styled-components";
import Fundo from "../imagens/fundo.jpg";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        list-style:none;
        background-image: url(${Fundo});
    };
`;
