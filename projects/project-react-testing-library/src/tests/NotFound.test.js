import React from 'react';
// import { fireEvent, screen, history } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('Testing NOT FOUND page', () => {
  it('Contains the NOT FOUND message', () => {
    const { container, history } = renderWithRouter(<App />);
    history.push('/error');
    const H2_ELEMENT = container.querySelector('h2');
    const EMOJI = '<span role="img" aria-label="Crying emoji"> 😭 </span>';
    const NOT_FOUND_MESSAGE = `Page requested not found${EMOJI}`;
    expect(H2_ELEMENT.innerHTML).toMatch(NOT_FOUND_MESSAGE);
  });

  it('Contains NOT FOUND image', () => {
    const { container, history } = renderWithRouter(<App />);
    history.push('/error');
    const IMAGE = container.querySelector('img');
    expect(IMAGE).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
