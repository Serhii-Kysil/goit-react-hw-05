import { Suspense, useEffect, useState } from "react";
import { useParams, Outlet } from "react-router-dom";
import { getMovieById } from "../Api";
import { ErrorMessage } from "../Components/ErrorMessage/ErrorMessage";
import { Loader } from "../Components/Loader/Loader";
import HomePageBtn from "../Components/HomePageBtn/HomePageBtn";
import { MovieCard } from "../Components/MovieCard/MovieCard";
import { AdditionalInfo } from "../Components/AdditionalInfo/AdditionalInfo";

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchData() {
      try {
        setLoading(true);
        setError(false);
        const fetchedMovie = await getMovieById({
          abortController: controller,
          movieId,
        });
        setMovie(fetchedMovie);
      } catch (error) {
        if (error.code !== "ERR_CANCELED") {
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchData();
    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <div>
      {error && <ErrorMessage />}
      {loading && <Loader />}
      {movie && (
        <div>
          <HomePageBtn />

          <MovieCard movie={movie} />

          <AdditionalInfo />

          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      )}
    </div>
  );
}
