import TrashIcon from "../assets/TrashIcon.jsx";
import {
  ToastMovieDeleted,
  ToastMovieNotFound,
} from "../utils/Notifications.jsx";

const ButtonDelete = ({ id }) => {
  const handleDelete = async () => {
    const response = await fetch(
      `https://movies-backend.3.us-1.fl0.io/api/movies/${id}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      ToastMovieDeleted();
      //redireccionar a la pagina de inicio
    } else {
      ToastMovieNotFound();
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="flex place-content-center items-center w-1/2 h-[40px] border rounded-lg bg-rose-500 transition-all hover:bg-rose-600 hover:scale-105 text-white"
    >
      <span>Delete</span>
      <span className="ml-2">
        <TrashIcon />
      </span>
    </button>
  );
};

export default ButtonDelete;
