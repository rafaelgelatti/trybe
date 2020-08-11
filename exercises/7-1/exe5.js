const s = [5, 7, 2];
function editInPlace() {
  'use strict';

  const aux = s[2];
  s[2] = s[1];
  s[1] = s[0];
  s[0] = aux;

}
editInPlace();
