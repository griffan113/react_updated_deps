import React from "react";
import { Outlet, useNavigation } from "react-router-dom";

import Loader from "@src/components/Loader";

const RootLayout: React.FC = () => {
  const { state } = useNavigation();

  return (
    <div className="min-h-screen w-full sm:p-10 p-4">
      <header className="flex justify-center bg-gray-600 p-4 font-bold text-teal-300 border-dashed border-gray-300 border">
        <strong className="text-1xl sm:text-2xl">RootLayout</strong>
      </header>
      <main className="sm:py-4 p-4 sm:mt-7 mt-5 bg-gray-700 border-dashed border-gray-400 border">
        {state === "loading" ? <Loader /> : <Outlet />}
      </main>
    </div>
  );
};

export default RootLayout;
