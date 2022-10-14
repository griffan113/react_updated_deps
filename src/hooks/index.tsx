import React from "react";
import { NasaImageOfTheDayProvider } from "./NasaImageOfTheDay";
import { NasaMarsImagesProvider } from "./NasaMarsImages";

type AppProviderProps = { children: React.ReactNode };

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <NasaImageOfTheDayProvider>
      <NasaMarsImagesProvider>{children}</NasaMarsImagesProvider>
    </NasaImageOfTheDayProvider>
  );
};

export default AppProvider;
