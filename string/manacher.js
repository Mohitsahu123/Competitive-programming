function manachersAlgorithm( s, N) {
    var str = getModifiedString(s, N);
    var len = (2 * N) + 1;
    var P = [];
    var c = 0; //stores the center of the longest palindromic substring until now
    var r = 0; //stores the right boundary of the longest palindromic substring until now
    var maxLen = 0;
    for(var i = 0; i < len; i++) {
        //get mirror index of i
        var mirror = (2 * c) - i;
        
        //see if the mirror of i is expanding beyond the left boundary of current longest palindrome at center c
        //if it is, then take r - i as P[i]
        //else take P[mirror] as P[i]
        if(i < r) {
            P[i] = Math.min(r - i, P[mirror]);
        }
        
        //expand at i
        var a = i + (1 + P[i]);
        var b = i - (1 + P[i]);
        while(a < len && b >= 0 && str.charAt(a) == str.charAt(b)) {
            P[i]++;
            a++;
            b--;
        }
        
        //check if the expanded palindrome at i is expanding beyond the right boundary of current longest palindrome at center c
        //if it is, the new center is i
        if(i + P[i] > r) {
            c = i;
            r = i + P[i];
            
            if(P[i] > maxLen) { //update maxlen
                maxLen = P[i];
            }
        }
    }
    return maxLen;
}

function getModifiedString( s, N){
    var sb = "";
    for(var i = 0; i < N; i++){
         sb += "#"+s.charAt(i);
    }
    sb += "#";
    return sb;
}

var ss = manachersAlgorithm("acacacb", 7);
console.log(ss);
