
function diskSorting3(arr){
    if(!arr || arr.length ==1 ) return -1;
    var count = 0, max, maxIndex, prevIndex, prevMax, alreadySorted = true;
    for(var i = 0; i<arr.length; i++ ){
        if(arr[i] > arr[i+1]){
            alreadySorted = false;
            break;
        }
    }
    if(alreadySorted) return -1;
    while(arr.length){
        var max = Math.max(...arr);
        var maxIndex = arr.indexOf(max);
        if(!prevMax){
            arr.splice(maxIndex,1);
        }else{
            var prevIndex = arr.indexOf(prevMax);
            if(prevIndex < maxIndex){
                count++;
            }
            arr.splice(maxIndex,1);
        }
        prevMax = max;
    }
    return count;
}

function a(x){
 	return console.log(JSON.stringify(x));
}



// var arr = [5,1,12,-5,16,2,12,14]
// a(arr);
// a(diskSorting3(arr));

// var arr = [3,1,2]
// a(arr);
// a(diskSorting3(arr));

// var arr = [3,1]
// a(arr);
// a(diskSorting3(arr));

// var arr = [5,7]
// a(arr);
// a(diskSorting3(arr));

// var arr = [9]
// a(arr);
// a(diskSorting3(arr));

// var arr = [1,2,3,4,5,6,7,8,9]
// a(arr);
// a(diskSorting3(arr));

// var arr = [1,3,2]
// a(arr);
// a(diskSorting2(arr));

// var arr = [1,2,5,2,8,9] // should be 4
// a(arr);
// a(diskSorting3(arr));

var arr = [1,3,2]
a(arr);
a(diskSorting3(arr));
