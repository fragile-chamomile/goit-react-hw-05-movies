import React, { useState, useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThreeDots } from 'react-loader-spinner';
import * as Movies from '../services/movies-api';

// Коомпоненты
import SearchForm from '../components/SearchForm/SearchForm';
import SearchMoviesList from '../components/SearchMoviesList/SearchMoviesList';

const MoviesPage = () => {
  const [movies, setMovies] = useState();
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    if (location.search === '') {
      return;
    }

    setStatus('pending');

    Movies.searchMovies(searchParams.get('query'))
      .then(({ results }) => {
        if (!results) {
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
  }, [location.search, searchParams]);

  // Поиск картинки
  const handleSearchFormSubmit = event => {
    setSearchParams(`query=${event}`);
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
