
var a = console.log;

function quickSort(arr, left, right){
   var len = arr.length, 
   pivot, // random value
   partitionIndex;


  if(left < right){
    pivot = right;
    partitionIndex = partition(arr, pivot, left, right);
    a(" left, partitionIndex - 1@@@ ", left, arr[partitionIndex - 1]);
    a("partitionIndex + 1, right@@@ ", arr[partitionIndex + 1], right);
   //sort left and right
   quickSort(arr, left, partitionIndex - 1);
   quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

function partition(arr, pivot, left, right){
   var pivotValue = arr[pivot],
       partitionIndex = left;

   for(var i = left; i < right; i++){
    if(arr[i] < pivotValue){
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}
       


function swap(arr, i, j){
   var temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
}

var arr = [11,8,14,3,6,2,7];

var res = quickSort(arr,0,arr.length-1);
a(res);