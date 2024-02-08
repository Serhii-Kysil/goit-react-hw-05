import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import SearchForm from "../Components/SearchForm/SearchForm";
import { Loader } from "../Components/Loader/Loader";
import { SearchList } from "../Components/SearchList/SearchList";
import { searchMoviesByKeyword } from "../Api";
import { ErrorMessage } from "../Components/ErrorMessage/ErrorMessage";

const MoviesPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const [error, setError] = useState(false);
  const controller = new AbortController();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("query");

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
  }, [location.search]);

  const handleSearchResult = (results) => {
    setSearchResults(results);
    setLoading(false);
  };

  return (
    <div>
      {error && <ErrorMessage />}
      <SearchForm onSubmit={handleSearchResult} />
      {loading && <Loader />}
      <SearchList searchResults={searchResults} />
    </div>
  );
};

export default MoviesPage;
