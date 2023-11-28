import { Link } from "react-router-dom";
function NotFound() {
  return (
    <main className="max-w-lg m-auto min-h-screen grid place-content-center text-center">
      <h1 className="text-4xl font-black mb-4">Oh, vaya. ¡Lo has roto!</h1>
      <img src="https://midu.dev/images/this-is-fine-404.gif" />
      <Link to="/home" className="text-blue-500 hover:underline">
        Volver al inicio
      </Link>
    </main>
  );
}

export default NotFound;
