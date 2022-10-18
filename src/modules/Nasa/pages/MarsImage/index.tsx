import { useNasaMarsImages } from "@src/hooks/NasaMarsImages";
import React from "react";
import { Link, useParams } from "react-router-dom";

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
        <div key={item.id} className="flex gap-4">
          <img
            className="w-28 sm:max-w-xs"
            src={item.img_src}
            alt="image from camera"
          />
          <div className="flex flex-col">
            <p className="font-bold">Dados da câmera:</p>
            <p className="text-sm text-gray-400">Nome: {item.camera.name}</p>
            <p className="text-sm text-gray-400">
              Nome completo: {item.camera.full_name}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold">Dados do rover:</p>
            <p className="text-sm text-gray-400">Nome: {item.rover.name}</p>
          </div>
          <p className="flex-1 text-sm text-gray-400">
            {item.rover.status === "active" ? "Ativo" : "Inativo"}
          </p>
        </div>
      ))}
    </section>
  );
};

export default MarsImage;
