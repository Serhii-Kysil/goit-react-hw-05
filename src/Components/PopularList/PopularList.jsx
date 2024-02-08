import { Link } from "react-router-dom";
import css from "./PopularList.module.css";

export const PopularList = ({ popularFilms }) => {
  return (
    <ul className={css.list}>
      <p className={css.title}>Trending today</p>
      {popularFilms.map((film) => (
        <li key={film.id} className={css.listItem}>
          <Link to={`/movies/${film.id}`}>{film.original_title}</Link>
        </li>
      ))}
    </ul>
  );
};
