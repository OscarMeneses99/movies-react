import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function ToastMovieCreated() {
  const notify = toast.success("Movie created", {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  return { notify };
}

export function ToastMovieNotCreated() {
  const notify = toast.error("Movie not created", {
    position: "top-center",
    autoClose: 1000,
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
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  return { notify };
}

export function ToastMovieNotUpdated() {
  const notify = toast.error("Movie not updated", {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  return { notify };
}

export function ToastMovieDeleted() {
  const notify = toast.success("Movie deleted", {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: true,
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

export function ToastUserCreated() {
  const notify = toast.success("User created", {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  return { notify };
}

export function ToastUserNotCreated() {
  const notify = toast.error("User not created", {
    position: "top-center",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  return { notify };
}
