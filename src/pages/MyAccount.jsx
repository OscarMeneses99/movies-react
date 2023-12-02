import { Link } from "react-router-dom";
import ArrowLeft from "../assets/ArrowLeft.jsx";
import Background from "../assets/Background.jsx";
const MyAccount = () => {
  return (
    <div className="relative flex justify-center items-center min-h-screen bg-black">
      <Background />
      <div className="flex z-10 mt-5 mb-5 rounded-lg bg-[#202020]">
        <form className="relative z-10 flex flex-col justify-center items-center space-y-5 p-4 text-left sm:p-4 lg:p-8">
          <Link to="/home">
            <ArrowLeft />
          </Link>
          <h1 className="font-black uppercase text-4xl md:text-5xl text-center py-5 px-4">
            My Account
          </h1>

          <div>
            <label className="block text-md font-mono">Username</label>
            <input
              type="text"
              className="w-[250px] rounded-lg bg-[#303030] p-4 pe-12 text-sm shadow-sm"
              placeholder="Camila Yokoo"
            />
          </div>
          <div>
            <label className="block text-md font-mono">Email</label>
            <input
              type="email"
              className="w-[250px] rounded-lg bg-[#303030] p-4 pe-12 text-sm shadow-sm"
              placeholder="camilayokoo@gmail.com"
            />
          </div>
          <div>
            <label className="block text-md font-mono">Password</label>
            <input
              type="password"
              className="w-[250px] rounded-lg bg-[#303030] p-4 pe-12 text-sm shadow-sm"
              placeholder="*********"
            />
          </div>
          <button
            type="submit"
            className="w-[250px] rounded-lg bg-rose-600 hover:bg-rose-700 px-5 py-3 text-sm font-medium text-white"
          >
            Edit
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyAccount;
