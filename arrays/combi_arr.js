//var array = ["apple", "banana", "lemon", "mango"];
// var array = [0,1,2,3];

// var result = array.flatMap(
//     (v, i) => array.slice(i+1).map( w => v + ' ' + w )
// );

// console.log(result);


 var array = [1,2,3,4];

// var result = array.flatMap(
//     (v, i) => array.slice(i+1).map( w => v + ' ' + w )
// );

// console.log(result);
//[ '0 1', '0 2', '0 3', '1 2', '1 3', '2 3' ]

var result = ["{1,0}", "{0,1}"];

for (let i = 0; i < array.length - 1; i++) {
  for (let j = i ; j < array.length; j++) {
  	if(array[i] != array[j] || (array[i] == 1 &&  array[j] == 1)){

		if( !result.includes(`{${array[j]},${array[i]}}`)){
	    	result.push(`{${array[i]},${array[j]}}`);
			if( !result.includes(`{${array[j]},${array[i]}}`)){
	    		result.push(`{${array[j]},${array[i]}}`);
	    	}

		}
  	}

  }
}


// while(j < array.length){
// 	var item = array[i]+ ""+array[j];
// 	var item2 = array[j]+ ""+array[i];
// 	if(~!result.includes(item)){
// 		result.push(item);
// 	}
// 	if(~!result.includes(item2)){
// 		result.push(item2);
// 	}
// 	i++, j++;
// }

// var result = array.reduce( (acc, v, i) =>
//     acc.concat(array.slice(i+1).map( w => { return {[v]:w}; })),
// []);

console.log(result);
console.log(result.length);

//https://stackoverflow.com/questions/43241174/javascript-generating-all-combinations-of-elements-in-a-single-array-in-pairs

// {1,0} {0,1}  --- 1 [0,1]
// {1,1}        --- 2 [0,1]
// {1,2}{2,1}   --- 3 [0,1,2]
// {1,3}{3,1}  
// {2,3}{3,2}   --- 4 [0,1,2,3]
// {1,4}{4,1}
// {2,4}{4,2}
// {3,4}{4,3}   --- 5 [0,1,2,3,4]
