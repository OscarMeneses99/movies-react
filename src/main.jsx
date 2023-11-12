import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import { MovieProvider } from "./context/Context.jsx";
import App from "./App.jsx";
import MovieInfo from "./pages/MovieInfo.jsx";
import NotFound from "./pages/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/genre/:genre",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/movies/:id",
    element: <MovieInfo />,
    errorElement: <NotFound />,
  },
  {
    path: "/NotFound",
    errorElement: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MovieProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </MovieProvider>
  </React.StrictMode>
);
