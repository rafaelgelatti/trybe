import React from 'react';

class MyForm extends React.Component {
  constructor() {
    super();

    this.handleInput = this.handleInput.bind(this);
    this.handleBlur = this.handleBlur.bind(this);

    this.state = {
      name: '',
      email: '',
      cpf: '',
      adress: '',
      city: '',
    }
  }

  handleInput({ target }) {
    const { value, id } = target;
    const response = (id === 'name') ? value.toUpperCase() : value;
    this.setState({
      [id]: response,
    });
  }

  handleBlur({ target }) {
    let { value } = target;
    // regex para verificar se começa com algum dígito
    const re = /^\d/;
    if (value.match(re)) {
      target.value = '';
      this.setState({
        city: '',
      });
    }
  }

  render() {
    return (
      <form>
        <fieldset>
          <legend>Nome</legend>
          <input id='name' type='text' onChange={this.handleInput} maxLength='40' required />
        </fieldset>
        <fieldset>
          <legend>Email</legend>
          <input id='email' type='text' onChange={this.handleInput} maxLength='50' required />
        </fieldset>
        <fieldset>
          <legend>CPF</legend>
          <input id='cpf' type='text' onChange={this.handleInput} maxLength='11' required /> 
        </fieldset>
        <fieldset>
          <legend>Endereço</legend>
          <input id='adress' type='text' onChange={this.handleInput} maxLength='200' required />
        </fieldset>
        <fieldset>
          <legend>Cidade</legend>
          <input id='city' type='text' onChange={this.handleInput} onBlur={this.handleBlur} maxLength='28' required />
        </fieldset>
      </form>
    );
  }
}

export default MyForm;
