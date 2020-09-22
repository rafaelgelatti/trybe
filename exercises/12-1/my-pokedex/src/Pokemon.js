import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { id, name, type, image } = this.props.pokemon;
    const { value, measurementUnit } = this.props.pokemon.averageWeight;
    return (
      <div className='pokemon-items'>
        <div key={id} className='pokemon-container'>
          <div className='info-container'>
            <h2>{name}</h2>
            <p>Type: {type}</p>
            <p>Average weight: {value}{measurementUnit}</p>
          </div>
          <div className='img-container'>
            <img src={image} alt='pokemon'></img>
          </div>
        </div>
      </div>
    );
  }
}

export default Pokemon;
