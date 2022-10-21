import styled from "styled-components";
import FotoN from "../imagens/fotoN.png";

export const Div = styled.div`
  position: relative;
  top: 30px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  border: solid;
  background: silver;
`;

export const H1 = styled.h1`
  background: silver;
`;
export const Divi = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background: silver;
`;

export const Section = styled.section`
  width: 250px;
  height: 260px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  background: silver;
`;

export const Figure = styled.figure`
  border: solid #27a300;
  display: flex;
`;

export const Img = styled.img`
  width: 200px;
  height: 200px;
  background-image: url(${FotoN});
`;
export const Imge = styled.img`
  width: 200px;
  height: 200px;
  background: black;
`;

export const Ul = styled.ul`
  border: solid #27a300;
  position: relative;
  bottom: 25px;
`;
export const Li = styled.li`
  color: silver;
  font-size: 18px;
  background: black;
`;
