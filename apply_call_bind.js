// 1. call - вызвать функцию с контекстом выполнения

function sum(a, b, c) {
  return `${this.desc}: ${a + b + c}`
}

const sumInfo = {
  desc: 'Your result',
}
// console.log(sum.call(sumInfo, 2, 3, 4))

// 2. apply - тоже самое, аргументы в масиве
// console.log(sum.apply(sumInfo, [2, 3, 4]))

// Одолжить метод

// function sum2(...args) {
//   return args.reduce((acc, next) => acc + next)
// }
// console.log(sum2(1, 2, 3, 4, 5))

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(Math.max(...arr))
// console.log(Math.max.apply(null, arr))

// вспомогательные методы
// class Calculator {
//   constructor(desc) {
//     this.desc = desc
//     this.curriedSum = curry(this.sum)
//   }

//   printResult(value) {
//     console.log(`${this.desc}: ${value}`)
//   }

//   sum(a, b, c) {
//     this.printResult(a + b + c)
//   }
// }

// function curry(fn) {
//   return function curried(...args) {
//     if (args.length >= fn.length) {
//       return fn.apply(this, args)
//     }
//     return curried.bind(this, ...args)
//   }
// }

// const myCalc = new Calculator('With love your result')
// myCalc.sum(1, 2, 3)

// 3. bind - сохраняет контекст.

const newSum = sum.bind(sumInfo)

console.log(newSum(1, 2, 3))
