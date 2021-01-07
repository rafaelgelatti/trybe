import PropTypes from 'prop-types';
import React from 'react';
import MovieCard from './MovieCard';
import '../App.css';

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies;
    return (
      <div className="movie-list">
        {movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)}
      </div>
    );
  }
}

MovieList.propTypes = { movies: PropTypes.shape({ title: PropTypes.string.isRequired }) };

MovieList.defaultProps = {
  movies: {
    title: 'Default',
    subtitle: 'Default',
    storyline: 'Default',
    imagePath: 'Default',
    rating: 0,
  },
};

export default MovieList;
