import EditIcon from "../assets/EditIcon.jsx";
import { Link } from "react-router-dom";

function ButtonModify({ id }) {
  return (
    <Link
      to={`/update/${id}`}
      className="flex place-content-center items-center w-1/2 h-[40px] rounded-lg bg-cyan-500 transition-all hover:bg-cyan-600 hover:scale-105 text-white"
    >
      <span>Modify</span>
      <span className="ml-2">
        <EditIcon />
      </span>
    </Link>
  );
}

export default ButtonModify;
