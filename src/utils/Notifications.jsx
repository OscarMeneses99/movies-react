import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ToastMovieDeleted() {
  const notify = toast.success("Movie deleted", {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  return { notify };
}

export function ToastMovieUpdated() {
  const notify = toast.success("Movie updated", {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  return { notify };
}

export function ToastMovieNotFound() {
  const notify = toast.error("Movie not found", {
    position: "top-center",
    autoClose: 1500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  return { notify };
}
