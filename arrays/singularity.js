// data = '15931593950382205972005873020585729295767920094768300288002957529';
// // To check your answer you must submit with the data above

// //data = '55555'; 
// function singularity(data){ // Do not edit line 
//   	if(!data) result =0;

//   	var arr = data.split("");
//   	function arrSum(str){
//   		if(!str) return parseInt(str);
//   		console.log("parseInt(str)  ", parseInt(str), str);

//   		if(parseInt(str) > 9){
//   			var arr2 = str.split("");
//   			var result = arr2.reduce(function(x,y){ return parseInt(x)+parseInt(y)},0);
//   			console.log("result22  ", result);
//   			return arrSum(result.toString());
//   		}else{
//   			return parseInt(str);
//   		}
//   	}
//   var sres = arr.reduce(function(x,y){ return parseInt(x)+parseInt(y)},0);
//   var result = arrSum(sres.toString());
//     // Your code goes here     
  
  
//  	//return result;  // Do not edit line 
// }
// singularity(data);  // Do not edit line 

console.log('do something now');
setTimeout(function() { async('later'); }, 3000);
function async(arg) {
console.log('do something '+arg);
}