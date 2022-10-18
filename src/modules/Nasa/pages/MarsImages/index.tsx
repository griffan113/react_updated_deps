import React from "react";
import { Link } from "react-router-dom";

import { useNasaMarsImages } from "@src/hooks/NasaMarsImages";

const MarsImages: React.FC = () => {
  const { GetMarsImages } = useNasaMarsImages();

  const { data } = GetMarsImages();

  return (
    <section className="flex flex-col gap-4">
      <Link
        className="self-start text-blue-500 hover:ring-blue-500 hover:ring-1"
        to="/"
      >
        Voltar
      </Link>
      <h1 className="text-1xl sm:text-2xl font-bold">Imagens de Marte</h1>
      {data?.map((item) => (
        <Link
          key={item.id}
          to={item.camera.name}
          className="group flex gap-4 cursor-pointer"
        >
          <img
            className="w-28 sm:max-w-xs"
            src={item.img_src}
            alt="image from camera"
          />
          <div className="flex flex-col">
            <p className="font-bold group-hover:text-blue-500 group-hover:underline">
              Dados da câmera:
            </p>
            <p className="text-sm text-gray-400">{item.camera.name}</p>
            <p className="text-sm text-gray-400">{item.camera.full_name}</p>
          </div>
        </Link>
      ))}
    </section>
  );
};

export default MarsImages;
