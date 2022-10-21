import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

//#003049,#d62828,#f77f00,#fcbf49,#eae2b7

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        list-style:none;
        background-color:#003049;
    }
`;

//Header.js
export const Div = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const H1 = styled.h1`
  color: #d62828;
`;

export const Nav = styled.nav`
  width: 70%;
  height: 40px;
  display: flex;
`;

export const Ul = styled.ul`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const A = styled(Link)`
  text-decoration: none;
  color: #f77f00;
  font-size: 18px;
  &:hover {
    color: #eae2b7;
  }
`;

export const Di = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  height: 300px;
  border: solid;
  background-color: #fcbf49;
`;

export const Foto = styled.img`
  border: solid;
  width: 200px;
  height: 150px;
  background-color: #fcbf49;
`;

export const Button = styled.button`
  color: #f77f00;
  background-color: #d62828;
  font-size: 20px;
  border-radius: 10px;
  width: 150px;
  cursor: pointer;
  &:hover {
    color: #eae2b7;
  }
`;
