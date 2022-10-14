import React, { createContext, useContext } from "react";
import {
  useQuery,
  UseQueryResult,
  UseQueryOptions,
} from "@tanstack/react-query";

import { api } from "@src/lib/axios";
import { IImageOfTheDay } from "@src/interfaces/IImageOfTheDay";

interface UseImageOfTheDayParams {
  options?: UseQueryOptions<IImageOfTheDay>;
}

interface NasaImageOfTheDayContextData {
  GetImageOfTheDay(
    options?: UseImageOfTheDayParams
  ): UseQueryResult<IImageOfTheDay>;
}

const NasaImageOfTheDayContext = createContext<NasaImageOfTheDayContextData>(
  {} as NasaImageOfTheDayContextData
);

type NasaImageOfTheDayProviderProps = {
  children: React.ReactNode;
};

const fetchImageOfTheDay = async (): Promise<IImageOfTheDay> => {
  const { data } = await api.get<IImageOfTheDay>(
    `planetary/apod?api_key=${import.meta.env.VITE_NASA_API_KEY}`
  );

  return data;
};

const NasaImageOfTheDayProvider: React.FC<NasaImageOfTheDayProviderProps> = ({
  children,
}) => {
  const GetImageOfTheDay = (
    { options } = {} as any
  ): UseQueryResult<IImageOfTheDay> => {
    return useQuery(["image_of_the_day"], fetchImageOfTheDay, {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      ...options,
    });
  };

  return (
    <NasaImageOfTheDayContext.Provider value={{ GetImageOfTheDay }}>
      {children}
    </NasaImageOfTheDayContext.Provider>
  );
};

function useNasaImageOfTheDay(): NasaImageOfTheDayContextData {
  const context = useContext(NasaImageOfTheDayContext);

  return context;
}

export { NasaImageOfTheDayProvider, useNasaImageOfTheDay, fetchImageOfTheDay };
