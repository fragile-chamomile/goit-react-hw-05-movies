import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TrendingMoviesList = ({ movies }) => {
  return (
    <>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.name ?? movie.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

TrendingMoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};

export default TrendingMoviesList;
