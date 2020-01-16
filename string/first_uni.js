var firstUniqChar = function(s) {
    if(!s) return -1;
    var arr = s.split("");
    var  i= 0;
    var x = -1;
    var key = "";
    while(i < arr.length){
          if((x = arr.indexOf(arr[i], i+1)) == -1){
              key = arr[i];
              break;
          }
        arr.splice(i,1);
        arr.splice(x-1,1);
    }
    console.log("key ", key);
    return key ? s.split("").indexOf(key) : -1;
};

var s = firstUniqChar("loveleetcode");

console.log("s ",s);
var s2 = firstUniqChar("aadadaad");
console.log("s2 ",s2);
