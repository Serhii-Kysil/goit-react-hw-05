import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SearchForm from "../Components/SearchForm/SearchForm";
import { Loader } from "../Components/Loader/Loader";
import { searchMoviesByKeyword } from "../Api";
import { ErrorMessage } from "../Components/ErrorMessage/ErrorMessage";
import { MoviesList } from "../Components/MoviesList/MoviesList";

const MoviesPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const controller = new AbortController();

  const [params, setParams] = useSearchParams();
  const query = params.get("query") ?? "";

  const changeParams = (newParams) => {
    params.set("query", newParams);
    setParams(params);
  };

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (query) {
        setLoading(true);
        try {
          setError(false);
          const response = await searchMoviesByKeyword({
            keyword: query,
            abortController: controller,
          });
          setSearchResults(response);
        } catch (error) {
          if (error.code !== "ERR_CANCELED") {
            setError(true);
          }
        } finally {
          setLoading(false);
        }
      }
    };

    fetchSearchResults();
    return () => {
      controller.abort();
    };
  }, [params]);

  return (
    <div>
      {error && <ErrorMessage />}
      <SearchForm onSearch={changeParams} />
      {loading && <Loader />}
      <MoviesList films={searchResults} />
    </div>
  );
};

export default MoviesPage;
