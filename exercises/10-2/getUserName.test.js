const getUserName = require('./getUserName');

let invalidId = 16;
describe('input an id and check if exists', () => {
  it('if exists, get the name', () => {
    expect.assertions(1);
    return getUserName(4).then(data => expect(data).toMatch('Mark'));
  });

  it('returns error when id doesn\'t exists', () => {
    expect.assertions(1);
    return getUserName(invalidId).catch(error => expect(error).toEqual({ error: `User with ${invalidId} not found.` }));
  });
});

// async/await
describe('async/await', () => {
  it('input an id and returns the name or error with async/await', async () => {
    try {
      expect.assertions(1);
      const data = await getUserName(5);
      expect(data).toMatch('Paul');
    } catch (error) {
      expect(error).toEqual({ error: `User with ${invalidId} not found.` });
    } 
  });
  it('is an invalid id with async/await', async () => {
    try {
      expect.assertions(1);
      const data = await getUserName(invalidId);
      expect(data).toMatch('Paul');
    } catch (error) {
      expect(error).toEqual({ error: `User with ${invalidId} not found.` });
    } 
  });
});

