import { Link, useLocation } from "react-router-dom";
import css from "./SearchList.module.css";

export const SearchList = ({ searchResults }) => {
  const location = useLocation();

  return (
    <ul className={css.list}>
      {searchResults.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={location}>
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
