import { useState } from "react";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import toast from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import css from "./SearchForm.module.css";
import { searchMoviesByKeyword } from "../../Api";

const SearchForm = ({ onSubmit }) => {
  const [keyword, setKeyword] = useState("");
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const controller = new AbortController();

  const handleSearch = async (e) => {
    e.preventDefault();
    if (keyword.trim() === "") {
      toast.error("EMPTY STRING!");
      return;
    }
    searchParams.set("query", keyword);
    setSearchParams(searchParams);
    try {
      const response = await searchMoviesByKeyword({
        keyword,
        abortController: controller,
      });
      onSubmit(response);
      setKeyword("");
    } catch (error) {
      setError(true);
    }
    return () => {
      controller.abort();
    };
  };

  return (
    <>
      {error && <ErrorMessage />}
      <form onSubmit={handleSearch} className={css.form}>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Enter keyword"
          className={css.input}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default SearchForm;
