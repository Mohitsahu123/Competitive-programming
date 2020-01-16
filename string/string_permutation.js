function swap(a, i, j) {
	var temp;
	var charArray = a.split("");
	temp = charArray[i];
	charArray[i] = charArray[j];
	charArray[j] = temp;
	return charArray.join("");
}

function permute(str, l, r) {
	if (l == r)
		console.log(str);
	else {
		for (var i = l; i <= r; i++) {
			str = swap(str, l, i);
			permute(str, l + 1, r);
			str = swap(str, l, i);
		}
	}
}

var str = "12345"
var n = str.length;
permute(str, 0, n - 1);
