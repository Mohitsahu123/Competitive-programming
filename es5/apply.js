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
callExample1.apply(obj1,[ 1,2]);
callExample1.apply(obj2, [3,4]);



// example 2 

var numbers = [5, 6, 2, 3, 7];

var max = Math.max.apply(null, numbers);

console.log(max);
// expected output: 7

var min = Math.min.apply(null, numbers);

console.log(min);
// expected output: 2
