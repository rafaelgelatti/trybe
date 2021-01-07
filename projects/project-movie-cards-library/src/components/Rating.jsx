import PropTypes from 'prop-types';
import React from 'react';
import '../App.css';

class Rating extends React.Component {
  render() {
    return (
      <div className="rating">
        {this.props.rating}
      </div>
    );
  }
}

Rating.propTypes = { rating: PropTypes.number };

Rating.defaultProps = { rating: 0 };

export default Rating;
