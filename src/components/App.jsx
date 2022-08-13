import { lazy, Suspense } from "react";
import { Routes, Route, Navigate, NavLink } from "react-router-dom";

const TrendingsMovies = lazy(() => import("./Trendings/TrendingsMovies"));
const MovieDetails = lazy(() => import("./MovieDetails/MovieDetails"));
const MovieCast = lazy(() => import("./MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("./MovieReviews/MovieReviews"));
const SearchMovies = lazy(() => import("./SearchMovies/SearchMovies"));

export const App = () => {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<TrendingsMovies />} />
        <Route path="/movies" element={<SearchMovies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};
