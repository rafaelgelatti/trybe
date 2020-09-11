import React from 'react';
import pokemons from './data';

class Pokemon extends React.Component {
  render() {
    return (
      <div className='pokemon-items'>
      {pokemons.map((pokemon) =>
      <div className='pokemon-container'>
        <div className='info-container'>
          <h2>{pokemon.name}</h2>
          <p>Type: {pokemon.type}</p>
          <p>Average weight: {pokemon.averageWeight.value}{pokemon.averageWeight.measurementUnit}</p>
        </div>
        <div className='img-container'>
          <img src={pokemon.image} alt='pokemon'></img>
        </div>
      </div>
      )}
      </div>
    );
  }
}

export default Pokemon;
