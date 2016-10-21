module.exports = (string1, string2) => {
  var arg1 = string1.toUpperCase().split('').sort().join('').trim().replace(/\d/g, '')
  var arg2 = string2.toUpperCase().split('').sort().join('').trim().replace(/\d/g, '')
  if (arg1 === arg2) {
    return true
  } else {
    return false
  }
};
