const array = [1, 6, 4, 3, 1, 2, 3, 4, 5]

array.sort((el1, el2) => el1 - el2)

// console.log(array)

const users = [
  {
    name: 'Kate',
    age: 20,
  },
  {
    name: 'Jane',
    age: 25,
  },
  {
    name: 'Alice',
    age: 22,
  },
]

users.sort((u1, u2) => u1.age - u2.age)

console.log(users)
