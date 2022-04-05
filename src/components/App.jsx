import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Коомпоненты
import Layout from './Layout/Layout';
import Cast from '../components/Cast/Cast';
import Reviews from '../components/Reviews/Reviews';

// Code Splitting (разделение кода)
const HomePage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));

const App = () => {
  return (
    <div>
      <Suspense fallback>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="movies/" element={<MoviesPage />} />
            <Route path="movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to={'/'} />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
