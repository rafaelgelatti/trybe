import renderWithRedux from './renderWithRedux';
import { cleanup, fireEvent, screen } from '@testing-library/react';
import App from './App';

describe('testing clicks', () => {
  beforeEach(cleanup);
  it('the page should have a button and a text 0', () => {
    renderWithRedux(<App />);
    const addButton = screen.queryByText('click here');

    expect(addButton).toBeInTheDocument();
    expect(screen.queryByText('0')).toBeInTheDocument();
  });

  it('test giving a different initial value', () => {
    renderWithRedux(<App />, { initialSate: { clickReducer: { counter: 5 }}});

    expect(screen.queryByText('5')).toBeInTheDocument();
  });

  it('test new initial state and click after', () => {
    renderWithRedux(<App />, { initialSate: { clickReducer: { counter: 19 }}});
    fireEvent.click(screen.queryByRole('button'));
    expect(screen.queryByTestId('clicks-counter').textContent).toBe('20');
  });
});
