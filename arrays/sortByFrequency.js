var sortByFrequency = function(array){
	var frequency   = {};
    var sortAble    = [];
    var newArr      = [];

    array.forEach(function(value) { 
        if ( value in frequency )
            frequency[value] = frequency[value] + 1;
        else
            frequency[value] = 1;
    });

    sortAble = Object.entries(frequency).sort(function(a, b){
        return b[1] - a[1]
    });

    
    sortAble.forEach(function(obj){
        for(var i=0; i < obj[1]; i++){
            newArr.push(obj[0]);
        }
    });
    return newArr;
}


function a(x){
 	return console.log(JSON.stringify(x, null, "\t"));
}
//a(sortByFrequency([3,5,2,9,5,4,2,7,4,7,5]));
a(sortByFrequency([2, 2, 1, 4, 2,5, 4,4,4, 5]));