import { Link } from "react-router-dom";

function CardMovie({ data }) {
  const { _id, title, poster } = data;
  return (
    <Link
      className="hover:scale-105 inline-block transition-all hover:shadow-2xl"
      to={`/movies/${_id}`}
    >
      <img
        alt={`Portada de la pelicula ${title}`}
        className="object-cover aspect-[520/804] rounded"
        src={poster}
      />
    </Link>
  );
}

export default CardMovie;
