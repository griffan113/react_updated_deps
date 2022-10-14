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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      {NasaRoutes}
    </Route>
  )
);

const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default Router;
