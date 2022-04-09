import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as Movies from '../../services/movies-api';
import { ThreeDots } from 'react-loader-spinner';
import { List } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');

    Movies.movieCredits(movieId)
      .then(({ cast }) => {
        setActors([...cast]);
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
        <List>
          {actors.length > 0 ? (
            actors.map(actor => (
              <li key={actor.cast_id}>
                {actor.profile_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                    alt={actor.name}
                    width="100"
                  />
                ) : (
                  <img
                    src={`https://static6.depositphotos.com/1055089/612/v/600/depositphotos_6126788-stock-illustration-big-question-mark-made-from.jpg`}
                    alt="nothing"
                    width="100"
                    height="135"
                  />
                )}
                <p>{actor.name}</p>
                <p>Character: {actor.character}</p>
              </li>
            ))
          ) : (
            <p>No cast</p>
          )}
        </List>
      </main>
    );
  }
};

export default Cast;
