
function Node(val) {
	this.value = val;
	this.left  = null;
	this.right = null;
}



var flatten = function(root) {
     if(root == null) return;
        
        var left = root.left;
        var right = root.right;
        console.log("*******************")
        console.log(" left ",left);
        console.log(" right ",right);
        console.log("*******************")
        flatten(left);
        flatten(right);
        
        root.right = left;
        root.left = null;
         console.log("@@@@ root ",root);
        while(root.right != null) root = root.right;
        console.log("###### right ",right);
        root.right = right;
};

        var tree = new Node(1); 
        tree.left = new Node(2); 
        tree.right = new Node(5); 
        tree.left.left = new Node(3); 
        tree.left.right = new Node(4); 
        tree.right.right = new Node(6); 

console.log(JSON.stringify(tree, null,'\t'));
flatten(tree)
console.log(JSON.stringify(tree, null,'\t'));
