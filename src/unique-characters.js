module.exports = (word) => {
  word = word.toLowerCase().replace(/[\s\d]+/g).split('').sort();
  for (let i = 0; i < word.length; i++) {
    if (word[i] === word[i + 1]) {return false}
  }
  return true;
};
