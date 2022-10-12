import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
// import Loader from './Loader/Loader';
import Home from 'pages/Home';
import Layout from './Layout/Layout';

const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Review = lazy(() => import('./Reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Review />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
