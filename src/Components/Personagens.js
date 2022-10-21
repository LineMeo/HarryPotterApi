import React, { useState, useEffect } from "react";
import axios from "axios";
import * as S from "../Components/Style/PersoStyles";

const Personagens = () => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    axios
      .get("https://hp-api.herokuapp.com/api/characters")
      .then((res) => {
        setCard(res.data);
      })
      .catch((err) => {
        console.log("Foi mal meu patrão", err);
      });
  }, [card]);

  return (
    <S.Div>
      <S.H1>Personagens do Filme</S.H1>
      <S.Divi>
        {card.map((item) => (
          <S.Section>
            <S.Figure>
              <S.Img src={item.image} />
            </S.Figure>
            <S.Ul>
              <S.Li>Nome: {item.name}</S.Li>
              <S.Li>Aniversario: {item.dateOfBirth}</S.Li>
              <S.Li>Casa: {item.house}</S.Li>
            </S.Ul>
          </S.Section>
        ))}
      </S.Divi>
    </S.Div>
  );
};

export default Personagens;
