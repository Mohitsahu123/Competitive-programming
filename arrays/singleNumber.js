
var singleNumber = function(nums) {
   var j = -1;
   var item;
    while(nums.length){
	 item = nums[0];
	nums.splice(0,1);
        if( (j= nums.lastIndexOf(item)) === -1){
            return item;
            break;
        }else{
            nums.splice(j,1);
        }
    }
};

console.log(singleNumber([4,1,2,1,2]));
 console.log(singleNumber([2,2,1]));

 console.log(singleNumber([1,0,1]));
