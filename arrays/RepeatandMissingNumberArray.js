var repeatedNumber = function(arr){
	return arr.reduce(function(x,y){ return x+y},0);
}

a(repeatedNumber([3 ,1, 2, 5, 4] ));

function a(x){
 	return console.log(JSON.stringify(x, null,'\t'));
 }
