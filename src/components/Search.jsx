import { useContext } from "react";
import { MovieContext } from "../context/Context.jsx";
function Search() {
  const { searchByTitle, setSearchByTitle } = useContext(MovieContext);
  return (
    <section className="flex flex-col justify-center items-center place-content-center">
      <input
        type="text"
        name="title"
        placeholder="Search for a movie..."
        className="mb-10 p-3 w-[250px] border-2 border-teal-500 rounded-lg focus:outline-none focus:border-teal-500"
        onChange={(e) => setSearchByTitle(e.target.value)}
      />
      {searchByTitle && (
        <p className="text-center text-2xl mb-4">
          Searches Found for <span className="font-bold">{searchByTitle}</span>
        </p>
      )}
    </section>
  );
}

export default Search;
