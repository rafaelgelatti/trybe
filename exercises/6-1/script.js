function generateStates() {
  const states = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins']
  for (let i = 0; i < states.length; i += 1) {
    let state = document.createElement('option');
    state.value = i;
    state.innerHTML = states[i];
    document.getElementById('estado').appendChild(state);
  }
}

window.onload = generateStates();

const submitButton = document.getElementById('botao');
submitButton.addEventListener('click', function () {
  const nome = document.getElementById('nome');
  const email = document.getElementById('email');
  const cpf = document.getElementById('cpf');
  createDiv(nome, email, cpf);
})

function createDiv(nome, email, cpf) {
  const div = document.createElement('div');
  document.body.appendChild(div);
  const p1 = document.createElement('p');
  p1.innerHTML = "Nome: " + nome.value;
  div.appendChild(p1);
  const p2 = document.createElement('p');
  p2.innerHTML = "E-mail: " + email.value;
  div.appendChild(p2);
  const p3 = document.createElement('p');
  p3.innerHTML = "CPF: " + cpf.value;
  div.appendChild(p3);
}