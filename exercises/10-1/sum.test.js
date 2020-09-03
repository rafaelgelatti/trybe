const sum = require('./sum');

describe('add', () => {
  it('should add two values', () => {
    expect(sum(4, 5)).toBe(9);
    expect(sum(0, 0)).toBe(0);
    expect(sum(19, 3)).toBe(22);
  });
  it('parameters should be numbers', () => {
    expect(sum(4, '5')).toBeNull();
  });
});