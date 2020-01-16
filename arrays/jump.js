var jump = function(nums) {
    var jumpCount =0;
    var index =0;
    var i = 0;
    while( index < nums.length){
        index += nums[i];
        jumpCount++;
        i++;
    }
    return jumpCount;
};

console.log(jump([2,3,1,1,4]))