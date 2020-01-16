var rotate = function(nums, k) {
     k %= nums.length;
        reverse(nums, 0, nums.length - 1); //[ 7, 6, 5, 4, 3, 2, 1 ]
        reverse(nums, 0, k - 1);           //[ 5, 6, 7, 4, 3, 2, 1 ]    
        reverse(nums, k, nums.length - 1); //[ 5, 6, 7, 1, 2, 3, 4 ]
};

function reverse( nums,  start, end) {
        while (start < end) {
            var temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }


    var  nums = [1,2,3,4,5,6,7], k = 3;

    rotate(nums, k);
    console.log(nums);