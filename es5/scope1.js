var greet = 'Hello!'

function sayHi () {
  console.log('2: ', greet)
  var greet = 'Ciao!'
  console.log('3: ', greet)
}

console.log('1: ', greet)
sayHi()
console.log('4: ', greet)