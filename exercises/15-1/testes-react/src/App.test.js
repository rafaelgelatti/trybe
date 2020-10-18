import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from './App';

describe('Testes na tela inicial', () => {
  it('Verificando se existe o campo Email', () => {
    const { getByLabelText } = render(<App />);
    const inputEmail = getByLabelText('Email');
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail.type).toBe('email');
  });
  
  it('Verifica se existe um botão de \'Enviar\'', () => {
    const { getByTestId } = render(<App />);
    const btn = getByTestId('id-send');
    expect(btn).toBeInTheDocument();
    expect(btn.type).toBe('button');
    expect(btn).toHaveValue('Enviar');
  });
  
  it('Verifica se há dois botões', () => {
    const { getAllByRole } = render(<App />);
    const buttons = getAllByRole('button');
    expect(buttons.length).toBe(2);
  });

  it('Verifica se o botão e o campo email estão funcionando', () => {
    const { getByTestId, getByLabelText } = render(<App />);
    
    const EMAIL_USER = 'rafa@tesla.com';

    const textEmail = getByTestId('id-email-user');
    expect(textEmail).toBeInTheDocument();
    expect(textEmail).toHaveTextContent('Valor:');

    const btnSend = getByTestId('id-send');
    const inputEmail = getByLabelText('Email');
    fireEvent.change(inputEmail, { target: { value: EMAIL_USER } });
    fireEvent.click(btnSend);
    expect(inputEmail).toHaveValue('');
    expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
  });
});
