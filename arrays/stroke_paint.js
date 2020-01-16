function strokesRequired(picture) {
    // Write your code here
    var obj = {};
    for(var i = 0; i < picture.length; i++){
        var hstr = picture[i].split("");
        var vstr = (picture[i+1] || "").split("");
        for(var j = 0; j < hstr.length; j++){
            var x = hstr[j];
            var y = vstr[j];
            if(!obj[x]){
                obj[x] =0;
            }
            if( (hstr[j+1] && x != hstr[j+1])
             &&
            	(hstr[j-1] && x != hstr[j-1])
            	){
                obj[x] += 1;
            }
            else if( (y && x != y) && (picture[i-1].split("") && x != picture[i-1].split("")[j])){
                obj[x] += 1;
            }

        }
    }
    
console.log("obj ", obj);
    return Object.values(obj).reduce((x, y) =>{ return y+x;}, 0);
 
}

var ee = strokesRequired(["aabba","aabba","aaacb"]);
console.log("ee ", ee);
