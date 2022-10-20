import LinkButton from "@src/components/LinkButton";
import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="flex sm:items-center flex-col gap-4">
      <LinkButton to="/nasa">Acessar imagem do dia</LinkButton>
      <LinkButton to="/nasa/mars">Acessar imagens de Marte</LinkButton>
    </div>
  );
};

export default Home;
