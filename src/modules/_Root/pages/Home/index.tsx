import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="flex sm:items-center flex-col gap-4">
      <Link
        to="/nasa"
        className="outline-none bg-teal-500 hover:bg-teal-600 p-2 focus:ring-1 focus:ring-white text-center"
      >
        Acessar imagem do dia
      </Link>
      <Link
        to="/nasa/mars"
        className="outline-none bg-teal-500 hover:bg-teal-600 p-2 focus:ring-1 focus:ring-white text-center"
      >
        Acessar imagens de Marte
      </Link>
    </div>
  );
};

export default Home;
