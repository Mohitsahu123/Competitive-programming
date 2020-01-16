var intersect = function(nums1, nums2) {
  var result = [];
   nums1.filter((x)=> {
	var index = nums2.indexOf(x);
		if(index != -1 ){
		nums2.splice(index,1);
                result.push(x);
		return x;
		}
	});
  return result;
};


var nums1 = [1,2,2,1], nums2 = [2,2];
var nums1 = [4,9,5], nums2 = [9,4,9,8,4];
//var nums1 = [8,0,3], nums2 = [0,0];
var aa = console.log;

aa(intersect(nums1, nums2));
