import { Link } from "react-router-dom";
const Settings = ({ isVisible }) => {
  return (
    <div
      className={`rounded-lg w-[220px] absolute top-[65px] right-1 m-2 bg-[#303030] z-10 
    ${isVisible ? "" : "hidden"}`}
    >
      <ul className="p-4">
        <li className="p-2 font-mono font-extrabold text-lg text-center bg-rose-600 text-white rounded-lg hover:scale-105 hover:bg-rose-500 transition-all">
          <Link to="/add-movie">Add Movie</Link>
        </li>
      </ul>
    </div>
  );
};

export default Settings;
