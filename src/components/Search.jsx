import { useContext } from "react";
import { MovieContext } from "../context/Context.jsx";
function Search({ genre }) {
  const { searchByTitle, setSearchByTitle } = useContext(MovieContext);
  return (
    <section className="flex flex-col justify-center items-center place-content-center">
      <input
        type="text"
        name="title"
        placeholder="Search for a movie..."
        className="mb-10 p-3 w-[250px] bg-[#303030] rounded-lg focus:outline-none"
        onChange={(e) => setSearchByTitle(e.target.value)}
      />
      {searchByTitle && (
        <p className="text-center text-2xl mb-4">
          Results for <span className="font-bold">{searchByTitle}</span>
        </p>
      )}
      {genre && (
        <p className="text-center text-2xl mb-4">
          Results for <span className="font-bold">{genre}</span>
        </p>
      )}
    </section>
  );
}

export default Search;
