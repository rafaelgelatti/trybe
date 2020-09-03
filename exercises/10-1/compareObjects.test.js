const object = require('./object');

describe('object properties', () => {
  it('has properties', () => {
    expect(object).toHaveProperty('title');
  });
});
