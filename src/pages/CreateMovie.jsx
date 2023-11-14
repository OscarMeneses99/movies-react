import { Link } from "react-router-dom";
import Arrow from "../assets/ChevronLeftIcon.jsx";
const CreateMovie = () => {
  return (
    <main className="mx-auto max-w-lg py-2">
      <div className="mx-1 max-w-lg">
        <header>
          <Link
            to="/"
            className="flex place-items-center justify-center items-center transition-all hover:text-teal-700 hover:scale-105"
          >
            <Arrow />
            <h1 className="font-black uppercase text-4xl md:text-5xl text-center py-5 px-4">
              Back
            </h1>
          </Link>
        </header>

        <form
          method="post"
          className="space-y-5 rounded-lg p-4 shadow-xl text-left sm:p-6 lg:p-8"
        >
          <h1 className="font-black uppercase text-4xl md:text-5xl text-center py-5 px-4">
            Create movie
          </h1>
          <div>
            <label className="block text-md font-mono text-teal-700">
              Title
            </label>
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="The Godfather"
            />
          </div>

          <div className="flex justify-around">
            <div>
              <label className="block text-md font-mono text-teal-700">
                Year
              </label>
              <input
                type="number"
                min="1900"
                max="2025"
                className="w-[140px] rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="1975"
              />
            </div>
            <div>
              <label className="block text-md font-mono text-teal-700">
                Duration
              </label>
              <input
                type="number"
                min="1"
                max="500"
                className="w-[140px] rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="175"
              />
            </div>
          </div>

          <div>
            <label className="block text-md font-mono text-teal-700">
              Director
            </label>
            <input
              type="text"
              min="1900"
              max="2025"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Francis Ford Coppola"
            />
          </div>

          <div className="flex justify-around">
            <div>
              <label className="block text-md font-mono text-teal-700">
                Genre
              </label>
              <input
                type="text"
                className="w-[180px] rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Action, Drama..."
              />
            </div>
            <div>
              <label className="block text-md font-mono text-teal-700">
                Rate
              </label>
              <input
                type="number"
                step="0.1"
                min="1"
                max="10"
                className="w-[90px] rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="9.3"
              />
            </div>
          </div>

          <div>
            <label className="block text-md font-mono text-teal-700">
              Poster
            </label>
            <input
              type="text"
              className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="https://img.fruugo.com/product/4/49/14441494_max.jpg"
            />
          </div>

          <div>
            <label className="block text-md font-mono text-teal-700">
              Synopsis
            </label>

            <textarea
              className="mt-2 w-full p-3 rounded-lg border-gray-200 align-top shadow-sm sm:text-sm"
              rows="6"
              placeholder="The Godfather is a 1972 crime drama film that revolves around the Corleone Mafia family, led by Vito Corleone. It explores themes of power, family, and loyalty as his son Michael gets involved in the family's criminal activities after an assassination attempt on Vito. The movie is renowned for its storytelling, complex characters, and iconic performances."
            ></textarea>
          </div>

          <button
            type="submit"
            className="block w-full rounded-lg bg-teal-600 hover:bg-teal-700 px-5 py-3 text-sm font-medium text-white"
          >
            Create
          </button>
        </form>
      </div>
    </main>
  );
};

export default CreateMovie;
