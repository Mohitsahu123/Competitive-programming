var longestCommonPrefix = function(strs) {
    if(!strs || !strs.length) return "";
    var prefix = strs[0];
    for (var i = 0;i < strs.length ; i++){
        console.log("@@ strs[i] prefix ", strs[i], prefix);
        while(strs[i].indexOf(prefix) !=0){
        console.log("@@ prefix ", prefix);
            prefix = prefix.substr(0,prefix.length -1 );
            if(prefix === "") return "";
        }
        console.log("## prefix ", prefix);

    }
    return prefix;
};

