import React from 'react';
import { getByText, render } from '@testing-library/react';
import ValidEmail from './ValidEmail';

test('Testando um componente, caso o email seja válido', () => {
  const EMAIL_USER = 'email@email.com';
  const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
  const isValid = getByText('Email válido');
  expect(isValid).toBeInTheDocument();
});

test('Testando um componente, caso email seja inválido', () => {
  const EMAIL_USER = 'emailerrado';
  const { getByText } = render(<ValidEmail email={EMAIL_USER} />);
  const isInvalid = getByText('Email inválido');
  expect(isInvalid).toBeInTheDocument();
});

test('Testa um componente, caso o campo de email esteja vazio', () => {
  const { getByText } = render(<ValidEmail email='' />);
  const fieldIsEmpty = getByText('Empty field');
  expect(fieldIsEmpty).toBeInTheDocument();
});
