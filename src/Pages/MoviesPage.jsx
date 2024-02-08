import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { searchMoviesByKeyword } from "../Api";

const MoviesPage = () => {
  const [keyword, setKeyword] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (e.target.elements.query.value.trim() === "") {
      toast.error("EMPTY STRING!");
      return;
    }
    try {
      const response = await searchMoviesByKeyword({ keyword });
      setSearchResults(response);
    } catch (error) {
      console.error("Error searching movies:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          name="query"
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Enter keyword"
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {searchResults.map((movie) => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;
