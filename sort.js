const array = [1, 5, 3, -10, 4, 45, 33, 72, -4, 0, 8]

const res = array.sort((a, b) => {
  return a - b
})

// console.log(res)

// create map
Array.prototype.myMap = function (callback) {
  const result = []
  const thisArray = this
  for (let i = 0; i < thisArray.length; i++) {
    result.push(callback(thisArray[i], i, thisArray))
  }
  return result
}

const test = array.myMap((el, index, arr) => {
  return el.toString()
})

// console.log(test)
