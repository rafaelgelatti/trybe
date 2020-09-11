import React from 'react';
import './App.css';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    return (
      <div className='index-container'>
        <h1>Pokedex</h1>
        <div>
          <Pokemon />
        </div>
      </div>
    )
  }
}

export default Pokedex;