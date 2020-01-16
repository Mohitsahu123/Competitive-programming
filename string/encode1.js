function encode(str){
	var strArr = str.split("");
	var i =0, fi =1, count=1;
	if(strArr[i] == 0 || str.includes("00")){
		return 0;
	}
	else if(strArr.length ==1 ){
		return parseInt(strArr[i]) > 0 ? 1 : 0 ;
	}else if(strArr.length ==2 ){
		if((parseInt(strArr[i]) < 1 || parseInt(strArr[fi]) < 1) && (parseInt(strArr[i] + strArr[fi]) > 1)){
			return 1;
		}else if(parseInt(strArr[i] + strArr[fi]) > 26){
			return 1
		}else {
			return parseInt(strArr[i] + strArr[fi]) > 0 ? 2:0;
		}
	}else{
		//if(str.includes("0")) count = 0;
		console.log(" count ", count);
		while(fi < strArr.length){
			var num = strArr[i] + strArr[fi];
			console.log("num ", num);
			if(strArr[i] == 0){
				count--;
				i++; fi++;
				continue;
			}else{
				console.log(" inside else")
				if(parseInt(num) <= 26 && parseInt(num) > 0){
					count++;
				}
				i++; fi++;
			}
		}
		var j = 0, isFalse = false;
		if(strArr.length %2 == 0){
			while(j < strArr.length){
				var num = strArr[j]+strArr[j+1];
				if(parseInt(num) > 26 || parseInt(num) <0){
					isFalse = true;
					 break;
				}
				j += 2;
			}
		}
		if(!isFalse && j == strArr.length) count++;
		return count;
	}
}

// console.log(encode("12"));
// console.log(encode("26"));
// console.log(encode("226")); // BBF UA BZ
// console.log(encode("1001")); // j
// console.log(encode("101")); // j
console.log(encode("1010")); // j
// console.log(encode("10111")); // j
// console.log(encode("01")); // j
// console.log(encode("27")); // j
// console.log(encode("00")); // j
// console.log(encode("10")); // j
// console.log(encode("10021001")); // j
// console.log(encode("12345"));
// console.log(encode("1123")); // this case made me failed.
// console.log(encode("262626"));