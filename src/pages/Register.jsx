import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastUserCreated, ToastUserNotCreated } from "../utils/Notifications";

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
        navigate("/");
      });
  });

  const errorsStyle = "text-rose-800 text-sm font-mono font-bold mt-1";
  return (
    <div className="flex flex-col min-h-screen bg-teal-900">
      <main className="mx-auto max-w-lg flex-grow flex-shrink mt-10">
        <form
          className="flex flex-col justify-center items-center rounded-xl p-10 mb-10 bg-teal-700"
          onSubmit={onSubmit}
        >
          <img
            src="https://as2.ftcdn.net/v2/jpg/02/01/19/07/1000_F_201190712_1fxYTqiaQLEo8rUAimPp8yASSpMv7zRy.jpg"
            alt="cinema"
            className="object-cover w-1/2 rounded-lg"
          />
          <h1 className="text-3xl font-bold font-mono uppercase text-white mt-5">
            My Account
          </h1>
          <div>
            <input
              type="text"
              className="mt-5 w-[300px] p-4 rounded-lg border-black bg-white focus:outline-none "
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
              className="mt-5 w-[300px] p-4 rounded-lg border-black bg-white focus:outline-none "
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
              className="mt-5 w-[300px] p-4 rounded-lg border-black bg-white focus:outline-none "
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
              className="mt-5 w-[300px] p-4 rounded-lg border-black bg-white focus:outline-none"
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

          <button className="bg-teal-500 w-[300px] p-4 mt-7 mb-3 rounded-md text-white font-bold hover:bg-teal-600">
            Create
          </button>
          <div className="flex justify-end items-center mt-3">
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
