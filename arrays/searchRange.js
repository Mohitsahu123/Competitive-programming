var searchRange = function(nums, target) {
    return [nums.indexOf(target), nums.lastIndexOf(target)]
};

var a = console.log;

a(searchRange([5,7,7,8,8,10], 8));