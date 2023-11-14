import { Link } from "react-router-dom";
import Arrow from "../assets/ChevronLeftIcon.jsx";
const MyAccount = () => {
  return (
    <body className="mx-auto max-w-lg py-2">
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
          className="flex flex-col justify-center items-center space-y-5 rounded-lg p-4 shadow-xl text-left sm:p-4 lg:p-8"
        >
          <h1 className="font-black uppercase text-4xl md:text-5xl text-center py-5 px-4">
            My Account
          </h1>

          <div>
            <label className="block text-md font-mono text-teal-700">
              Username
            </label>
            <input
              type="text"
              className="w-[250px] rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="Camila Yokoo"
            />
          </div>
          <div>
            <label className="block text-md font-mono text-teal-700">
              Email
            </label>
            <input
              type="email"
              className="w-[250px] rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="camilayokoo@gmail.com"
            />
          </div>
          <div>
            <label className="block text-md font-mono text-teal-700">
              Password
            </label>
            <input
              type="password"
              className="w-[250px] rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm"
              placeholder="*********"
            />
          </div>
          <button
            type="submit"
            className="block w-full rounded-lg bg-teal-600 hover:bg-teal-700 px-5 py-3 text-sm font-medium text-white"
          >
            Edit
          </button>
        </form>
      </div>
    </body>
  );
};

export default MyAccount;
