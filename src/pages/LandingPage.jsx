import { Link } from "react-router-dom";
import Background from "../assets/Background";
import Cinema from "../assets/Cinema.jsx";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col justify-center relative">
      <Background />
      <div className="z-10 flex justify-center gap-10 md:justify-between items-center w-full p-4 absolute top-0 flex-wrap">
        <Cinema width="180"/>
        <div>
          <Link
            to="/home"
            className="bg-rose-600 text-white text-xl rounded-lg p-3 font-bold hover:bg-rose-500 transition-all"
          >
            Getting Started
          </Link>

        </div>
      </div>

      <div className="z-10 flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
          Welcome to Cinema
        </h1>
        <div>
          <p className="text-xl text-white p-5 mt-4">
            Explore a world of movies with in-depth information at your
            fingertips.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
