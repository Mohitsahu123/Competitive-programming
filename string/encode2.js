
// function nCombs(s, flag){
// 	if(s.length == 1 && s[0] == '0' && !flag) return 0;
// 	if (s.length < 2){
//          return 1;
// 	}
//     else{ // len(s) > 1
//     	var ac = nCombs(s.slice(1), true)
//         if (s[0] == '0')
//             return ac;
//         if (parseInt(s.slice(0,2)) <= 26 && parseInt(s.slice(0,2)) > 0)
//             ac += nCombs(s.slice(2), true)
//         return ac ;
//     }    
// }


// function nEncodings(s){
// 	console.log("nEncodings(", s, "):", nCombs(s));
// }

var nEncodings = function(s) {
    var fp = {};
	console.log("nEncodings(", s, "):",count(s));
    return count(s);

    function count(s) {
        if (s in fp) return fp[s]; // get data from cache
        if (!s.length || s.startsWith('0')) return 0; // if s is invalid then return zero
        if (s.length === 1) return 1; // a number from 1 - 9, count as 1
        if (s.length === 2) {
            // if number larger than 26, then check second digit valid or not, return 1 if valid
            // otherwise check the second digit valid or not, return 2 if both valid(1 + 1)
            // Which in detail, if larger than 26, we can only take this as a set of two 1-digit number,
            // also depends on whether both of 1-digit number is valid,
            // otherwise, if less than 26,
            // we can count this as a 2-digit number or a set of two 1-digit number.
            var rs = parseInt(s) > 26 ? count(s[1]) : 1 + count(s.substring(1));
            fp[s] = rs;
            return rs;
        }
        // first part: take the first word as valid(1-9), so only count the remain string
        // second part: check whether starting two chars makes a valid number, if so then count the remaining.
        // sum this two parts because they are not duplicated.
        var rs = count(s.substring(1)) + (parseInt(s.substring(0, 2)) < 27 ? count(s.substring(2)) : 0);
        fp[s] = rs;
        return rs;
    }
};


nEncodings("123")
nEncodings("1234")
nEncodings("111")
nEncodings("1111")
nEncodings("11111")
nEncodings("1010")
nEncodings("1123")
nEncodings("0")

nEncodings("12")
nEncodings("26")
nEncodings("226") // BBF UA BZ
nEncodings("1001") // j
nEncodings("101") // j
nEncodings("1010") // j
nEncodings("10111") // j
nEncodings("01") // j
nEncodings("27") // j
nEncodings("00") // j
nEncodings("10") // j
nEncodings("10021001") // j
nEncodings("12345")
nEncodings("1123") // this case made me failed.
nEncodings("262626")