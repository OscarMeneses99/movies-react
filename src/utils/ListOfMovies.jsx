import { useState, useEffect } from "react";
import CardMovie from "../components/CardMovie.jsx";

function ListOfMovies() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        "https://movies-backend.3.us-1.fl0.io/api/movies"
      );

      setMovies(await response.json());
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <section className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 gap-5 px-4">
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
