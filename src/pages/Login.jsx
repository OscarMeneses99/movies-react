import { Link } from "react-router-dom";
import ArrowLeft from "../assets/ArrowLeft.jsx";
function Login() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/3d9a18e1-6755-4fe5-a73c-580bcf7a48b3/MX-es-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="background"
        className="absolute object-cover aspect-[2000/1125] w-[100%] h-[100%] z-0 opacity-60 "
      />
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
          <button className="bg-rose-500 w-[300px] p-4 mt-7 mb-3 rounded-md text-white font-bold hover:bg-rose-600">
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
