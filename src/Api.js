import axios from "axios";

const popularUrl =
  "https://api.themoviedb.org/3/trending/movie/day?language=en-US";

export const getPopular = async ({ abortController }) => {
  const response = await axios.get(popularUrl, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzFkYzIxMmU5YTQ3MTE1YjMwZWRkM2RmMDgyNTM2MCIsInN1YiI6IjY1YzQwN2M4NzA2YjlmMDE3ZDJkNGRmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9VC-s9dnO0bUB9BPpss1H3XXJtjEBTVo17HOPZThY20",
    },
    signal: abortController.signal,
  });
  return response.data.results;
};

export const getMovieById = async ({ movieId, abortController }) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzFkYzIxMmU5YTQ3MTE1YjMwZWRkM2RmMDgyNTM2MCIsInN1YiI6IjY1YzQwN2M4NzA2YjlmMDE3ZDJkNGRmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9VC-s9dnO0bUB9BPpss1H3XXJtjEBTVo17HOPZThY20",
      },
      signal: abortController.signal,
    }
  );
  return response.data;
};
export const getMovieCast = async ({ movieId, abortController }) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzFkYzIxMmU5YTQ3MTE1YjMwZWRkM2RmMDgyNTM2MCIsInN1YiI6IjY1YzQwN2M4NzA2YjlmMDE3ZDJkNGRmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9VC-s9dnO0bUB9BPpss1H3XXJtjEBTVo17HOPZThY20",
      },
      signal: abortController.signal,
    }
  );
  return response.data.cast;
};

export const getMovieReviews = async ({ movieId, abortController }) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzFkYzIxMmU5YTQ3MTE1YjMwZWRkM2RmMDgyNTM2MCIsInN1YiI6IjY1YzQwN2M4NzA2YjlmMDE3ZDJkNGRmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9VC-s9dnO0bUB9BPpss1H3XXJtjEBTVo17HOPZThY20",
      },
      signal: abortController.signal,
    }
  );
  return response.data.results;
};

export const searchMoviesByKeyword = async ({ keyword, abortController }) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${keyword}`,
    {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzFkYzIxMmU5YTQ3MTE1YjMwZWRkM2RmMDgyNTM2MCIsInN1YiI6IjY1YzQwN2M4NzA2YjlmMDE3ZDJkNGRmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9VC-s9dnO0bUB9BPpss1H3XXJtjEBTVo17HOPZThY20",
      },
      signal: abortController.signal,
    }
  );
  return response.data.results;
};
