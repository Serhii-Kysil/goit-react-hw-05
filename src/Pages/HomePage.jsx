import { useEffect, useState } from "react";
import { getPopular } from "../Api";
import { PopularList } from "../Components/PopularList/PopularList";
import { ErrorMessage } from "../Components/ErrorMessage/ErrorMessage";
import { Loader } from "../Components/Loader/Loader";

export default function HomePage() {
  const [popularFilms, setPopularFilms] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchPopular() {
      try {
        setLoading(true);
        setError(false);
        const fetchedFilms = await getPopular({
          abortController: controller,
        });
        setPopularFilms(fetchedFilms);
      } catch (error) {
        if (error.code !== "ERR_CANCELED") {
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchPopular();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      {error && <ErrorMessage />}
      {loading && <Loader />}
      {popularFilms.length > 0 && <PopularList popularFilms={popularFilms} />}
    </div>
  );
}
