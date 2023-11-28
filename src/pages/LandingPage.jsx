import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center  relative">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/3d9a18e1-6755-4fe5-a73c-580bcf7a48b3/MX-es-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="background"
        className="absolute object-cover aspect-[2000/1125] w-[100%] h-[100%] z-0 opacity-60 "
      />
      <div className="z-10 flex justify-between items-center w-full p-4 absolute top-0 flex-wrap">
        <img src="/Cinema.png" alt="title" className="w-[180px]" />
        <div>
          <Link
            to="/login"
            className="bg-rose-600 text-white text-xl rounded-lg p-3 font-bold hover:bg-rose-500 transition-all"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="bg-orange-600 text-white text-xl rounded-lg p-3 font-bold hover:bg-orange-500 transition-all ml-4"
          >
            Register
          </Link>
        </div>
      </div>

      <div className="z-10 flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
          Welcome to Cinema
        </h1>
        <div>
          <p className="text-xl text-white bg-black/70 rounded-lg p-5 mt-4">
            Explore a world of movies with in-depth information at your
            fingertips.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
