import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Personagens from "../Components/Personagens.js";
import Home from "../Components/Home.js";
import Grif from "../Components/Grifinoria";
import Corv from "../Components/Corvinal";
import Lufa from "../Components/LufaLufa";
import Sons from "../Components/Sonserina";

import Header from "./Header";
import Footer from "./Footer";

export default function Router() {
  return (
    <BrowserRouter>
      <Header
        rota="Home"
        rota2="Personagens"
        rota3="Grifinoria"
        rota4="Corvinal"
        rota5="Lufa-Lufa"
        rota6="Sonserina"
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personagens" element={<Personagens />} />
        <Route path="/grifinoria" element={<Grif />} />
        <Route path="/corvinal" element={<Corv />} />
        <Route path="/lufalufa" element={<Lufa />} />
        <Route path="/sonserina" element={<Sons />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
