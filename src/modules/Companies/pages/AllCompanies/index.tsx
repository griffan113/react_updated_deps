import React from "react";
import { Link } from "react-router-dom";

import { useCompanies } from "@src/hooks/Companies";
import LinkButton from "@src/components/LinkButton";

const AllCompanies: React.FC = () => {
  const { GetCompanies } = useCompanies();

  const { data } = GetCompanies();

  return (
    <section className="flex flex-col gap-4">
      <Link
        className="self-start text-blue-500 hover:ring-blue-500 hover:ring-1"
        to="/"
      >
        Voltar
      </Link>
      <div className="flex justify-between">
        <h1 className="text-1xl sm:text-2xl font-bold">Empresas</h1>
        <LinkButton to="new">Criar</LinkButton>
      </div>
      {data?.map((item) => (
        <Link
          key={item.id}
          to={`${item.id}`}
          className="py-1 group flex gap-4 ring-0 cursor-pointer hover:bg-gray-800"
        >
          <div className="flex flex-col">
            <p className="text-sm text-gray-400">Nome: {item.name}</p>
            <p className="text-sm text-gray-400">Sufixo: {item.suffix}</p>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default AllCompanies;
