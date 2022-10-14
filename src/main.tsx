import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";

import "@src/index.css";
import Router from "@src/routes/Router";
import { queryClient } from "@src/lib/queryClient";
import AppProvider from "./hooks";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <Router />
      </AppProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
