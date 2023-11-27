import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import { MovieProvider } from "./context/Context.jsx";
import App from "./App.jsx";
import MovieInfo from "./pages/MovieInfo.jsx";
import NotFound from "./pages/NotFound.jsx";
import CreateMovie from "./pages/CreateMovie.jsx";
import UpdateMovie from "./pages/UpdateMovie.jsx";
import MyAccount from "./pages/MyAccount.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";

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
    path: "/add-movie",
    element: <CreateMovie />,
    errorElement: <NotFound />,
  },
  {
    path: "/update/:id",
    element: <UpdateMovie />,
    errorElement: <NotFound />,
  },
  {
    path: "/create-movie",
    element: <CreateMovie />,
    errorElement: <NotFound />,
  },
  {
    path: "/my-account",
    element: <MyAccount />,
    errorElement: <NotFound />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <NotFound />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <NotFound />,
  },
  {
    path: "/*",
    element: <NotFound />,
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
