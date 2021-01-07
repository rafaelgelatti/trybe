import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import Pokemon from '../components/Pokemon';
import pokemons from '../data';

const testCaterpie = pokemons[2];

describe('Testing \'Pokemon\' component', () => {
  it('The correct pokemon should show on the screen', () => {
    const { getByTestId, queryByText } = renderWithRouter(
      <Pokemon pokemon={ testCaterpie } isFavorite={ false } />,
    );
    const pokeName = getByTestId('pokemon-name');
    expect(pokeName.textContent).toMatch(/Caterpie/);
    expect(queryByText(/Pikachu/)).not.toBeInTheDocument();
  });

  it('Shows the correct Average Weight', () => {
    const { averageWeight } = testCaterpie;
    const { value, measurementUnit } = averageWeight;
    const { getByTestId, queryByText } = renderWithRouter(
      <Pokemon pokemon={ testCaterpie } isFavorite={ false } />,
    );
    const weightElement = getByTestId('pokemon-weight');
    const weightMessage = queryByText(`Average weight: ${value} ${measurementUnit}`);
    expect(weightElement).toBe(weightMessage);
  });

  it('Shows the correct image', () => {
    const { image, name } = testCaterpie;
    const { getAllByRole } = renderWithRouter(
      <Pokemon pokemon={ testCaterpie } isFavorite={ false } />,
    );
    const imageContainer = getAllByRole('img');
    expect(imageContainer[0]).toBeInTheDocument();
    expect(imageContainer[0]).toHaveAttribute('src', image);
    expect(imageContainer[0]).toHaveAttribute('alt', `${name} sprite`);
  });

  it('Has the correct navigation link', () => {
    const { id } = testCaterpie;
    const { getByRole } = renderWithRouter(
      <Pokemon pokemon={ testCaterpie } isFavorite={ false } />,
    );
    const linkElement = getByRole('link');
    expect(linkElement).toHaveAttribute('href', `/pokemons/${id}`);
  });

  it('Shows the correct page upon details click', async () => {
    const { id } = testCaterpie;
    const { getByRole, history } = renderWithRouter(
      <Pokemon pokemon={ testCaterpie } isFavorite={ false } />,
    );
    expect(history.location.pathname).toBe('/');
    const linkElement = getByRole('link');
    expect(linkElement).toHaveAttribute('href', `/pokemons/${id}`);
    expect(linkElement).toBeInTheDocument();
  });

  it('Takes you to the correct path', () => {
    const { id } = testCaterpie;
    const { getByRole, history } = renderWithRouter(
      <Pokemon pokemon={ testCaterpie } isFavorite={ false } />,
    );
    expect(history.location.pathname).toBe('/');
    const linkElement = getByRole('link', { href: `/pokemons/${id}` });
    expect(linkElement).toBeInTheDocument();
    fireEvent.click(linkElement);
    expect(history.location.pathname).toBe(`/pokemons/${id}`);
  });

  it('Has a star if pokemon is favorited', () => {
    const { getAllByRole } = renderWithRouter(
      <Pokemon pokemon={ testCaterpie } isFavorite />,
    );
    const images = getAllByRole('img');
    expect(images[1]).toBeInTheDocument();
  });

  it('Has the correct source', () => {
    const { getAllByRole } = renderWithRouter(
      <Pokemon pokemon={ testCaterpie } isFavorite />,
    );
    const images = getAllByRole('img');
    expect(images[1]).toHaveAttribute('src', '/star-icon.svg');
  });

  it('Has the correct alt attribute', () => {
    const { name } = testCaterpie;
    const { getAllByRole } = renderWithRouter(
      <Pokemon pokemon={ testCaterpie } isFavorite />,
    );
    const images = getAllByRole('img');
    expect(images[1]).toHaveAttribute('alt', `${name} is marked as favorite`);
  });
});
