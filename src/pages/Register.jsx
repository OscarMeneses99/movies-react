import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  ToastUserCreated,
  ToastUserNotCreated,
} from "../utils/Notifications.jsx";
import ArrowLeft from "../assets/ArrowLeft.jsx";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    const { name, username, email, password } = data;
    fetch("https://movies-backend.3.us-1.fl0.io/api/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        username: username,
        email: email,
        password: password,
      }),
    })
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
        ToastUserNotCreated();
      })
      .finally(() => {
        ToastUserCreated();
        navigate("/home");
      });
  });

  const errorsStyle = "text-rose-800 text-sm font-mono font-bold mt-1";
  return (
    <div className="relative flex flex-col min-h-screen w-[100%] bg-black">
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/3d9a18e1-6755-4fe5-a73c-580bcf7a48b3/MX-es-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="background"
        className="absolute object-cover aspect-[2000/1125] w-[100%] h-[100%] z-0 opacity-60"
      />
      <main className="mx-auto max-w-lg flex flex-col justify-center items-center flex-wrap flex-grow mt-5 lg:mt-0 z-10">
        <form
          className="relative flex flex-col justify-center items-center rounded-xl py-5 px-10 bg-[#202020]"
          onSubmit={onSubmit}
        >
          <Link to="/">
            <ArrowLeft />
          </Link>
          <img src="/Cinema.png" alt="title" className="object-cover" />
          <h1 className="text-3xl font-bold font-mono uppercase text-white mt-1">
            My Account
          </h1>
          <div>
            <input
              type="text"
              className="mt-1 w-[300px] p-4 rounded-lg border-black bg-white focus:outline-none "
              placeholder="Full Name"
              {...register("name", {
                required: "This field is required",
                minLength: {
                  value: 3,
                  message: "Name must be at least 3 characters",
                },
                maxLength: {
                  value: 50,
                  message: "Name cannot exceed 50 characters",
                },
              })}
            />
            {errors.name && (
              <p className={errorsStyle}>{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              className="mt-4 w-[300px] p-4 rounded-lg border-black bg-white focus:outline-none "
              placeholder="Username"
              {...register("username", {
                required: "This field is required",
                minLength: {
                  value: 3,
                  message: "Username must be at least 3 characters",
                },
                maxLength: {
                  value: 20,
                  message: "Username cannot exceed 20 characters",
                },
              })}
            />
            {errors.username && (
              <p className={errorsStyle}>{errors.username.message}</p>
            )}
          </div>

          <div>
            <input
              type="text"
              className="mt-4 w-[300px] p-4 rounded-lg border-black bg-white focus:outline-none "
              placeholder="Email"
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className={errorsStyle}>{errors.email.message}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className="mt-4 w-[300px] p-4 rounded-lg border-black bg-white focus:outline-none"
              {...register("password", {
                required: "This field is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            {errors.password && (
              <p className={errorsStyle}>{errors.password.message}</p>
            )}
          </div>

          <button className="bg-rose-500 w-[300px] p-4 mt-4 mb-1 rounded-md text-white font-bold hover:bg-rose-600">
            Create
          </button>
          <div className="flex justify-end items-center">
            <p className="text-md font-mono font-bold text-white">
              Already have an account?
            </p>
            <Link
              to="/login"
              className="text-md ml-1 text-orange-400 hover:underline"
            >
              Login
            </Link>
          </div>
        </form>
      </main>
    </div>
  );
};

export default Register;
