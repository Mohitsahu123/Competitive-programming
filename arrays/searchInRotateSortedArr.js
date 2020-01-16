
function searchInRotateSortedArr(nums,  target){
  if(nums == null || nums.length == 0)
    return -1;

  var left = 0, right = nums.length - 1;
  while(left <= right){
  console.log(" left, right ", left, right)
    // Prevent (left + right) overflow
    var mid = parseInt(left + (right - left) / 2);
    a("mid, nums[mid] ", mid, nums[mid]);
    if(nums[mid] == target){ return mid; }
    else if(nums[mid] < target) { left = mid + 1; }
    else { right = mid - 1; }
  }

  // End Condition: left > right
  return -1;
}


var a = console.log;
a([4,5,6,7,0,1,2])
a(searchInRotateSortedArr([4,5,6,7,0,1,2], 0))
