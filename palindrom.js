const isPalindrom = (str) => {
  str = str.toLowerCase()
  return str === str.split('').reverse().join('')
}

console.log(isPalindrom('how'))
