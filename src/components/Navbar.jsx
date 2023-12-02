import { NavLink } from "react-router-dom";
import { useState } from "react";
import SettingsIcon from "../assets/SettingsIcon.jsx";
import MenuIcon from "../assets/MenuIcon.jsx";
import Menu from "./Menu.jsx";
import Settings from "./Settings.jsx";
import Cinema from "../assets/Cinema.jsx";

function Navbar() {
  const activeStyle = "bg-rose-500 text-white px-3 py-2 rounded-lg";
  const styleLink =
    "hidden lg:block hover:scale-110 transition-all hover:text-rose-400";
  const [isVisibleMenu, setIsVisibleMenu] = useState(false);
  const [isVisibleSettings, setIsVisibleSettings] = useState(false);

  const toggleSettings = () => {
    setIsVisibleSettings(!isVisibleSettings);
  };

  const toggleMenu = () => {
    setIsVisibleMenu(!isVisibleMenu);
  };
  return (
    <>
      <nav className="flex justify-between items-center mt-2 lg:justify-center lg:gap-14 font-mono font-semibold">
        <ul
          className="flex flex-row justify-center
      content-center items-center gap-5"
        >
          <li className="mr-3 ml-8">
            <NavLink to="/home">
              <Cinema width="100" />
            </NavLink>
          </li>
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
        <ul className="flex justify-center items-center content-center">
          <li className="hidden lg:block lg:ml-10 absolute right-3">
            <button
              onClick={toggleSettings}
              className="transition-all hover:scale-105"
            >
              <SettingsIcon />
            </button>
          </li>
          <li className="block mr-8 lg:hidden">
            <button onClick={toggleMenu}>
              <MenuIcon />
            </button>
          </li>
        </ul>
      </nav>
      <Settings isVisible={isVisibleSettings} />
      <Menu isVisible={isVisibleMenu} />
    </>
  );
}

export default Navbar;
