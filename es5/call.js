var obj1 = {
	name : "breaking bad",
	rating : 4.5,
	seen : true,
	famous: false
};

var obj2 = {
	name : "game of thrones",
	rating : 5,
	seen : true,
	famous: true
};

function callExample1(arg1, arg2){
	console.log(" print this obj ", this.name );
	console.log(" arg1, arg2 ", arg1, arg2 );
}

callExample1(1,2)
callExample1.call(obj1, 1,2);
callExample1.call(obj2, 1,2);

// example 2 

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

console.log(new Food('cheese', 5).name);
// expected output: "cheese"
