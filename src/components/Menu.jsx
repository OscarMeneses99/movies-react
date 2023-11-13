import { Link, NavLink } from "react-router-dom";
function Menu({ isVisible }) {
  const activeStyle = "bg-teal-500 text-white px-3 py-2 rounded-lg";
  return (
    <div
      className={`border-2 rounded-lg w-[220px] absolute top-[75px] right-1 m-2 bg-white z-10 
      ${isVisible ? "" : "hidden"}`}
    >
      <ul className="mt-3 p-2">
        <li className="p-3 font-mono font-extrabold text-xl bg-teal-700 text-white rounded-lg">
          <Link to="/add-movie">Add Movie</Link>
        </li>
      </ul>
      <h1 className="mb-4 ml-3 mt-3 font-mono font-semibold text-2xl text-left  text-teal-700">
        Genre
      </h1>
      <ul className="space-y-5 text-left ml-6 text-xl font-mono">
        <li className="hover:scale-110 transition-all hover:text-teal-900">
          <NavLink
            to="/genre/action"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Action
          </NavLink>
        </li>
        <li className="hover:scale-110 transition-all hover:text-teal-900">
          <NavLink
            to="/genre/adventure"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Adventure
          </NavLink>
        </li>
        <li className="hover:scale-110 transition-all hover:text-teal-900">
          <NavLink
            to="/genre/animation"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Animation
          </NavLink>
        </li>
        <li className="hover:scale-110 transition-all hover:text-teal-900">
          <NavLink
            to="/genre/biography"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Biography
          </NavLink>
        </li>
        <li className="hover:scale-110 transition-all hover:text-teal-900">
          <NavLink
            to="/genre/crime"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Crime
          </NavLink>
        </li>
        <li className="hover:scale-110 transition-all hover:text-teal-900">
          <NavLink
            to="/genre/drama"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Drama
          </NavLink>
        </li>
        <li className="hover:scale-110 transition-all hover:text-teal-900">
          <NavLink
            to="/genre/fantasy"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Fantasy
          </NavLink>
        </li>
        <li className="hover:scale-110 transition-all hover:text-teal-900">
          <NavLink
            to="/genre/romance"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Romance
          </NavLink>
        </li>
        <li className="hover:scale-110 transition-all hover:text-teal-900">
          <NavLink
            to="/genre/sci-fi"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sci-Fi
          </NavLink>
        </li>
      </ul>

      <ul className="mt-6 p-2">
        <li className="p-3 font-mono font-extrabold text-xl bg-teal-700 text-white rounded-lg">
          <a href="/">My Account</a>
        </li>
        <li className=" mt-5 mb-2 p-3 font-mono font-extrabold text-xl bg-teal-700 text-white rounded-lg">
          <a href="/">Sign out</a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
