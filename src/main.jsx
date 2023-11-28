import { RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import { MovieProvider } from "./context/Context.jsx";
import { router } from "./routes/Router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MovieProvider>
      <RouterProvider router={router} />
    </MovieProvider>
  </React.StrictMode>
);
