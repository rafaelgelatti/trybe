import PropTypes from 'prop-types';
import React from 'react';
import '../App.css';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    return (
      <div className="movie-card">
        <img className="movie-card-image" src={this.props.movie.imagePath} alt="movie cover" />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{this.props.movie.title}</h4>
          <h5 className="movie-card-subtitle">{this.props.movie.subtitle}</h5>
          <p className="movie-card-storyline">{this.props.movie.storyline}</p>
          <div className="movie-card-rating">
            <Rating rating={this.props.movie.rating} />
          </div>
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }),
};

MovieCard.defaultProps = {
  movie: {
    title: 'Default',
    subtitle: 'Default',
    storyline: 'Default',
    imagePath: 'Default',
    rating: 0,
  },
};

export default MovieCard;
