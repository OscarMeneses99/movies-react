import { Link, useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext, useEffect } from "react";
import { MovieContext } from "../context/Context.jsx";
import ArrowLeft from "../assets/ArrowLeft.jsx";
import {
  ToastMovieUpdated,
  ToastMovieNotUpdated,
} from "../utils/Notifications.jsx";

const UpdateMovie = () => {
  const { fetchMovies } = useContext(MovieContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    fetch(`https://movies-backend.3.us-1.fl0.io/api/movies/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // Seteamos los valores en el formulario
        setValue("title", data.title);
        setValue("year", data.year);
        setValue("duration", data.duration);
        setValue("director", data.director);
        setValue(
          "genre",
          Array.isArray(data.genre) ? data.genre.join(", ") : ""
        );
        setValue("rate", data.rate);
        setValue("poster", data.poster);
        setValue("synopsis", data.synopsis);
      });
  }, [id, setValue]);

  const onSubmit = handleSubmit((movie) => {
    const { title, year, duration, director, genre, rate, poster, synopsis } =
      movie;
    fetch(`https://movies-backend.3.us-1.fl0.io/api/movies/${id}`, {
      method: "PATCH",
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
        ToastMovieNotUpdated();
      })
      .finally(() => {
        ToastMovieUpdated();
        fetchMovies();
        navigate("/home");
      });
  });
  return (
    <div className="relative flex justify-center items-center min-h-screen">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/3d9a18e1-6755-4fe5-a73c-580bcf7a48b3/MX-es-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="background"
        className="absolute object-cover aspect-[2000/1125] w-[100%] h-[100%] z-0 opacity-60 "
      />
      <div className="flex justify-center items-center z-10 mt-5 mb-5 bg-[#202020]">
        <form
          method="post"
          className="relative space-y-5 rounded-lg p-4 shadow-xl text-left sm:p-4 lg:p-8"
          onSubmit={onSubmit}
        >
          <Link to="/home">
            <ArrowLeft />
          </Link>
          <h1 className="font-black uppercase text-4xl md:text-5xl text-center py-5 px-4">
            Update movie
          </h1>
          <div>
            <label className="block text-md font-mono">Title</label>
            <input
              type="text"
              placeholder="The Godfather"
              className="w-full rounded-lg bg-[#303030] p-4 pe-12 text-sm shadow-sm"
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
                placeholder="1972"
                min="1900"
                max="2025"
                className="w-[140px] rounded-lg bg-[#303030] p-4 pe-12 text-sm shadow-sm"
                {...register("year", { valueAsNumber: true })}
              />
              {errors.year?.message && (
                <p className="text-rose-600 font-mono">
                  {errors.year?.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-md font-mono">Duration</label>
              <input
                type="number"
                placeholder="175"
                min="1"
                max="500"
                className="w-[140px] rounded-lg bg-[#303030] p-4 pe-12 text-sm shadow-sm"
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
            <label className="block text-md font-mono">Director</label>
            <input
              type="text"
              placeholder="Francis Ford Coppola"
              className="w-full rounded-lg bg-[#303030] p-4 pe-12 text-sm shadow-sm"
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
              <label className="block text-md font-mono">
                Genre (comma separated)
              </label>
              <input
                type="text"
                placeholder="Crime, Drama..."
                className="w-[180px] rounded-lg bg-[#303030] p-4 pe-12 text-sm shadow-sm"
                {...register("genre")}
              />
              {errors.genre?.message && (
                <p className="text-rose-600 font-mono">
                  {errors.genre?.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-md font-mono">Rate</label>
              <input
                type="number"
                placeholder="9.2"
                step="0.1"
                min="1"
                max="10"
                className="w-[100px] rounded-lg bg-[#303030] p-4 pe-12 text-sm shadow-sm"
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
            <label className="block text-md font-mono">Poster</label>
            <input
              type="text"
              placeholder="https://img.fruugo.com/product/4/49/14441494_max.jpg"
              className="w-full rounded-lg bg-[#303030] p-4 pe-12 text-sm shadow-sm"
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
              placeholder="The Godfather is a 1972 crime drama film that revolves around the Corleone Mafia family, led by Vito Corleone. It explores themes of power, family, and loyalty as his son Michael gets involved in the family's criminal activities after an assassination attempt on Vito. The movie is renowned for its storytelling, complex characters, and iconic performances."
              rows="6"
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
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateMovie;
