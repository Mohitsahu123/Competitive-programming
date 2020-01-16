var name = 'John'

function greet (name) { 
	var self = this 
  return (function () {
    console.log('Hello ' + name)
    console.log('Hello ', this.name)
    console.log('Hello ', self.name)
  })
}

var sayHello = greet(name)

name = 'Sam'

sayHello()