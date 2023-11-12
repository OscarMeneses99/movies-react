import { NavLink } from "react-router-dom";
import UserIcon from "../assets/UserIcon.jsx";
import DeviceIcon from "../assets/DeviceIcon.jsx";
import Menu from "../assets/MenuIcon.jsx";

function Navbar() {
  const activeStyle = "bg-teal-500 text-white px-3 py-2 rounded-lg";
  return (
    <nav className="flex justify-between bg-white lg:justify-center lg:gap-14 font-mono">
      <ul className="flex flex-row justify-center items-center gap-5">
        <li>
          <NavLink to="/">
            <DeviceIcon />
          </NavLink>
        </li>
        <li className="hidden lg:block">
          <NavLink
            to="/genre/action"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Action
          </NavLink>
        </li>
        <li className="hidden lg:block">
          <NavLink
            to="/genre/adventure"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Adventure
          </NavLink>
        </li>
        <li className="hidden lg:block">
          <NavLink
            to="/genre/animation"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Animation
          </NavLink>
        </li>
        <li className="hidden lg:block">
          <NavLink
            to="/genre/biography"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Biography
          </NavLink>
        </li>
        <li className="hidden lg:block">
          <NavLink
            to="/genre/crime"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Crime
          </NavLink>
        </li>
        <li className="hidden lg:block">
          <NavLink
            to="/genre/drama"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Drama
          </NavLink>
        </li>
        <li className="hidden lg:block">
          <NavLink
            to="/genre/fantasy"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Fantasy
          </NavLink>
        </li>
        <li className="hidden lg:block">
          <NavLink
            to="/genre/romance"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Romance
          </NavLink>
        </li>
        <li className="hidden lg:block">
          <NavLink
            to="/genre/sci-fi"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sci-Fi
          </NavLink>
        </li>
      </ul>
      <ul className="flex justify-center items-center">
        <li className="hidden lg:block">
          <UserIcon />
        </li>
        <li className="block lg:hidden">
          <Menu />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
