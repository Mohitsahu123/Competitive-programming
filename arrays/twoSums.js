var twoSum = function(nums, target) {
   
    for(var i=0; i< nums.length; i++) {
        var complement = target - nums[i];
        if(nums.includes(complement) && nums.indexOf(complement) != i ){
            return [i, nums.indexOf(complement)];
            break;
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9));