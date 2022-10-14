import React from "react";
import { Link } from "react-router-dom";

import { useNasaImageOfTheDay } from "@src/hooks/NasaImageOfTheDay";

const ImageOfTheDay: React.FC = () => {
  const { GetImageOfTheDay } = useNasaImageOfTheDay();

  const { data } = GetImageOfTheDay();

  return (
    <section className="flex flex-col gap-4">
      <Link
        className="self-start text-blue-500 hover:ring-blue-500 hover:ring-1"
        to="/"
      >
        Voltar
      </Link>
      <h1 className="text-1xl sm:text-2xl font-bold">{data?.title}</h1>
      <dfn className="text-gray-400">{data?.explanation}</dfn>
      <img className="mx-auto sm:max-w-md" alt={data?.title} src={data?.url} />
    </section>
  );
};

export default ImageOfTheDay;
