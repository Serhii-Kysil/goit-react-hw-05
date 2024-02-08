import { useEffect, useState } from "react";
import { useParams, Link, Outlet } from "react-router-dom";
import { getMovieById } from "../Api";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchData() {
      try {
        const fetchedMovie = await getMovieById({
          abortController: controller,
          movieId,
        });
        setMovie(fetchedMovie);
      } catch (error) {
        if (error.code !== "ERR_CANCELED") {
          setError(true);
        }
      }
    }
    fetchData();
    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <div>
      {error && <p>Error</p>}
      {movie && (
        <div>
          <Link to="/">Back to home page</Link>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt="Movie backdrop"
          />
          <div>
            <p>
              {movie.title}({movie.release_date.slice(0, 4)})
            </p>
            <p>Movie Popularity: {movie.popularity.toFixed(1)}%</p>
            <p>Overview</p>
            <p>{movie.overview}</p>
            <p>Genres</p>
            <p>{movie.genres.map((item) => item.name).join(", ")}</p>
          </div>
          <div>
            <Link to="cast">Cast</Link>
            <Link to="reviews">Reviews</Link>
          </div>
          <Outlet movieId={movieId} />
        </div>
      )}
    </div>
  );
}
