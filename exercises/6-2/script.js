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
  if (document.getElementById('return')) {
    const ret = document.getElementById('return');
    document.getElementsByTagName('form')[0].removeChild(ret);
  }
  const nome = document.getElementById('nome');
  const email = document.getElementById('email');
  const cpf = document.getElementById('cpf');
  const cidade = document.getElementById('cidade');

  //aqui eu sei o VALOR do item selecionado no dropdown menu
  const estado = document.getElementById('estado');
  
  //descobrindo o TEXTO selecionado no dropdown menu
  const estados = document.getElementsByTagName('option');
  let selectedState;
  for (let i = 0; i < estados.length; i += 1) {
    if (estados[i].value === estado.value) {
      selectedState = estados[i].innerHTML;
    }
  }

  //descobrindo o valor do RADIO
  let valorRadio;
  if (document.getElementById('casa').checked) {
    valorRadio = document.getElementById('casa').nextElementSibling.innerHTML;
  } else if (document.getElementById('ap').checked) {
    valorRadio = document.getElementById('ap').nextElementSibling.innerHTML;
  } 

  const cv = document.getElementById('cv');
  const cargo = document.getElementById('cargo');

  createDiv(nome.value, email.value, cpf.value, cidade.value, selectedState, valorRadio, cv.value, cargo.value);
});

function createDiv(nome, email, cpf, cidade, estado, cv, cargo, moradia) {
  const form = document.getElementsByTagName('form')[0];
  const div = document.createElement('div');
  div.className = 'field';
  div.id = 'return';
  const parameters = [nome, email, cpf, cidade, estado, cv, cargo, moradia];
  for (let i = 0; i < parameters.length; i += 1) {
    const label = document.createElement('label');
    label.innerHTML = parameters[i];
    div.appendChild(label);
  }
  form.appendChild(div);
}
