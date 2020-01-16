

function moveZeros1(arr){
	var len = arr.length, i = arr.indexOf(0);
	while(~i && i < --len){
		[arr[i], arr[len]] = [arr[len], arr[i] ]
		i = arr.indexOf(0);
	}
	console.log("arr ",arr)
}

moveZeros1([1,0,2,0,3,0,4,5,6]);
moveZeros1([1, 2, 0, 0, 3, 0, 3, 0, 2, 0, 0, 0, 5, 0]);


function moveZeros(arr){
	var len = arr.length, i = arr.indexOf(0);
	while(~i && i < --len){
		arr.splice(i, 1);
        arr.push(0);
		i = arr.indexOf(0);
	}
}

var moveZeroes = function(nums) {
   var len = nums.length, i = nums.indexOf(0);
	while(~i && i < --len){
		nums.splice(i, 1);
        nums.push(0);
		i = nums.indexOf(0);
	}
};

moveZeros2([1,0,2,0,3,0,4,5,6]);
moveZeros2([1, 2, 0, 0, 3, 0, 3, 0, 2, 0, 0, 0, 5, 0]);
