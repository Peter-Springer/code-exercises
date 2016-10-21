const unique = require('./unique-characters')

it('should return flase if duplicates exist', () => {
  expect(unique('hello')).toBe(false);
});
