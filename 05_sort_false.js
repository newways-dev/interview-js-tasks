const array = [0, false, undefined, 'correct', '', 5]

const notFalsy = array.filter((el) => !!el)

console.log(notFalsy)
