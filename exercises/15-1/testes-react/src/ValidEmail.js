import React from 'react';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
}

function showMessage(email) {
  if(!email) {
    return <p>Empty field</p>
  } else {
    return <h3>{(verifyEmail(email) ? 'Email válido' : 'Email inválido')}</h3>
  }
}

const ValidEmail = (props) => {
  const { email } = props;
  return (
    <div>
      <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
      {showMessage(email)}
    </div>
  );
}

export default ValidEmail;
