var longestCommonPrefix = function(strs) {
    if(!strs || !strs.length) return;
    return longestCommonPrefix2(strs,0, strs.length-1);
};

// if(l==r){
//     return strs[l];
// }else
function longestCommonPrefix2(strs,l,r){
   if(r > 0){
        var mid = (Math.floor(l+r)/2);
        console.log("mid ", mid, l,r)
        return commonPrefix(longestCommonPrefix2(strs,l,mid),longestCommonPrefix2(strs,mid+1,r));
    }
}

function commonPrefix(left,right){
    var min = Math.min(left.length,right.length);
    for(var i =0; i< min;i++){
        if(left.charAt(i) != right.charAt(i))
            return left.substr(0,i);
    }
    return left.substr(0,min);
}

var s = longestCommonPrefix(["flower","flow","flight"]);
console.log(s);