import styled from "styled-components";
import { Link } from "react-router-dom";

export const Div = styled.div`
  width: 100%;
  height: 150px;
  position: relative;
  top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  border: 4px dashed #5e503f;
  background: black;
`;

export const Figure = styled.figure`
  width: 100%;
  height: 150px;
  position: relative;
  top: 5px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  background: black;
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  background: black;
`;

export const Imag = styled.img`
  width: 500px;
  height: 100px;
`;

export const Nav = styled.nav`
  width: 100%;
  height: 40px;
  display: flex;
`;

export const Ul = styled.ul`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: black;
`;

export const Li = styled.li`
  background: black;
`;

export const A = styled(Link)`
  text-decoration: none;
  background: black;
  color: silver;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    color: #99582a;
    border-bottom: solid;
  }
`;

export const A1 = styled(Link)`
  text-decoration: none;
  background: black;
  color: silver;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    color: #ff0000;
    border-bottom: solid;
  }
`;

export const A2 = styled(Link)`
  text-decoration: none;
  background: black;
  color: silver;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    color: #072ac8;
    border-bottom: solid;
  }
`;

export const A3 = styled(Link)`
  text-decoration: none;
  background: black;
  color: silver;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    color: #ffd500;
    border-bottom: solid;
  }
`;

export const A4 = styled(Link)`
  text-decoration: none;
  background: black;
  color: silver;
  font-size: 18px;
  cursor: pointer;
  &:hover {
    color: #27a300;
    border-bottom: solid;
  }
`;
