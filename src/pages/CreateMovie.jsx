import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { MovieContext } from "../context/Context.jsx";
import Arrow from "../assets/ChevronLeftIcon.jsx";
import {
  ToastMovieCreated,
  ToastMovieNotCreated,
} from "../utils/Notifications.jsx";

const CreateMovie = () => {
  const { MovieChange } = useContext(MovieContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    const { title, year, duration, director, genre, rate, poster, synopsis } =
      data;

    fetch("https://movies-backend.3.us-1.fl0.io/api/movies", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        year: year,
        duration: duration,
        director: director,
        genre: genre.split(",").map((item) => item.trim()),
        rate: rate,
        poster: poster,
        synopsis: synopsis,
      }),
    })
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
        ToastMovieNotCreated();
      })
      .finally(() => {
        ToastMovieCreated();
        MovieChange();
        navigate("/");
      });
  });
  return (
    <div className="mx-auto max-w-lg py-2">
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
          className="space-y-5 rounded-lg p-4 shadow-xl text-left sm:p-4 lg:p-8"
          onSubmit={onSubmit}
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
              className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="The Godfather"
              {...register("title")}
            />
            {errors.title?.message && (
              <p className="text-rose-600 font-mono">{errors.title?.message}</p>
            )}
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
                className="w-[140px] rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="1975"
                {...register("year", { valueAsNumber: true })}
              />
              {errors.year?.message && (
                <p className="text-rose-600 font-mono">
                  {errors.year?.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-md font-mono text-teal-700">
                Duration
              </label>
              <input
                type="number"
                min="1"
                max="500"
                className="w-[140px] rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="175"
                {...register("duration", { valueAsNumber: true })}
              />
              {errors.duration?.message && (
                <p className="text-rose-600 font-mono">
                  {errors.duration?.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-md font-mono text-teal-700">
              Director
            </label>
            <input
              type="text"
              className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Francis Ford Coppola"
              {...register("director")}
            />
            {errors.director?.message && (
              <p className="text-rose-600 font-mono">
                {errors.director?.message}
              </p>
            )}
          </div>

          <div className="flex justify-around">
            <div>
              <label className="block text-md font-mono text-teal-700">
                Genre (comma separated)
              </label>
              <input
                type="text"
                className="w-[180px] rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="Action, Drama..."
                {...register("genre")}
              />
              {errors.genre?.message && (
                <p className="text-rose-600 font-mono">
                  {errors.genre?.message}
                </p>
              )}
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
                className="w-[100px] rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="9.3"
                {...register("rate", { valueAsNumber: true })}
              />
              {errors.rate?.message && (
                <p className="text-rose-600 font-mono">
                  {errors.rate?.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-md font-mono text-teal-700">
              Poster
            </label>
            <input
              type="text"
              className="w-full rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="https://img.fruugo.com/product/4/49/14441494_max.jpg"
              {...register("poster")}
            />
            {errors.poster?.message && (
              <p className="text-rose-600 font-mono">
                {errors.poster?.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-md font-mono text-teal-700">
              Synopsis
            </label>

            <textarea
              className="mt-2 w-full p-3 rounded-lg border border-gray-200 shadow-sm sm:text-sm"
              rows="6"
              placeholder="The Godfather is a 1972 crime drama film that revolves around the Corleone Mafia family, led by Vito Corleone. It explores themes of power, family, and loyalty as his son Michael gets involved in the family's criminal activities after an assassination attempt on Vito. The movie is renowned for its storytelling, complex characters, and iconic performances."
              {...register("synopsis")}
            />
            {errors.synopsis?.message && (
              <p className="text-rose-600 font-mono">
                {errors.synopsis?.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="block w-full rounded-lg bg-teal-600 hover:bg-teal-700 px-5 py-3 text-sm font-medium text-white"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateMovie;
