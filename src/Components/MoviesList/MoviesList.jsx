import { Link, useLocation } from "react-router-dom";
import css from "./MoviesList.module.css";

export const MoviesList = ({ films }) => {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {films.map((film) => (
        <li key={film.id}>
          <Link to={`/movies/${film.id}`} state={location}>
            {film.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
