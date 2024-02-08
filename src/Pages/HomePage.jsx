import { useEffect, useState } from "react";
import { getPopular } from "../Api";
import { PopularList } from "../Components/PopularList/PopularList";

export default function HomePage() {
  const [popularFilms, setPopularFilms] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchPopular() {
      try {
        const fetchedFilms = await getPopular({ abortController: controller });

        setPopularFilms(fetchedFilms);
      } catch (error) {
        if (error.code !== "ERR_CANCELED") {
          setError(true);
        }
      }
    }
    fetchPopular();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div>
      {error && <p>Error</p>}
      {popularFilms.length > 0 && <PopularList popularFilms={popularFilms} />}
    </div>
  );
}
