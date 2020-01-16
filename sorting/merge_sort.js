

var a = console.log;

function mergeSort(arr){
   var len = arr.length; // take array length
   if(len <2) //check if array length is less than 2 
      return arr;
   var mid = Math.floor(len/2), // find the mid value of array length by diving the array length 
       left = arr.slice(0,mid), //create the left part of array by using mid
       right =arr.slice(mid); // create the right part of the array 
   //send left and right to the mergeSort to broke it down into pieces
   //then merge those
	a(mid, left, right);
   console.log(mergeSort(left),mergeSort(right));
   return merge(mergeSort(left),mergeSort(right)); // paasing the array to merge functon recursivley to
}

function merge(left, right){
  var result = [],
      lLen = left.length,
      rLen = right.length,
      l = 0,
      r = 0;
  while(l < lLen && r < rLen){
     if(left[l] < right[r]){
       result.push(left[l++]);
     }
     else{
       result.push(right[r++]);
    }
  }  
  //remaining part needs to be added to the result  right.slice(r)
  return result.concat(left.slice(l)).concat(right.slice(r));
}
   
var arr = [3,6,1,9,2];
   var res = mergeSort(arr);
   a(res);  

