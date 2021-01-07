import React from 'react';
import { fireEvent } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Default test to render Home', () => {
  it('Gets the correct Header on the URL /', () => {
    const { history, getByText } = renderWithRouter(<App />);
    const { pathname } = history.location;
    expect(pathname).toBe('/');
    const HEADING = getByText(/Pokédex/i);
    expect(HEADING).toBeInTheDocument();
  });
});

describe('Tests navigation Links', () => {
  it('First Link must contain text Home and URL /', () => {
    const { getByText } = renderWithRouter(<App />);
    const LINK_HOME = getByText('Home');
    expect(LINK_HOME).toBeInTheDocument();
    expect(LINK_HOME).toHaveAttribute('href', '/');
  });

  it('Second Link must contain text About and URL /about', () => {
    const { getByText } = renderWithRouter(<App />);
    const LINK_ABOUT = getByText('About');
    expect(LINK_ABOUT).toBeInTheDocument();
    expect(LINK_ABOUT).toHaveAttribute('href', '/about');
  });

  it('Third Link must contain text Favorite Pokémons', () => {
    const { getByText } = renderWithRouter(<App />);
    const LINK_FAVORITES = getByText('Favorite Pokémons');
    expect(LINK_FAVORITES).toBeInTheDocument();
    expect(LINK_FAVORITES).toHaveAttribute('href', '/favorites');
  });
});

describe('Tests if app redirects to the correct route', () => {
  it('To URL / upon Home click', () => {
    const { getByText, history } = renderWithRouter(<App />);
    const LINK_HOME = getByText('Home');
    fireEvent.click(LINK_HOME);
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  it('To URL /about upon About click', () => {
    const { getByText, history } = renderWithRouter(<App />);
    const LINK_ABOUT = getByText('About');
    fireEvent.click(LINK_ABOUT);
    const { pathname } = history.location;
    expect(pathname).toBe('/about');
  });

  it('To the /favorite upon Favorite clicking', () => {
    const { getByText, history } = renderWithRouter(<App />);
    const LINK_FAVORITES = getByText('Favorite Pokémons');
    fireEvent.click(LINK_FAVORITES);
    const { pathname } = history.location;
    expect(pathname).toBe('/favorites');
  });

  it('To Not Found upon entering wrong address', () => {
    const { history, getByText } = renderWithRouter(<App />);
    history.push('/error');
    const ERROR_MESSAGE = getByText('Page requested not found');
    expect(ERROR_MESSAGE).toBeInTheDocument();
  });
});
