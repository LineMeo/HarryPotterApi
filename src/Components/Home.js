import React, { Component } from "react";
import * as S from "../Components/Style/HomeStyles.js";

export default class Home extends Component {
  render() {
    return (
      <S.Divi>
        <S.H1>** Bem Vindos A Hogwarts **</S.H1>
        <S.H2>
          Escolha sua casa preferida e veja os alunos que a frequentam
        </S.H2>
        <S.H3>Ou</S.H3>
        <S.H2>Escolha a pagina Personagens para ver todos eles.</S.H2>
      </S.Divi>
    );
  }
}
