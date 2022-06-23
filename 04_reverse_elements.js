const array = [1, 4, 5]

const reversed = array.map((e, index, arr) => arr[arr.length - index - 1])

console.log(reversed)
