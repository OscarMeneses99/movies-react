import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { MovieContext } from "../context/Context.jsx";
import Background from "../assets/Background.jsx";
import ArrowLeft from "../assets/ArrowLeft.jsx";

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
        navigate("/home");
      });
  });
  return (
    <div className="relative flex justify-center items-center min-h-screen bg-black">
      <Background />
      <main className="flex justify-center items-center z-10 mt-5 mb-5 bg-[#202020] shadow-xl rounded-lg">
        <form
          method="post"
          className="relative space-y-5 p-4 text-left sm:p-4 lg:p-8"
          onSubmit={onSubmit}
        >
          <Link to="/home">
            <ArrowLeft />
          </Link>
          <h1 className="font-black uppercase text-4xl md:text-5xl text-center py-5 px-4">
            Create movie
          </h1>
          <div>
            <label className="block text-md font-mono">Title</label>
            <input
              type="text"
              className="w-full rounded-lg bg-[#303030] p-4 pe-12 text-sm shadow-sm"
              placeholder="The Godfather"
              {...register("title")}
            />
            {errors.title?.message && (
              <p className="text-rose-600 font-mono">{errors.title?.message}</p>
            )}
          </div>

          <div className="flex justify-around">
            <div>
              <label className="block text-md font-mono">Year</label>
              <input
                type="number"
                min="1900"
                max="2025"
                className="w-[140px] rounded-lg bg-[#303030] p-4 pe-12 text-sm shadow-sm"
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
              <label className="block text-md font-mono ">Duration</label>
              <input
                type="number"
                min="1"
                max="500"
                className="w-[140px] rounded-lg bg-[#303030] p-4 pe-12 text-sm shadow-sm"
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
            <label className="block text-md font-mono ">Director</label>
            <input
              type="text"
              className="w-full rounded-lg bg-[#303030] p-4 pe-12 text-sm shadow-sm"
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
              <label className="block text-md font-mono ">
                Genre (comma separated)
              </label>
              <input
                type="text"
                className="w-[180px] rounded-lg bg-[#303030] p-4 pe-12 text-sm shadow-sm"
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
              <label className="block text-md font-mono ">Rate</label>
              <input
                type="number"
                step="0.1"
                min="1"
                max="10"
                className="w-[100px] rounded-lg bg-[#303030] p-4 pe-12 text-sm shadow-sm"
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
            <label className="block text-md font-mono ">Poster</label>
            <input
              type="text"
              className="w-full rounded-lg bg-[#303030] p-4 pe-12 text-sm shadow-sm"
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
            <label className="block text-md font-mono">Synopsis</label>

            <textarea
              className="mt-2 w-full p-3 rounded-lg bg-[#303030] shadow-sm sm:text-sm"
              rows="7"
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
            className="block w-full rounded-lg bg-rose-600 hover:bg-rose-700 px-5 py-3 text-sm font-medium text-white"
          >
            Create
          </button>
        </form>
      </main>
    </div>
  );
};

export default CreateMovie;
