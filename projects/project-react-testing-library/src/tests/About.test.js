import React from 'react';
import renderWithRouter from '../renderWithRouter';
import About from '../components/About';

describe('About page tests', () => {
  it('Contains info about the page', () => {
    const { getByText } = renderWithRouter(<About />);
    const HEADER = getByText('About Pokédex');
    expect(HEADER).toBeInTheDocument();
  });

  it('Contains an h2 with the message \'About Pokédex\'', () => {
    const { container } = renderWithRouter(<About />);
    const H2_ELEMENT = container.querySelector('h2');
    expect(H2_ELEMENT).toBeInTheDocument();
    expect(H2_ELEMENT.innerHTML).toBe('About Pokédex');
  });

  it('Contains two paragraphs', () => {
    const { container } = renderWithRouter(<About />);
    const P_ELEMENTS = container.querySelectorAll('p');
    const P_ARR_LENGTH = 2;
    expect(P_ELEMENTS.length).toBe(P_ARR_LENGTH);
  });

  it('Contains the correct image source', () => {
    const { container } = renderWithRouter(<About />);
    const image = container.querySelector('img');
    expect(image).toHaveAttribute(
      'src',
      'https://cdn.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png',
    );
  });
});
