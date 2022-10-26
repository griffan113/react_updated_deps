import React, { createContext, useContext } from "react";
import {
  useQuery,
  UseQueryResult,
  UseQueryOptions,
} from "@tanstack/react-query";

import { nasaApi } from "@src/lib/axios";
import { IMarsImage } from "@src/interfaces/IMarsImage";

interface UseMarsImagesParams {
  options?: UseQueryOptions<IMarsImage[]>;
}

interface UseMarsImageParams {
  options?: UseQueryOptions<IMarsImage>;
  camera_name: string;
}

interface NasaMarsImagesContextData {
  GetMarsImages(options?: UseMarsImagesParams): UseQueryResult<IMarsImage[]>;
  GetMarsImage(options?: UseMarsImageParams): UseQueryResult<IMarsImage[]>;
}

const NasaMarsImagesContext = createContext<NasaMarsImagesContextData>(
  {} as NasaMarsImagesContextData
);

type NasaMarsImagesProviderProps = {
  children: React.ReactNode;
};

const fetchMarsImages = async (): Promise<IMarsImage[]> => {
  const { data } = await nasaApi.get<{ photos: IMarsImage[] }>(
    `mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${
      import.meta.env.VITE_NASA_API_KEY
    }`
  );

  return data.photos.slice(0, 24);
};

const fetchMarsImageByCamera = async (
  camera_name: string
): Promise<IMarsImage[]> => {
  const { data } = await nasaApi.get<{ photos: IMarsImage[] }>(
    `mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${camera_name}&api_key=${
      import.meta.env.VITE_NASA_API_KEY
    }`
  );

  return data.photos.slice(0, 24);
};

const NasaMarsImagesProvider: React.FC<NasaMarsImagesProviderProps> = ({
  children,
}) => {
  const GetMarsImages = (
    { options } = {} as any
  ): UseQueryResult<IMarsImage[]> => {
    return useQuery(["mars_images"], fetchMarsImages, {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      ...options,
    });
  };

  const GetMarsImage = (
    { options, camera_name } = {} as any
  ): UseQueryResult<IMarsImage[]> => {
    return useQuery(
      ["mars_images", "image", camera_name],
      () => fetchMarsImageByCamera(camera_name),
      {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        ...options,
      }
    );
  };

  return (
    <NasaMarsImagesContext.Provider value={{ GetMarsImages, GetMarsImage }}>
      {children}
    </NasaMarsImagesContext.Provider>
  );
};

function useNasaMarsImages(): NasaMarsImagesContextData {
  const context = useContext(NasaMarsImagesContext);

  return context;
}

export {
  NasaMarsImagesProvider,
  useNasaMarsImages,
  fetchMarsImages,
  fetchMarsImageByCamera,
};
