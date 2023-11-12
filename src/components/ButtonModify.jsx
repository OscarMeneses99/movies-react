import EditIcon from "../assets/EditIcon.jsx";
import {
  ToastMovieNotFound,
  ToastMovieUpdated,
} from "../utils/Notifications.jsx";

function ButtonModify({ id, data }) {
  const handleModify = async () => {
    const response = await fetch(
      `https://movies-backend.3.us-1.fl0.io/api/movies/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    if (response.ok) {
      //redireccionar a la pagina de inicio
      ToastMovieUpdated();
    } else {
      ToastMovieNotFound();
    }
  };

  return (
    <button
      onClick={handleModify}
      className="flex place-content-center items-center w-1/2 h-[40px] border rounded-lg bg-cyan-500 transition-all hover:bg-cyan-600 hover:scale-105 text-white"
    >
      <span>Modify</span>
      <span className="ml-2">
        <EditIcon />
      </span>
    </button>
  );
}

export default ButtonModify;
