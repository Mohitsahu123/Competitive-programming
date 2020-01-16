var invertTree = function(root) {
     if (root == null) {
        return null;
    }
    var right = invertTree(root.right);
    var left = invertTree(root.left);
    root.left = right;
    root.right = left;
    return root;
};