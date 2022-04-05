import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThreeDots } from 'react-loader-spinner';
import * as Movies from '../services/movies-api';

// Коомпоненты
import SearchForm from '../components/SearchForm/SearchForm';
import SearchMoviesList from '../components/SearchMoviesList/SearchMoviesList';

const MoviesPage = () => {
  const [searchMovie, setSearchMovie] = useState('');
  const [movies, setMovies] = useState();
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    if (!searchMovie) {
      return;
    }

    setStatus('pending');

    Movies.searchMovies(searchMovie)
      .then(({ results }) => {
        if (results.length === 0) {
          toast.warning('Sorry. Nothing found!', { theme: 'colored' });
          setStatus('idle');
          return;
        }

        setMovies([...results]);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [searchMovie]);

  // Поиск картинки
  const handleSearchFormSubmit = value => {
    setSearchMovie(value);
    setStatus('pending');
  };

  // рендеринг
  if (status === 'idle') {
    return (
      <>
        <main>
          <SearchForm onSubmit={handleSearchFormSubmit} />
          <ToastContainer autoClose={2000} />
        </main>
      </>
    );
  }

  if (status === 'pending') {
    return (
      <>
        <main>
          <SearchForm onSubmit={handleSearchFormSubmit} />
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
        <SearchForm onSubmit={handleSearchFormSubmit} />
        <SearchMoviesList movies={movies} />
      </main>
    );
  }
};

export default MoviesPage;
