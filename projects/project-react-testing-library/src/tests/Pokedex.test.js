import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import pokemons from '../data';

describe('Testing POKEDEX page if', () => {
  it('NEXT POKEMON button exists', () => {
    const { getByTestId } = renderWithRouter(<App />);
    const NEXT_POKEMON_BUTTON = getByTestId('next-pokemon');
    expect(NEXT_POKEMON_BUTTON).toBeInTheDocument();
  });

  it('Has expected text', () => {
    const { getByText } = renderWithRouter(<App />);
    const NEXT_POKEMON_TEXT = getByText('Próximo pokémon');
    expect(NEXT_POKEMON_TEXT).toBeInTheDocument();
  });

  it('Changes pokemon when clicked', () => {
    const { queryByText, getByTestId, history } = renderWithRouter(<App />);
    history.push('/');
    const NEXT_POKEMON_BUTTON = getByTestId('next-pokemon');
    const POKEMONS_NAMES = pokemons.map((pokemon) => pokemon.name);
    POKEMONS_NAMES.forEach((pokemon, index) => {
      const NAME = queryByText(pokemon);
      expect(NAME).toBeInTheDocument();
      fireEvent.click(NEXT_POKEMON_BUTTON);
      const NAME_AFTER_CLICK = queryByText(POKEMONS_NAMES[index]);
      expect(NAME_AFTER_CLICK).not.toBeInTheDocument();
    });
  });

  it('Loops between pokemons when the list ends', () => {
    const { getByTestId, history } = renderWithRouter(<App />);
    history.push('/');
    const FIRST_POKEMON = pokemons[0].name;
    const NEXT_POKEMON_BUTTON = getByTestId('next-pokemon');
    pokemons.forEach(() => {
      fireEvent.click(NEXT_POKEMON_BUTTON);
    });
    const SELECTED_POKEMON = getByTestId('pokemon-name');
    expect(SELECTED_POKEMON.innerHTML).toBe(FIRST_POKEMON);
  });

  it('Only shows one pokemon at a time', () => {
    const { history, getAllByTestId } = renderWithRouter(<App />);
    history.push('/');
    const SELECTED_POKEMON = getAllByTestId('pokemon-name');
    const ONE = 1;
    expect(SELECTED_POKEMON.length).toBe(ONE);
  });

  it('Only shows pokemons of the selected type', () => {
    const {
      history,
      getAllByTestId,
      getByTestId,
      queryByText,
    } = renderWithRouter(<App />);
    history.push('/');
    const TYPE_BUTTONS = getAllByTestId('pokemon-type-button');
    const FIRE_BUTTON = TYPE_BUTTONS[1];
    fireEvent.click(FIRE_BUTTON);
    expect(queryByText('Charmander')).toBeInTheDocument();
    const NEXT_POKEMON_BUTTON = getByTestId('next-pokemon');
    fireEvent.click(NEXT_POKEMON_BUTTON);
    expect(queryByText('Charmander')).not.toBeInTheDocument();
    expect(queryByText('Rapidash')).toBeInTheDocument();
    history.push('/');
    const FIRST_OF_EACH_TYPE = [
      'Pikachu',
      'Charmander',
      'Caterpie',
      'Ekans',
      'Alakazam',
      'Snorlax',
      'Dragonair',
    ];
    FIRST_OF_EACH_TYPE.forEach((pokemon, index) => {
      fireEvent.click(TYPE_BUTTONS[index]);
      expect(queryByText(pokemon)).toBeInTheDocument();
    });
    const LIST_OF_TYPES = [];
    TYPE_BUTTONS.forEach((type) => {
      LIST_OF_TYPES.push(type.innerHTML);
    });
    LIST_OF_TYPES.forEach((type, index) => {
      expect(TYPE_BUTTONS[index].innerHTML).toBe(type);
    });
  });

  it('Has a reset filters button', () => {
    const { history, getAllByRole, getByTestId } = renderWithRouter(<App />);
    history.push('/');
    const BUTTONS = getAllByRole('button');
    const ALL_BUTTON = BUTTONS[0];
    expect(ALL_BUTTON.innerHTML).toBe('All');
    fireEvent.click(ALL_BUTTON);
    const NEXT_POKEMON_BUTTON = getByTestId('next-pokemon');
    pokemons.forEach(() => {
      fireEvent.click(NEXT_POKEMON_BUTTON);
    });
    expect(getByTestId('pokemon-name').innerHTML).toBe('Pikachu');
  });

  it('Default filter is \'All\'', () => {
    const { history, getByTestId } = renderWithRouter(<App />);
    history.push('/');
    const NEXT_POKEMON_BUTTON = getByTestId('next-pokemon');
    pokemons.forEach(() => {
      fireEvent.click(NEXT_POKEMON_BUTTON);
    });
    expect(getByTestId('pokemon-name').innerHTML).toBe('Pikachu');
  });

  it('Type buttons should be created dynamically', () => {
    const { history,
      getAllByRole,
      queryAllByTestId,
      getByTestId,
    } = renderWithRouter(<App />);
    history.push('/');
    const BUTTONS = getAllByRole('button');
    const ALL_BUTTON = BUTTONS[0];
    expect(ALL_BUTTON.textContent).toBe('All');
    const TYPE_BUTTONS = queryAllByTestId('pokemon-type-button');
    const TYPES = [
      'Electric',
      'Fire',
      'Bug',
      'Poison',
      'Psychic',
      'Normal',
      'Dragon',
    ];
    TYPE_BUTTONS.forEach((type, index) => {
      expect(type.textContent).toBe(TYPES[index]);
    });
    const NEXT_POKEMON_BUTTON = getByTestId('next-pokemon');
    fireEvent.click(NEXT_POKEMON_BUTTON);
    TYPE_BUTTONS.forEach((type, index) => {
      expect(type.textContent).toBe(TYPES[index]);
    });
  });

  it('\'All\' button should appear at all times', () => {
    const { history, queryAllByTestId, queryAllByRole } = renderWithRouter(<App />);
    history.push('/');
    const TYPE_BUTTONS = queryAllByTestId('pokemon-type-button');
    TYPE_BUTTONS.forEach((button) => {
      fireEvent.click(button);
      expect(queryAllByRole('button')[0]).toBeInTheDocument();
      expect(queryAllByRole('button')[0].textContent).toBe('All');
    });
  });

  it('\'Next Pokemon\' button disabled if only one is available', () => {
    const { history, queryAllByTestId, queryByTestId } = renderWithRouter(<App />);
    history.push('/');
    const TYPE_BUTTONS = queryAllByTestId('pokemon-type-button');
    const NEXT_POKEMON_BUTTON = queryByTestId('next-pokemon');
    TYPE_BUTTONS.forEach((button) => {
      fireEvent.click(button);
      if (button.textContent === 'Fire' || button.textContent === 'Psychic') {
        expect(NEXT_POKEMON_BUTTON).not.toBeDisabled();
      } else {
        expect(NEXT_POKEMON_BUTTON).toBeDisabled();
      }
    });
  });

  it('Encounter Pokémons', () => {
    const { history, container } = renderWithRouter(<App />);
    history.push('/');
    const H2_ELEMENT = container.querySelector('h2');
    const MESSAGE = 'Encountered pokémons';
    expect(H2_ELEMENT).toBeInTheDocument();
    expect(H2_ELEMENT.textContent).toBe(MESSAGE);
  });
});
