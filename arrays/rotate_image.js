
var rotate = function(matrix) {
    var colIndex = matrix.length-1;
    for(var i = 0; i < matrix.length; i++){
    	var rowIndex = matrix[i].length -1;
    	for(var j = 0; j < matrix[i].length-1; j++){
    		if(colIndex > -1){
	    		//a(colIndex, rowIndex, i,j);
	    		var temp1 = matrix[colIndex][j]; // column value
	    		var temp2 = matrix[i][j];		// current index value
	    		var temp3 = matrix[i][rowIndex]; // row value
	    		var temp4 = matrix[colIndex][rowIndex];
	    		a(temp1, temp2,temp3, temp4);
	    		matrix[i][j] = temp1;
	    		matrix[i][rowIndex] = temp2;
	    		matrix[colIndex][rowIndex] = temp3;
	    		matrix[colIndex][j] = temp4;
	    		a(matrix);
	    		colIndex--;
    		}
    	}
	rowIndex--;

    }
    //a(matrix);
};

var a = console.log;
var input1 = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
];

rotate(input1);


var input2 = [
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
];
//a(rotate(input2));



// [1,2,3],
//   [4,5,6],
//   [7,8,9]

//   [00, 01,02],
//   [10,11,12],
//   [20,21,22]

//   []