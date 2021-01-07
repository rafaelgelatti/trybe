import React from 'react';
import { fireEvent } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';
import pokemons from '../data';

const testCaterpie = pokemons[2];

describe('Test the info from pokemon details page', () => {
  it('Should contains <name> details', () => {
    const { history, getByText } = renderWithRouter(<App />);
    const { name, id } = testCaterpie;
    history.push(`/pokemons/${id}`);
    const nameDetails = getByText(`${name} Details`);
    expect(nameDetails).toBeInTheDocument();
  });

  it('Does\'t show details link on details page', () => {
    const { history, getByText } = renderWithRouter(<App />);
    const { name, id } = testCaterpie;
    history.push('/');
    const detailsLink = getByText('More details');
    expect(detailsLink).toBeInTheDocument();
    history.push(`/pokemons/${id}`);
    const nameDetails = getByText(`${name} Details`);
    expect(nameDetails).toBeInTheDocument();
    expect(detailsLink).not.toBeInTheDocument();
  });

  it('Should contain an h2 heading', () => {
    const { history, container } = renderWithRouter(<App />);
    const { id } = testCaterpie;
    history.push(`/pokemons/${id}`);
    const h2Elements = container.querySelectorAll('h2');
    const summaryElement = h2Elements[1];
    expect(summaryElement.textContent).toMatch(/Summary/);
  });

  it('Should contain a paragraph with the poke description', () => {
    const { history, container } = renderWithRouter(<App />);
    const { id } = testCaterpie;
    history.push(`/pokemons/${id}`);
    const pElements = container.querySelectorAll('p');
    const descriptionP = pElements[3];
    const pContent = /For protection/;
    expect(descriptionP.textContent).toMatch(pContent);
  });
});

describe('Test Maps section', () => {
  it('Has h2 with correct text', () => {
    const { history, container } = renderWithRouter(<App />);
    const { id, name } = testCaterpie;
    history.push(`/pokemons/${id}`);
    const h2Elements = container.querySelectorAll('h2');
    const gameh2 = h2Elements[2];
    expect(gameh2).toBeInTheDocument();
    const message = `Game Locations of ${name}`;
    expect(gameh2.textContent).toBe(message);
  });

  it('Locations should be shown in the details section', () => {
    const { history, queryAllByAltText } = renderWithRouter(<App />);
    const { id, foundAt } = testCaterpie;
    history.push(`/pokemons/${id}`);
    const totalImages = foundAt.length;
    const images = queryAllByAltText(/location/);
    expect(totalImages).toEqual(images.length);
    images.forEach((image) => {
      expect(image).toBeInTheDocument();
    });
  });

  it('Should show name and image of the location', () => {
    const { history, queryAllByAltText } = renderWithRouter(<App />);
    const { id, foundAt } = testCaterpie;
    history.push(`/pokemons/${id}`);
    const locations = queryAllByAltText(/location/);
    locations.forEach((location, index) => {
      expect(location).toBeInTheDocument();
      expect(location.nextElementSibling.firstElementChild.textContent)
        .toBe(foundAt[index].location);
    });
  });

  it('Should show correct src of each image', () => {
    const { history, queryAllByAltText } = renderWithRouter(<App />);
    const { id, foundAt } = testCaterpie;
    history.push(`/pokemons/${id}`);
    const locations = queryAllByAltText(/location/);
    locations.forEach((location, index) => {
      expect(location).toHaveAttribute('src', foundAt[index].map);
    });
  });

  it('Should show correct alt of each image', () => {
    const { history, queryAllByAltText } = renderWithRouter(<App />);
    const { id, name } = testCaterpie;
    history.push(`/pokemons/${id}`);
    const locations = queryAllByAltText(/location/);
    locations.forEach((location) => {
      expect(location).toHaveAttribute('alt', `${name} location`);
    });
  });
});

describe('Test favorite button', () => {
  it('Should show favorite checkbox', () => {
    const { history, queryByRole } = renderWithRouter(<App />);
    const { id } = testCaterpie;
    history.push(`/pokemons/${id}`);
    const favCheckbox = queryByRole('checkbox');
    expect(favCheckbox).toBeInTheDocument();
  });

  it('Change state upon clicks', () => {
    const { history, queryByAltText, queryByRole } = renderWithRouter(<App />);
    const { id } = testCaterpie;
    history.push(`/pokemons/${id}`);
    const favCheckbox = queryByRole('checkbox');
    let favStar = queryByAltText(/is marked as favorite/);
    expect(favStar).not.toBeInTheDocument();
    fireEvent.click(favCheckbox);
    favStar = queryByAltText(/is marked as favorite/);
    expect(favStar).toBeInTheDocument();
    fireEvent.click(favCheckbox);
    expect(favStar).not.toBeInTheDocument();
  });

  it('Is associated with the correct label', () => {
    const { history, getByLabelText } = renderWithRouter(<App />);
    const { id } = testCaterpie;
    history.push(`/pokemons/${id}`);
    const favLabel = getByLabelText('Pokémon favoritado?');
    expect(favLabel).toBeInTheDocument();
  });
});
