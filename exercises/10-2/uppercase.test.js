const uppercase = require('./uppercase');

test('Test if a given string returns lowercased', (done) => {
  uppercase('Abc', (result) => {
    expect(result).toMatch('ABC');
    done();
  });
});