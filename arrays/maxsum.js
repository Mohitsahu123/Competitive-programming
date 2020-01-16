data=[[1001,50],[1001,68],[1002,69],[1002,68],[1004,9],[1004,13],[1005,56],[1005,96],[1005,30],[1006,46],[1006,6],[1006,48],[1007,59],[1007,30],[1007,9],[1009,79],[1010,42],[1012,37],[1013,64],[1017,55],[1018,29],[1020,60],[1020,29],[1021,44],[1022,62],[1024,2],[1025,6],[1028,5],[1029,6],[1029,82]];
// Do not change the data above

function maxsum(data){ // Do not edit line 
  
  var obj = {};
  data.forEach(function(item){
    var key = item[0];
    var val = item[1];
    if(!obj[key]){
      obj[key] = val;
    }else{
      if(obj[key] < val){
        obj[key] = val;
      }
    }
  });
  var result = Object.values(obj).reduce(function(x,y){ return x+y;}, 0);
    console.log(result);
      // Your code goes here  
      
      
  
 	return result;  // Do not edit line 
}

function a(x){
   return console.log(JSON.stringify(x));
}
maxsum(data);  // Do not edit line 
