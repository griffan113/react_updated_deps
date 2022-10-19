import React from "react";
import { Link, useParams } from "react-router-dom";

import { useNasaMarsImages } from "@src/hooks/NasaMarsImages";

const MarsImage: React.FC = () => {
  const { camera_name } = useParams();
  const { GetMarsImage } = useNasaMarsImages();

  const { data } = GetMarsImage({ camera_name: camera_name! });

  return (
    <section className="flex flex-col gap-4">
      <Link
        className="self-start text-blue-500 hover:ring-blue-500 hover:ring-1"
        to=".."
      >
        Voltar
      </Link>
      <h1 className="text-1xl sm:text-2xl font-bold">
        Imagens da câmera {camera_name}
      </h1>
      {data?.map((item) => (
        <div
          key={item.id}
          className="flex flex-col sm:flex-row sm:justify-between gap-5 sm:border-0 sm:pb-0 pb-2 border-b-slate-200 border-b-2"
        >
          <img
            className="sm:w-1/2 sm:max-w-sm w-full shadow-md shadow-slate-700"
            src={item.img_src}
            alt="image from camera"
          />
          <div className="flex flex-col gap-1">
            <p className="font-bold">Dados da câmera:</p>
            <p className="text-sm text-gray-400">Nome: {item.camera.name}</p>
            <p className="text-sm text-gray-400">
              Nome completo: {item.camera.full_name}
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-bold">Dados do rover:</p>
            <p className="text-sm text-gray-400">Nome: {item.rover.name}</p>
            <p className="text-sm text-gray-400">
              Data de lançamento: {item.rover.launch_date}
            </p>
            <p className="text-sm text-gray-400">
              Data de aterrissagem: {item.rover.landing_date}
            </p>
            <p className="text-sm text-gray-400">
              Status: {item.rover.status === "active" ? "Ativo" : "Inativo"}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default MarsImage;
