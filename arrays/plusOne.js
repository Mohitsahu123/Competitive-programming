var plusOne = function(digits) {
     var index = digits.lastIndexOf(9);
     if(~index && digits.length-index <20 && digits.length > 20){
     	var ee = digits.splice(index-1);
     	ee = (parseInt(ee.join("") || 0)+1).toString().split("");
     	return digits.concat(ee).toString().split(",");
     }else if(digits.length > 18 ){
		var ee = digits.splice(digits.length-2);
     	ee = (parseInt(ee.join("") || 0)+1).toString().split("");
     	return digits.concat(ee).toString().split(",");
     }else{
     	return (parseInt(digits.join("") || 0)+1).toString().split("");
    }
};

var digits = [4,3,2,1];
var a = console.log;
var b = JSON.stringify;

a(plusOne(digits));
a(b(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3])));
a(b(plusOne([5,6,2,0,0,4,6,2,4,9])));
a(b(plusOne([5,9,0,8,4,0,2,3,5,5,7,0,0,3,1,3,7,2,4,8,8,5,0,6,1,1,2])));
a(b(plusOne( [ 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9 ])));
a(b(plusOne([7,2,8,5,0,9,1,2,9,5,3,6,6,7,3,2,8,4,3,7,9,5,7,7,4,7,4,9,4,7,0,1,1,1,7,4,0,0,6]
)));