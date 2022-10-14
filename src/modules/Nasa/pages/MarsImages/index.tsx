import React from "react";
import { Link } from "react-router-dom";

import { useNasaMarsImages } from "@src/hooks/NasaMarsImages";

const MarsImages: React.FC = () => {
  const { GetMarsImages } = useNasaMarsImages();

  const { data } = GetMarsImages();

  console.log(data);

  return (
    <section className="flex flex-col gap-4">
      <Link
        className="self-start text-blue-500 hover:ring-blue-500 hover:ring-1"
        to="/"
      >
        Voltar
      </Link>
      <h1 className="text-1xl sm:text-2xl font-bold">Mars Images</h1>
      {data?.map((item) => (
        <div className="flex h-5 w-full">
          <img src={item.img_src} alt="image from camera" />
        </div>
      ))}
    </section>
  );
};

export default MarsImages;
