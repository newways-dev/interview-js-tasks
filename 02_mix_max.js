const array = [1, 2, 3, 4, 5]

let min = array.reduce((acc, next) => Math.min(acc, next))

console.log(Math.max(...array))
