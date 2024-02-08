import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "../Api";

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMovieCast({ movieId });
        setActors(response);
      } catch (error) {
        console.error("Error fetching movie cast:", error);
      }
    };

    fetchData();
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {actors.map((actor) => (
          <li key={actor.id}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                alt="Actor photo"
                width={0}
                height={100}
              />
              <p>{actor.name}</p>
              <p>Character:{actor.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
