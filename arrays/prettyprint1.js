function prettyPrint(A){
	var a = console.log;
	var s = 2 * A - 1; 
	var x = 2;
	for(var i = 0; i < s; i++){
		var str = "";
		var mid = Math.floor((s / 2) + 1);
		if(i > mid){
			x++;
		}
		for(var j = 0; j < s; j++){
			 
			if(i == 0 && j >= 0) str += A;
			else if(j == 0) str += A;
			else if(j == s-1) str += A;
			else if(i > 0 && i < s-1 && j < s-1 ) {
				if(i < mid)
					str +=i-j+(s/2);
				else
					str += x;
			}
			else if(i == s-1) str += A;

			//else str +="*";
		}
		a(str);

	}
}

prettyPrint(4);