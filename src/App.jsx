import "./App.css";
import { ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";
import Movies from "./pages/Movies";

function App() {
  const { genre } = useParams();
  return (
    <>
      <ToastContainer />
      <Movies genre={genre} />
    </>
  );
}

export default App;
