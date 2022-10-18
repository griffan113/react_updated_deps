import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error: React.FC = () => {
  const error = useRouteError() as any;

  return (
    <section className="flex flex-col gap-3">
      <Link
        className="self-start text-blue-500 hover:ring-blue-500 hover:ring-1"
        to=".."
        relative="path"
      >
        Voltar
      </Link>
      <h1 className="text-1xl sm:text-2xl font-bold">Ocorreu um erro!</h1>
      {error.response.status && (
        <p className="text-2xl text-gray-400">{error.response.status}</p>
      )}
      <p className="text-gray-400">{error.message}</p>
    </section>
  );
};

export default Error;
