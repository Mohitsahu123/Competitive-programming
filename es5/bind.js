var module = {
  x: 42,
  getX: function(a,b,c) {
    return this.x + a+b+c;
  }
}

var unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// expected output: undefined

var boundGetX = unboundGetX.bind(module, 3,4,9);
console.log(boundGetX());
// expected output: 42
