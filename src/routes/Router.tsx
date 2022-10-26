import React from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import RootLayout from "@src/modules/_Root/Root.layout";
import Home from "@src/modules/_Root/pages/Home";
import NasaRoutes from "@src/modules/Nasa/Nasa.routes";
import CompaniesRoutes from "@src/modules/Companies/Companies.routes";
import Error from "@src/components/Error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<Error />}>
      <Route index element={<Home />} />
      {NasaRoutes}
      {CompaniesRoutes}
    </Route>
  )
);

const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;
