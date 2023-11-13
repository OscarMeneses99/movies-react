import { NavLink } from "react-router-dom";
import { useState } from "react";
import SettingsIcon from "../assets/SettingsIcon.jsx";
import DeviceIcon from "../assets/DeviceIcon.jsx";
import MenuIcon from "../assets/MenuIcon.jsx";
import Menu from "./Menu.jsx";

function Navbar() {
  const activeStyle = "bg-teal-500 text-white px-3 py-2 rounded-lg";
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <nav className="flex justify-between items-center bg-white lg:justify-center lg:gap-14 font-mono font-semibold">
        <ul
          className="flex flex-row justify-center
      content-center items-center gap-5"
        >
          <li className="mr-3">
            <NavLink to="/">
              <DeviceIcon />
            </NavLink>
          </li>
          <li className="hidden lg:block hover:scale-110 transition-all hover:text-teal-900">
            <NavLink
              to="/genre/action"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Action
            </NavLink>
          </li>
          <li className="hidden lg:block hover:scale-110 transition-all hover:text-teal-900">
            <NavLink
              to="/genre/adventure"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Adventure
            </NavLink>
          </li>
          <li className="hidden lg:block hover:scale-110 transition-all hover:text-teal-900">
            <NavLink
              to="/genre/animation"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Animation
            </NavLink>
          </li>
          <li className="hidden lg:block hover:scale-110 transition-all hover:text-teal-900">
            <NavLink
              to="/genre/biography"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Biography
            </NavLink>
          </li>
          <li className="hidden lg:block hover:scale-110 transition-all hover:text-teal-900">
            <NavLink
              to="/genre/crime"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Crime
            </NavLink>
          </li>
          <li className="hidden lg:block hover:scale-110 transition-all hover:text-teal-900">
            <NavLink
              to="/genre/drama"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Drama
            </NavLink>
          </li>
          <li className="hidden lg:block hover:scale-110 transition-all hover:text-teal-900">
            <NavLink
              to="/genre/fantasy"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Fantasy
            </NavLink>
          </li>
          <li className="hidden lg:block hover:scale-110 transition-all hover:text-teal-900">
            <NavLink
              to="/genre/romance"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Romance
            </NavLink>
          </li>
          <li className="hidden lg:block hover:scale-110 transition-all hover:text-teal-900">
            <NavLink
              to="/genre/sci-fi"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Sci-Fi
            </NavLink>
          </li>
        </ul>
        <ul className="flex justify-center items-center content-center">
          <li className="hidden lg:block">
            <SettingsIcon />
          </li>
          <li className="block lg:hidden">
            <button onClick={toggleVisibility}>
              <MenuIcon />
            </button>
          </li>
        </ul>
      </nav>
      <Menu isVisible={isVisible} />
    </>
  );
}

export default Navbar;
