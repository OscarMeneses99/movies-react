import { useContext } from "react";
import { MagicMotion } from "react-magic-motion";
import CardMovie from "../components/CardMovie.jsx";
import { MovieContext } from "../context/Context.jsx";

function ListOfMovies({ genre }) {
  const { movies, searchByTitle } = useContext(MovieContext);

  // Filtrar las películas según el título y el género (case-sensitive)
  const filteredMovies = movies.filter((movie) => {
    const hasTitle = searchByTitle
      ? movie.title.toLowerCase().includes(searchByTitle.toLowerCase())
      : true;
    const hasGenre = genre
      ? movie.genre.some((g) => g.toLowerCase() === genre.toLowerCase())
      : true;
    return hasTitle && hasGenre;
  });

  return (
    <MagicMotion>
      <section className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 gap-5 px-4">
        {filteredMovies.length > 0 ? (
          filteredMovies.map((movie) => (
            <figure key={movie._id}>
              <CardMovie data={movie} />
            </figure>
          ))
        ) : (
          <p className="absolute mt-[100px] text-xl font-light text-gray-500/70 italic">
            No Movies Found
          </p>
        )}
      </section>
    </MagicMotion>
  );
}

export default ListOfMovies;
