function createPiramid(n) {
  let s = '*';
  let nS = ' ';
  let output = '';
  let leftIndex = (n + 1) / 2;
  let rightIndex = (n + 1) / 2;
  let totalLines = (n + 1) / 2;

  for (let line = 1; line <= totalLines; line += 1) {
    for (let column = 1; column <= n; column += 1) {
      if (line === totalLines) {
        output += s;
        continue;
      }
      if (column === leftIndex || column === rightIndex) {
        output += s;
      } else {
        output += nS;
      }
    }
    console.log(output);
    output = '';
    leftIndex -= 1;
    rightIndex += 1;
  }
}

createPiramid(21);