import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";
import Home from "./pages/Home.jsx";

function App() {
  const { genre } = useParams();
  return (
    <>
      <ToastContainer />
      <Home genre={genre} />
    </>
  );
}

export default App;
