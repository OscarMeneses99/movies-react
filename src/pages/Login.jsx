import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="flex flex-col min-h-screen bg-teal-900">
      <main className="mx-auto max-w-lg flex-grow flex-shrink mt-10">
        <form className="flex flex-col justify-center items-center rounded-xl p-10 bg-teal-700">
          <img src="https://as2.ftcdn.net/v2/jpg/02/01/19/07/1000_F_201190712_1fxYTqiaQLEo8rUAimPp8yASSpMv7zRy.jpg" 
          alt="cinema" 
          className="object-cover w-1/2 rounded-lg"/>
          <input
            type="text"
            className="mt-5 w-[300px] p-4 rounded-lg border-black bg-white focus:outline-none "
            placeholder="Username"
          />
          <input
            type="password"
            placeholder="Password"
            className="mt-3 w-[300px] p-4 rounded-lg border-black bg-white focus:outline-none"
          />
          <button className="bg-teal-500 w-[300px] p-4 mt-7 mb-3 rounded-md text-white font-bold hover:bg-teal-600">
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
