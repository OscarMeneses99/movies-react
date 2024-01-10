import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import MovieInfo from "../pages/MovieInfo.jsx";
import NotFound from "../pages/NotFound.jsx";
import CreateMovie from "../pages/CreateMovie.jsx";
import UpdateMovie from "../pages/UpdateMovie.jsx";
import LandingPage from "../pages/LandingPage.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <NotFound />,
  },
  {
    path: "/home",
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
    path: "/*",
    element: <NotFound />,
    errorElement: <NotFound />,
  },
]);
