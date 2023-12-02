import { Link } from "react-router-dom";
import ArrowLeft from "../assets/ArrowLeft.jsx";
import Background from "../assets/Background.jsx";
function Login() {
  return (
    <div className="relative flex flex-col min-h-screen w-[100%] bg-black">
      <Background />
      <main className="mx-auto max-w-lg flex flex-col justify-center items-center flex-wrap flex-grow mt-10 z-10">
        <form className="relative flex flex-col justify-center items-center rounded-xl p-10 bg-[#202020]">
          <Link to="/">
            <ArrowLeft />
          </Link>
          <img src="/Cinema.png" alt="title" className="object-cover" />
          <input
            type="text"
            className="mt-5 w-[300px] p-4 rounded-lg bg-[#303030] focus:outline-none "
            placeholder="Username"
          />
          <input
            type="password"
            placeholder="Password"
            className="mt-3 w-[300px] p-4 rounded-lg bg-[#303030] focus:outline-none"
          />
          <button className="bg-rose-600 w-[300px] p-4 mt-7 mb-3 rounded-md text-white font-bold hover:bg-rose-700">
            Login
          </button>
          <div className="flex justify-end items-center mt-3">
            <p className="text-md font-mono font-bold text-white">
              Don&apos;t have an account yet?
            </p>
            <Link
              to="/register"
              className="text-md ml-1 text-orange-400 hover:underline"
            >
              Register
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Login;
