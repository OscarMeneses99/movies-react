import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MovieContext } from "../context/Context.jsx";

const ProtectedRoute = ({ element }) => {
  const { hasCookie } = useContext(MovieContext);
  const navigate = useNavigate();

  if (!hasCookie) {
    navigate("/login", { replace: true });
    return null;
  }

  return element;
};

export default ProtectedRoute;
