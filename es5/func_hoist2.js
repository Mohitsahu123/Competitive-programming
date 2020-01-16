sayHello()

function sayHello () {
  function hello () {
    console.log('Hello!')
  }
  
  hello()
  
  var hello = function () {
    console.log('Hey!')
  }
}