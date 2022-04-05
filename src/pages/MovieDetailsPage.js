import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as Movies from '../services/movies-api';
import { ThreeDots } from 'react-loader-spinner';

// компоненты
import MovieDetails from '../components/MovieDetails/MovieDetails';

function MovieDetailspage(results) {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');

    Movies.movieDetails(movieId)
      .then(result => {
        setMovies([result]);
        setStatus('resolved');
      })
      .catch(error => {
        setError(error);
        setStatus('rejected');
      });
  }, [movieId]);

  // рендеринг
  if (status === 'idle') {
    return <main></main>;
  }

  if (status === 'pending') {
    return (
      <>
        <main>
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
        <button onClick={() => navigate(-1)}>Go back</button>
        <MovieDetails movies={movies} />
      </main>
    );
  }
}

export default MovieDetailspage;
