import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import ChevronIcon from "../assets/ChevronLeftIcon.jsx";
import ButtonDelete from "../components/ButtonDelete.jsx";
import ButtonModify from "../components/ButtonModify.jsx";
import Footer from "../components/Footer.jsx";
import { MovieContext } from "../context/Context.jsx";

function MovieInfo() {
  const { movies } = useContext(MovieContext);
  const navigate = useNavigate();
  const { id } = useParams();

  const info = movies.find((movie) => movie._id === id);

  if (!info) {
    navigate("/NotFound");
    return null;
  }
  return (
    <>
      <header>
        <Link
          to="/"
          className="flex place-content-center items-center mb-5 transition-all hover:text-teal-800 hover:scale-105"
        >
          <ChevronIcon />
          <h2 className="font-mono font-extrabold text-3xl">Home Page</h2>
        </Link>
      </header>
      <main className="grid grid-cols-1 justify-center mx-auto max-w-xl md:grid-cols-[350px_1fr] gap-3 px-8 mb-10">
        <picture className="w-full gap-5">
          <div className="flex mb-3 gap-2">
            <ButtonDelete />
            <ButtonModify />
          </div>
          <img
            className="aspect-[520/804] object-cover rounded"
            src={info.poster}
            alt={`Portada del libro ${info.title}`}
          />
        </picture>

        <aside className="flex flex-col items-center md:w-[500px] md:mt-10 p-2">
          <ul className="text-left">
            <span className="text-2xl font-bold text-teal-800 justify-center flex md:block">
              {info.title}
            </span>
            <li>
              <span className="text-xl text-teal-700">Synopsis: </span>
              <span className="text-lg font-mono">{info.synopsis}</span>
            </li>
            <li>
              <span className="text-xl text-teal-700">Director: </span>
              <span className="text-lg font-mono">{info.director}</span>
            </li>
            <li>
              <span className="text-xl text-teal-700">Year: </span>
              <span className="text-lg font-mono">{info.year}</span>
            </li>

            <li>
              <span className="text-xl text-teal-700"> Duration: </span>
              <span className="text-lg font-mono">{info.duration} mins</span>
            </li>

            <ul>
              <span className="text-xl text-teal-700">Genre: </span>
              {info.genre.map((genre, index) => (
                <li
                  key={index}
                  className="text-lg text-gray-700 font-mono list-none px-4"
                >
                  {genre}
                </li>
              ))}
            </ul>

            <li>
              <span className="text-xl text-teal-700">Rate: </span>
              <span className="text-lg font-mono">{info.rate}</span>
            </li>
          </ul>
        </aside>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default MovieInfo;
