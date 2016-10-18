//reverse a string
module.exports = (string) => {
  // return string.split('').reverse().join('')

  //more performant solution no objects are created
  let result = '';
  for (let i = string.length - 1; i >= 0; i--) {
    result += string[i];
  }
  return result;
};
