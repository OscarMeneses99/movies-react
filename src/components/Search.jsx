import { useContext } from "react";
import { MovieContext } from "../context/Context.jsx";
function Search() {
  const { setSearchByTitle } = useContext(MovieContext);
  return (
    <input
      type="text"
      name="title"
      placeholder="Search for a movie..."
      className="mb-10 p-3 w-[250px] border-2 border-teal-500 rounded-lg focus:outline-none focus:border-teal-500"
      onChange={(e) => setSearchByTitle(e.target.value)}
    />
  );
}

export default Search;
