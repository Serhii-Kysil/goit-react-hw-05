import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import MoviesPage from "../Pages/MoviesPage";
import MovieDetailsPage from "../Pages/MovieDetailsPage";
import NotFoundPage from "../Pages/NotFoundPage";
import NavBar from "./NavBar/NavBar";
import Cast from "./Cast";
import Reviews from "./Reviews";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Toaster position="top-right" />
    </div>
  );
}
export default App;

// useEffect(() => {
//   async function fetchPopular() {
//     try {
//       const popularFilms = await getPopular();
//     } catch (error) {}
//   }
//   fetchPopular();
// }, []);
