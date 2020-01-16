

function isSymmetric(root) {
        if(root == null) return true;
        return magic(root.left, root.right);
}

function magic(left,  right){
        if(left == null && right == null) return true;
        if(left == null || right == null || left.val != right.val) return false;
        return (left.val == right.val) && 
            magic(left.left, right.right) && 
            magic(left.right, right.left);
    }