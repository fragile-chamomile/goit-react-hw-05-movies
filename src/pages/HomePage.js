import React, { useState, useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import * as Movies from '../services/movies-api';
import TrendingMoviesList from '../components/TrendingMoviesList/TrendingMoviesList';

const HomePage = () => {
  const [movies, setMovies] = useState();
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');

    Movies.trendingMovies()
      .then(({ results }) => {
        setMovies([...results]);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, []);

  // рендеринг
  if (status === 'idle') {
    return (
      <>
        <main>
          <h2>Trending today</h2>
        </main>
      </>
    );
  }

  if (status === 'pending') {
    return (
      <>
        <main>
          <h2>Trending today</h2>
          <div style={{ margin: '50px auto 0', width: '100px' }}>
            <ThreeDots color="#ff0000" />
          </div>
        </main>
      </>
    );
  }

  if (status === 'rejected') {
    return <div>Error: {error.message}</div>;
  }

  if (status === 'resolved') {
    return (
      <main>
        <h2>Trending today</h2>
        <TrendingMoviesList movies={movies} />
      </main>
    );
  }
};

export default HomePage;
