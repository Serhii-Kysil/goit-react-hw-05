import css from "./MovieCard.module.css";

export const MovieCard = ({ movie }) => {
  return (
    <div className={css.card}>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt="Movie backdrop"
        className={css.img}
      />

      <div className={css.descBlock}>
        <p className={css.title}>
          {movie.title} ({movie.release_date.slice(0, 4)})
        </p>
        <p>Movie Popularity: {movie.popularity.toFixed(1)}%</p>
        <p className={css.overview}>Overview</p>
        <p>{movie.overview}</p>
        <p className={css.gerres}>Genres</p>
        <p>{movie.genres.map((item) => item.name).join(", ")}</p>
      </div>
    </div>
  );
};
