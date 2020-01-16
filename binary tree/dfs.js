function dfs(root){
	if(!root) return 0;
	var leftDepth = 0, rightDepth =0;
	if(root.left) leftDepth =dfs(root.left);
	if(root.right) rightDepth =dfs(root.right);
	return Math.max(leftDepth, rightDepth) + 1;
}

