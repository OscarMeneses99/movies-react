import { createContext, useEffect, useState } from "react";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [searchByTitle, setSearchByTitle] = useState("");

  function fetchMovies() {
    fetch("https://movies-backend.3.us-1.fl0.io/api/movies")
      .then((res) => res.json())
      .then((data) => setMovies(data));
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <MovieContext.Provider
      value={{
        movies,
        setMovies,
        searchByTitle,
        setSearchByTitle,
        fetchMovies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
