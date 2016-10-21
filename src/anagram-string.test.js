const anagram = require('./anagram-string')

it('should include the same characters', () => {
  expect(anagram('hello', 'ehllo')).toBe(true);
  expect(anagram('hello', 'eh llo')).toBe(true)
  expect(anagram('heLLo', ' eHllo')).toBe(true)
  expect(anagram('heLLo', ' eH5llo3')).toBe(true)
});

it('should return false if the strings do not have the same characters', () => {
  expect(anagram('hello', 'ahllo')).toBe(false);
});
