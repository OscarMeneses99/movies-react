import { Link, NavLink } from "react-router-dom";
function Menu({ isVisible }) {
  const activeStyle = "bg-rose-500 text-white px-3 py-2 rounded-lg";
  const styleLink = "hover:scale-110 transition-all hover:text-rose-400";
  return (
    <div
      className={`rounded-lg w-[220px] absolute top-[50px] right-1 m-2 bg-[#303030] z-10 
      ${isVisible ? "" : "hidden"}`}
    >
      <h1 className="mb-4 ml-3 mt-3 font-mono font-semibold text-2xl text-left  text-white">
        Genre
      </h1>
      <ul className="space-y-5 text-left ml-6 text-xl font-mono">
        <li className={`${styleLink}`}>
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            All
          </NavLink>
        </li>
        <li className={`${styleLink}`}>
          <NavLink
            to="/genre/action"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Action
          </NavLink>
        </li>
        <li className={`${styleLink}`}>
          <NavLink
            to="/genre/adventure"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Adventure
          </NavLink>
        </li>
        <li className={`${styleLink}`}>
          <NavLink
            to="/genre/animation"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Animation
          </NavLink>
        </li>
        <li className={`${styleLink}`}>
          <NavLink
            to="/genre/biography"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Biography
          </NavLink>
        </li>
        <li className={`${styleLink}`}>
          <NavLink
            to="/genre/comedy"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Comedy
          </NavLink>
        </li>
        <li className={`${styleLink}`}>
          <NavLink
            to="/genre/crime"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Crime
          </NavLink>
        </li>
        <li className={`${styleLink}`}>
          <NavLink
            to="/genre/drama"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Drama
          </NavLink>
        </li>
        <li className={`${styleLink}`}>
          <NavLink
            to="/genre/fantasy"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Fantasy
          </NavLink>
        </li>
        <li className={`${styleLink}`}>
          <NavLink
            to="/genre/romance"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Romance
          </NavLink>
        </li>
        <li className={`${styleLink}`}>
          <NavLink
            to="/genre/sci-fi"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sci-Fi
          </NavLink>
        </li>
      </ul>

      <ul className="mt-5 p-2">
        <li className="p-3 font-mono font-extrabold text-xl text-center bg-rose-600 text-white rounded-lg">
          <Link to="/add-movie">Add Movie</Link>
        </li>
        <li className="mt-5 p-3 font-mono font-extrabold text-xl text-center bg-rose-600 text-white rounded-lg">
          <Link to="/my-account">My Account</Link>
        </li>
        <li className=" mt-5 mb-2 p-3 font-mono font-extrabold text-xl text-center bg-rose-600 text-white rounded-lg">
          <Link to="/">Sign out</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
