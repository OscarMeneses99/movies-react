import { Link } from "react-router-dom";
const Settings = ({ isVisible }) => {
  return (
    <div
      className={`border-2 rounded-lg w-[220px] absolute top-[75px] right-3 m-2 bg-white z-10 
    ${isVisible ? "" : "hidden"}`}
    >
      <ul className="p-4">
        <li className="p-3 font-mono font-extrabold text-xl bg-teal-700 text-white rounded-lg">
          <Link to="/add-movie">Add Movie</Link>
        </li>

        <li className="mt-5 p-3 font-mono font-extrabold text-xl bg-teal-700 text-white rounded-lg">
          <Link to="/my-account">My Account</Link>
        </li>
        <li className=" mt-5 mb-2 p-3 font-mono font-extrabold text-xl bg-teal-700 text-white rounded-lg">
          <Link to="/*">Sign out</Link>
        </li>
      </ul>
    </div>
  );
};

export default Settings;
