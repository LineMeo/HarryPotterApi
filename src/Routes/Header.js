import React from "react";
import { Link } from "react-router-dom";
import * as S from "../Components/Style/HeaderStyles";
import Logo from "../Components/imagens/logoHP.png";
import LogoHouses from "../Components/imagens/logoHouses.jpeg";

const Header = ({ rota, rota2, rota3, rota4, rota5, rota6 }) => {
  return (
    <S.Div>
      <S.Figure>
        <S.Image src={Logo} alt="Logo" />
        <S.Imag src={LogoHouses} alt="Logo Houses" />
      </S.Figure>
      <S.Nav>
        <S.Ul>
          <S.Li>
            <S.A to="/">{rota}</S.A>
          </S.Li>
          <S.Li>
            <S.A to="/personagens">{rota2}</S.A>
          </S.Li>
          <S.Li>
            <S.A1 to="/grifinoria">{rota3}</S.A1>
          </S.Li>
          <S.Li>
            <S.A2 to="/corvinal">{rota4}</S.A2>
          </S.Li>
          <S.Li>
            <S.A3 to="/lufalufa">{rota5}</S.A3>
          </S.Li>
          <S.Li>
            <S.A4 to="/sonserina">{rota6}</S.A4>
          </S.Li>
        </S.Ul>
      </S.Nav>
    </S.Div>
  );
};

export default Header;
