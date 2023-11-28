import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "../components/ProtectedRoute.jsx";
import App from "../App.jsx";
import MovieInfo from "../pages/MovieInfo.jsx";
import NotFound from "../pages/NotFound.jsx";
import CreateMovie from "../pages/CreateMovie.jsx";
import UpdateMovie from "../pages/UpdateMovie.jsx";
import MyAccount from "../pages/MyAccount.jsx";
import LandingPage from "../pages/LandingPage.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <NotFound />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <NotFound />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <NotFound />,
  },
  {
    path: "/home",
    element: <ProtectedRoute element={<App />} />,
    errorElement: <NotFound />,
  },

  {
    path: "/genre/:genre",
    element: <ProtectedRoute element={<App />} />,
    errorElement: <NotFound />,
  },
  {
    path: "/movies/:id",
    element: <ProtectedRoute element={<MovieInfo />} />,
    errorElement: <NotFound />,
  },
  {
    path: "/add-movie",
    element: <ProtectedRoute element={<CreateMovie />} />,
    errorElement: <NotFound />,
  },
  {
    path: "/update/:id",
    element: <ProtectedRoute element={<UpdateMovie />} />,
    errorElement: <NotFound />,
  },
  {
    path: "/my-account",
    element: <ProtectedRoute element={<MyAccount />} />,
    errorElement: <NotFound />,
  },
  {
    path: "/*",
    element: <NotFound />,
    errorElement: <NotFound />,
  },
]);
