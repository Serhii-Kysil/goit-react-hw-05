import { Link } from "react-router-dom";
import css from "./SearchList.module.css";

export const SearchList = ({ searchResults }) => {
  return (
    <ul className={css.list}>
      {searchResults.map((movie) => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};
