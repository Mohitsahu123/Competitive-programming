function binarySearch(nums,  target){
  if(nums == null || nums.length == 0)
    return -1;

  var left = 0, right = nums.length - 1;
  while(left <= right){
    // Prevent (left + right) overflow
    var mid = parseInt(left + (right - left) / 2);
    if(nums[mid] == target){ return mid; }
    else if(nums[mid] < target) { left = mid + 1; }
    else { right = mid - 1; }
  }

  // End Condition: left > right
  return -1;
}


var a = console.log;

a(binarySearch([-1,0,3,5,9,12], 9))
a(binarySearch([-1,0,3,5,9,12], 2))