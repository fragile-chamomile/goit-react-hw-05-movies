import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as Movies from '../../services/movies-api';
import { ThreeDots } from 'react-loader-spinner';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('idle');

  useEffect(() => {
    setStatus('pending');

    Movies.movieReviews(movieId)
      .then(({ results }) => {
        setReviews([...results]);
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
        {reviews.length > 0 ? (
          reviews.map(review => (
            <ul>
              <li key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
              </li>
            </ul>
          ))
        ) : (
          <p>Be the first. Leave your feedback</p>
        )}
      </main>
    );
  }
};

export default Reviews;
