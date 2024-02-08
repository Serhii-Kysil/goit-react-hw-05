import { Link } from "react-router-dom";

export const PopularList = ({ popularFilms }) => {
  return (
    <ul>
      {popularFilms.map((film) => (
        <li key={film.id}>
          <Link to={`/movies/${film.id}`}>{film.original_title}</Link>
        </li>
      ))}
    </ul>
  );
};
