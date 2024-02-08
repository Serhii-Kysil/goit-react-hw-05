import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../Api";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import { Loader } from "../Loader/Loader";
import css from "./Reviews.module.css";

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [empty, setEmpty] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await getMovieReviews({
          movieId,
          abortController: controller,
        });
        if (response.length > 0) {
          setReviews(response);
          setEmpty(false);
        } else {
          setEmpty(true);
        }
      } catch (error) {
        if (error.code !== "ERR_CANCELED") {
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    return () => {
      controller.abort();
    };
  }, [movieId]);

  return (
    <div className={css.cont}>
      {error && <ErrorMessage />}
      {loading && <Loader />}
      <ul className={css.list}>
        {reviews.map((review) => (
          <li key={review.id} className={css.listItem}>
            <p className={css.author}>Author: {review.author}</p>
            <p className={css.content}>{review.content}</p>
          </li>
        ))}
      </ul>
      {empty && <p>We dont have any reviews for this movie.</p>}
    </div>
  );
};

export default Reviews;
