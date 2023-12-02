import { Link, useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import ChevronIcon from "../assets/ChevronLeftIcon.jsx";
import ButtonDelete from "../components/ButtonDelete.jsx";
import ButtonModify from "../components/ButtonModify.jsx";
import { MovieContext } from "../context/Context.jsx";

function MovieInfo() {
  const { movies } = useContext(MovieContext);
  const navigate = useNavigate();
  const { id } = useParams();

  window.scrollTo(0, 0);

  const info = movies.find((movie) => movie._id === id);

  if (!info) {
    navigate("/*");
    return null;
  }

  const colors = [
    "bg-orange-500",
    "bg-pink-600",
    "bg-green-500",
    "bg-purple-500",
    "bg-red-600",
    "bg-indigo-500",
  ];

  const styleText = "text-xl text-cyan-500";
  return (
    <div className="min-h-screen">
      <header className="mt-5">
        <Link
          to="/home"
          className="flex place-content-center items-center mb-5 transition-all hover:text-rose-500 hover:scale-105"
        >
          <ChevronIcon />
          <h2 className="font-mono font-extrabold text-3xl">Home Page</h2>
        </Link>
      </header>
      <main className="grid grid-cols-1 justify-center mx-auto max-w-lg md:grid-cols-[350px_1fr] gap-3 px-8 mb-10 flex-grow flex-shrink">
        <picture className="w-full gap-5">
          <div className="flex mb-3 gap-2">
            <ButtonModify id={info._id} />
            <ButtonDelete id={info._id} />
          </div>
          <img
            className="aspect-[520/804] object-cover rounded"
            src={info.poster}
            alt={`Portada del libro ${info.title}`}
          />
        </picture>

        <aside className="flex flex-col items-center md:w-[500px] md:mt-10 p-2">
          <ul className="text-left">
            <span className="text-2xl font-bold text-cyan-600 justify-center flex md:block">
              {info.title}
            </span>
            <li>
              <span className={`${styleText}`}>Synopsis: </span>
              <span className="text-lg font-mono">{info.synopsis}</span>
            </li>
            <li>
              <span className={`${styleText}`}>Director: </span>
              <span className="text-lg font-mono">{info.director}</span>
            </li>
            <li>
              <span className={`${styleText}`}>Year: </span>
              <span className="text-lg font-mono">{info.year}</span>
            </li>

            <li>
              <span className={`${styleText}`}> Duration: </span>
              <span className="text-lg font-mono">{info.duration} mins</span>
            </li>

            <li className="items-center">
              <span className={`${styleText}`}>Genre: </span>
              <div className="flex gap-2 items-center">
                {info.genre.map((genre, index) => (
                  <span
                    key={index}
                    className={`text-lg text-white rounded-xl font-mono list-none text-center py-1 px-2 ${
                      colors[index % colors.length]
                    }`}
                  >
                    {genre}
                  </span>
                ))}
              </div>
            </li>

            <li>
              <span className={`${styleText}`}>Rate: </span>
              <span className="text-lg font-mono">{info.rate}</span>
            </li>
          </ul>
        </aside>
      </main>
    </div>
  );
}

export default MovieInfo;
