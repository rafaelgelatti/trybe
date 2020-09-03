const myRemove = require('./myRemove');

describe('remove from array', () => {
  it('returns expected array', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });
  it('does not contain removed item', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toContain(3);
  });
});
