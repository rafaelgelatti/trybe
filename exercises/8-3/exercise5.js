    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];



function containsA() {
  let as = '';
  const regTest = /a/g;

  // adiciono todos os 'a' maiusculos e minusculos a string 'as'
  names.forEach(name => {
    as += name.toLowerCase().match(regTest);
  });

  // removo as virgulas, já sabia como mas reforcei neste site: https://forum.freecodecamp.org/t/removing-commas-in-a-string/315276
  const justAs = as.replace(/,/g,'');

  // retorno o total de letras 'a'
  return justAs.length;
}

// console.log(containsA());

assert.deepEqual(containsA(), 20);