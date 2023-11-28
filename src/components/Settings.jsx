import { Link } from "react-router-dom";
const Settings = ({ isVisible }) => {
  return (
    <div
      className={`rounded-lg w-[220px] absolute top-[50px] right-1 m-2 bg-[#303030] z-10 
    ${isVisible ? "" : "hidden"}`}
    >
      <ul className="p-4">
        <li className="p-2 font-mono font-extrabold text-lg text-center bg-orange-600 text-white rounded-lg hover:scale-105 hover:bg-orange-500 transition-all">
          <Link to="/add-movie">Add Movie</Link>
        </li>

        <li className="mt-5 p-2 font-mono font-extrabold text-lg text-center bg-orange-600 text-white rounded-lg hover:scale-105 hover:bg-orange-500 transition-all">
          <Link to="/my-account">My Account</Link>
        </li>
        <li className=" mt-5 mb-2 p-2 font-mono font-extrabold text-lg text-center bg-orange-600 text-white rounded-lg hover:scale-105 hover:bg-orange-500 transition-all">
          <Link to="/*">Sign out</Link>
        </li>
      </ul>
    </div>
  );
};

export default Settings;
