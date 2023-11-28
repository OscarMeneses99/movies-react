import { Link } from "react-router-dom";
import ArrowLeft from "../assets/ArrowLeft.jsx";
const MyAccount = () => {
  return (
    <div className="relative flex justify-center items-center min-h-screen">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/3d9a18e1-6755-4fe5-a73c-580bcf7a48b3/MX-es-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="background"
        className="absolute object-cover aspect-[2000/1125] w-[100%] h-[100%] z-0 opacity-60 "
      />
      <div className="flex z-10 mt-5 mb-5 bg-[#202020]">
        <form
          className="relative z-10 flex flex-col justify-center items-center space-y-5 rounded-lg p-4 shadow-xl text-left sm:p-4 lg:p-8"
        >
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
