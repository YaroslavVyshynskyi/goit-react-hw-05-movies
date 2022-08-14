import { lazy, Suspense } from "react";
import { Routes, Route, Navigate, NavLink } from "react-router-dom";
import styled from "styled-components";

const TrendingsMovies = lazy(() => import("./Trendings/TrendingsMovies"));
const MovieDetails = lazy(() => import("./MovieDetails/MovieDetails"));
const MovieCast = lazy(() => import("./MovieCast/MovieCast"));
const MovieReviews = lazy(() => import("./MovieReviews/MovieReviews"));
const SearchMovies = lazy(() => import("./SearchMovies/SearchMovies"));

const StyledLink = styled(NavLink)`
  color: black;
  display: block;
  margin-right: 15px;

  &.active {
    color: red;
  }
`;

export const App = () => {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
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
