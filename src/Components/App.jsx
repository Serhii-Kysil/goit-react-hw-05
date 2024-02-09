import { Suspense, lazy } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Loader } from "./Loader/Loader";

const HomePage = lazy(() => import("../Pages/HomePage"));
const MoviesPage = lazy(() => import("../Pages/MoviesPage"));
const MovieDetailsPage = lazy(() => import("../Pages/MovieDetailsPage"));
const NotFoundPage = lazy(() => import("../Pages/NotFoundPage"));
const NavBar = lazy(() => import("./NavBar/NavBar"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));

function App() {
  return (
    <div>
      <NavBar />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
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
