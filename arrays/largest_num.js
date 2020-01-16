
var largestNumber = function(A){
	A.sort(function(a,b){
		return b-a;
	})
  var res =  A.reduce(function(a, b) {
    	if(b){
    		b = +(a+""+b) > +(b+""+a) ? a+""+b:b+""+a;
    	}else{
    		b = a;
    	}
    	return b;
    }, "");
  return res || 0;
}

console.log("largestNumber ", largestNumber([9, 5, 3, 34,30]))
console.log("largestNumber ", largestNumber([0, 0, 0, 0, 0]))
console.log("largestNumber ", largestNumber([ 472, 663, 964, 722, 485, 852, 635, 4, 368, 676, 319, 412 ]))

/*Sorting all numbers in descending order is the simplest solution that occurs to us. But this doesn’t work.

For example, 548 is greater than 60, but in the output, 60 comes before 548. As a second example, 98 is greater than 9, but 9 comes before 98 in the output.

The solution is to use any comparison based sorting algorithm. Thus, instead of using the default comparison, write a comparison function myCompare() and use it to sort numbers.

Given two numbers X and Y, how should myCompare() decide which number to put first – we compare two numbers XY (Y appended at the end of X) and YX (X appended at the end of Y).

If XY is larger, then, in the output, X should come before Y, else Y should come before X.

For example, let X and Y be 542 and 60. To compare X and Y, we compare 54260 and 60542. Since 60542 is greater than 54260, we put Y first.*/

/*
var b = "";
    A.forEach(function(a) {
    	if(b){
    		b = +(a+""+b) > +(b+""+a) ? a+""+b:b+""+a;
    	}else{
    		b = a;
    	}
    });
    return b;
 */