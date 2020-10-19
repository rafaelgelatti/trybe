import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import App from './App';

afterEach(() => jest.clearAllMocks());

describe('Teste sobre o fetch', () => {
  it('fetch joke', async () => {
    const joke = {
      id: '7h3oGtrOfxc',
      joke: 'Whiteboards ... are remarkable.',
      status: 200,
    };
  
    jest.spyOn(global, 'fetch');
  
    // const response = { json: jest.fn(() => Promise.resolve(joke)) };
    // const response = { json: jest.fn().mockResolvedValue(joke) };
    const response = { json: jest.fn().mockImplementation(() => Promise.resolve(joke)) };
  
    // global.fetch = jest.fn().mockResolvedValue({
    //   json: jest.fn().mockResolvedValue(joke),
    // });
    global.fetch = jest.fn().mockResolvedValue(response);
  
    const { findByText } = render(<App />);
    await findByText('Whiteboards ... are remarkable.');
    expect(global.fetch).toBeCalledTimes(1);
    expect(global.fetch).toBeCalledWith('https://icanhazdadjoke.com/', {"headers": {"Accept": "application/json"}});
  });
});

describe('Teste sobre os inputs', () => {
  it('alterando o valor dos campos e testando o valor guardado', () => {
    const { getByTestId } = render(<App />);
    const inputNome = getByTestId('input-nome');
    expect(inputNome).toHaveValue('');
    fireEvent.change(inputNome, { target: { value: 'Estudante da Trybe' } });
    expect(inputNome).toHaveValue('Estudante da Trybe');
  
    const inputEmail = getByTestId('input-email');
    expect(inputEmail).toHaveValue('');
    fireEvent.change(inputEmail, { target: { value: 'estudante@trybe.com' } });
    expect(inputEmail).toHaveValue('estudante@trybe.com');
  });
});
