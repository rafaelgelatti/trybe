import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import FavoritePokemons from '../components/FavoritePokemons';
import pokemons from '../data';
import App from '../App';

describe('Testes sobre a pagina dos favoritos', () => {
  it('Caso não tenha pokemon favorito, aparece mensagem na tela', () => {
    const EMPTY_ARR = [];
    const { getByText } = renderWithRouter(<FavoritePokemons pokemons={ EMPTY_ARR } />);
    const EMPTY_MESSAGE = getByText('No favorite pokemon found');
    expect(EMPTY_MESSAGE).toBeInTheDocument();
  });

  it('Dado um array de favoritos, imprime todos', () => {
    const { getAllByTestId } = renderWithRouter(
      <FavoritePokemons pokemons={ pokemons } />,
    );
    const FAV_POKEMONS = getAllByTestId('pokemon-name');
    expect(FAV_POKEMONS.length).toBe(pokemons.length);
  });

  it('Testa se ao adicionar aos favoritos, o pokemon aparece', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/pokemons/10');
    const FAV_CHECKBOX = screen.getByRole('checkbox');
    fireEvent.click(FAV_CHECKBOX);
    // toHaveAttribute retorna null, por isso .checked -> toBe()
    expect(FAV_CHECKBOX.checked).toBe(true);
    const CATERPIE = screen.queryByText('Caterpie');
    expect(CATERPIE).toBeInTheDocument();
  });

  it('Não retorna pokemon não favoritado', () => {
    const { history } = renderWithRouter(<App />);
    history.push('/pokemons/25');
    const FAV_CHECKBOX = screen.getByRole('checkbox');
    expect(FAV_CHECKBOX.checked).toBe(false);
    history.push('/favorites');
    // getByText não funciona caso não exista
    const PIKACHU = screen.queryByText('Pikachu');
    expect(PIKACHU).not.toBeInTheDocument();
  });
});
