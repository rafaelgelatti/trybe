import React from 'react';
import './App.css';
import Pokemon from './Pokemon';
import pokemons from './data';

class Pokedex extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleTypeAll = this.handleTypeAll.bind(this);
    this.handleTypeElectric = this.handleTypeElectric.bind(this);
    this.handleTypeFire = this.handleTypeFire.bind(this);
    this.handleTypeBug = this.handleTypeBug.bind(this);
    this.handleTypePoison = this.handleTypePoison.bind(this);
    this.handleTypePsychic = this.handleTypePsychic.bind(this);
    this.handleTypeNormal = this.handleTypeNormal.bind(this);
    this.handleTypeDragon = this.handleTypeDragon.bind(this);
    this.state = {
      currentCard: 0,
      currentType: 'all',
      isDisabled: false,
    }
  }

  // checkIfDisabled() {
  //   if (this.filterPokemons().length > 1) {
  //     this.setState({ isDisabled: false });
  //   } else {
  //     this.setState({ isDisabled: true });
  //   }
  // }

  filterPokemons() {
    if (this.state.currentType !== 'all') {
      return pokemons.filter((pokemon) => pokemon.type === this.state.currentType);
    } else {
      return pokemons;
    }
  }

  handleTypeAll() {
    this.setState({ isDisabled: false })
    this.setState(() => ({
      currentType: 'all',
    }));
  }

  handleTypeElectric() {
    this.setState({ isDisabled: true })
    this.setState(() => ({
      currentCard: 0,
      currentType: 'Electric',
    }));
  }

  handleTypeFire() {
    this.setState({ isDisabled: false })
    this.setState(() => ({
      currentCard: 0,
      currentType: 'Fire',
    }));
  }

  handleTypeBug() {
    this.setState({ isDisabled: true })
    this.setState(() => ({
      currentCard: 0,
      currentType: 'Bug',
    }));
  }

  handleTypePoison() {
    this.setState({ isDisabled: true })
    this.setState(() => ({
      currentCard: 0,
      currentType: 'Poison',
    }));
  }

  handleTypePsychic() {
    this.setState({ isDisabled: false })
    this.setState(() => ({
      currentCard: 0,
      currentType: 'Psychic',
    }));
  }

  handleTypeNormal() {
    this.setState({ isDisabled: true })
    this.setState(() => ({
      currentCard: 0,
      currentType: 'Normal',
    }));
  }

  handleTypeDragon() {
    this.setState({ isDisabled: true })
    this.setState(() => ({
      currentCard: 0,
      currentType: 'Dragon',
    }));
  }

  handleClick() {
    const pokemonsByType = this.filterPokemons();
    if (this.state.currentCard === pokemonsByType.length - 1) {
      this.setState(() => ({
        currentCard: 0,
      }));
    } else {
      this.setState((previousPokemon) => ({
        currentCard: previousPokemon.currentCard + 1,
      }));
    }
  }

  render() {
    const pokemonsByType = this.filterPokemons();
    return (
      <div className='index-container'>
        <h1>Pokedex</h1>
        <button className='next-pokemon-button' disabled={this.state.isDisabled} onClick={this.handleClick}>Next Pokemon</button>
        <div>
          <button className='all-button' onClick={this.handleTypeAll}>All</button>
          <button className='electric-button' onClick={this.handleTypeElectric}>Electric</button>
          <button className='fire-button' onClick={this.handleTypeFire}>Fire</button>
          <button className='bug-button' onClick={this.handleTypeBug}>Bug</button>
          <button className='poison-button' onClick={this.handleTypePoison}>Poison</button>
          <button className='psychic-button' onClick={this.handleTypePsychic}>Psychic</button>
          <button className='normal-button' onClick={this.handleTypeNormal}>Normal</button>
          <button className='dragon-button' onClick={this.handleTypeDragon}>Dragon</button>
        </div>
        <div>
          <Pokemon pokemon={pokemonsByType[this.state.currentCard]} />
        </div>
      </div>
    )
  }
}

export default Pokedex;
