import React from "react";
import { Outlet, useNavigation } from "react-router-dom";

import Loader from "@src/components/Loader";

const RootLayout: React.FC = () => {
  const { state } = useNavigation();

  return (
    <div className="min-h-screen w-full sm:p-10 p-4 flex flex-col gap-4">
      <header className="max-h-[15vh] flex justify-center bg-gray-600 p-4 border-dashed border-gray-300 border">
        <strong className="text-1xl sm:text-2xl font-bold text-teal-300">
          RootLayout
        </strong>
      </header>

      <div className="max-h-[85vh] flex-1 flex flex-col sm:flex-row sm:gap-4 gap-0">
        <aside className="flex flex-col gap-2 justify-center bg-gray-600 p-4 border-dashed border-gray-300 border">
          <strong className="text-1xl sm:text-2xl font-bold text-teal-300">
            Nav
          </strong>
        </aside>
        <main className="flex-1 sm:py-4 p-4 bg-gray-700 border-dashed border-gray-400 border overflow-auto">
          {state === "loading" ? <Loader /> : <Outlet />}
        </main>
      </div>
    </div>
  );
};

export default RootLayout;
