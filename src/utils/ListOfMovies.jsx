import { useContext } from "react";
import CardMovie from "../components/CardMovie.jsx";
import { MovieContext } from "../context/Context.jsx";

function ListOfMovies() {
  const { movies } = useContext(MovieContext);
  return (
    <section className="grid grid-cols-1 justify-items-center sm:grid-cols-2 md:grid-cols-3 gap-5 px-4">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <figure key={movie._id}>
            <CardMovie data={movie} />
          </figure>
        ))
      ) : (
        <p className="absolute mt-[50px] text-xl font-light text-black/70">
          No Movies Found
        </p>
      )}
    </section>
  );
}

export default ListOfMovies;
