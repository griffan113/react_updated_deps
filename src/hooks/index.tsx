import React from "react";

import { CompaniesProvider } from "./Companies";
import { NasaImageOfTheDayProvider } from "./NasaImageOfTheDay";
import { NasaMarsImagesProvider } from "./NasaMarsImages";

type AppProviderProps = { children: React.ReactNode };

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  return (
    <NasaImageOfTheDayProvider>
      <NasaMarsImagesProvider>
        <CompaniesProvider>{children}</CompaniesProvider>
      </NasaMarsImagesProvider>
    </NasaImageOfTheDayProvider>
  );
};

export default AppProvider;
