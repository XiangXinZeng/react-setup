import getGreeting from './greet'

const p1 = {
  first: 'Gray',
  last: 'Zeng'
}

const p2 = { ...p1, age: 43 }

console.log(getGreeting('Gray'))
console.log(p2)
