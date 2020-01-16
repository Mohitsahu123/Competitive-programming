function a(str){
	return capitialize(removeSpace(str));
}

function capitialize(str){
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function removeSpace(str){
	return str.split(" ").join("");
}

