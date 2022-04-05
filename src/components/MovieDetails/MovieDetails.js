import { Link, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Img, Wrapper } from './MovieDetails.styled';

const MovieDetails = ({ movies }) => {
  return (
    <>
      {movies &&
        movies.map(movie => (
          <div key={movie.id}>
            <Wrapper>
              {movie.poster_path ? (
                <Img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.title}
                />
              ) : (
                <Img
                  src={`https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1388589739i/7879599._SY540_.jpg`}
                  alt="no poster"
                  width="300"
                />
              )}
              <div>
                <h2>
                  {movie.name ?? movie.title} ({movie.release_date.slice(0, 4)})
                </h2>
                <p>User Score: {movie.vote_average}</p>
                <h3>Overview</h3>
                {movie.overview ? (
                  <p>{movie.overview}</p>
                ) : (
                  <p>No description</p>
                )}
                <h3>Genderes</h3>
                <p>{movie.genres.map(genre => genre.name).join(', ')}</p>
              </div>
            </Wrapper>
            <hr />
            <ul key={movie.id}>
              Additional information
              <li>
                <Link to={`/movies/${movie.id}/cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`/movies/${movie.id}/reviews`}>Reviews</Link>
              </li>
            </ul>
            <hr />
            <Outlet />
          </div>
        ))}
    </>
  );
};

MovieDetails.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string,
      title: PropTypes.string,
      poster_path: PropTypes.string,
      vote_average: PropTypes.number,
      overview: PropTypes.string,
      genres: PropTypes.array,
    })
  ),
};

export default MovieDetails;
