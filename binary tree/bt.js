function Node(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

function getNode(data) {
  return {
    data,
    left: null,
    right: null,
  };
}


// function insertNode(tree, value) {
//     var node = tree,
//         key;
// 		console.log("**********************")
//         console.log(" tree ",  tree)
//         console.log(" value ",  value)
//         console.log("tree left", tree.left)
//         console.log("tree right", tree.right)
//     while (node.value !== value) {
//     	if(!tree.left) key = 'left';
//     	else if(!tree.right)  key = 'right';
//     	else {
//     		key = 'left'
//     	}
// 		console.log("key ", key);
//        // key = value < node.value ? 'left' : 'right';
//          if (!node[key]) {
//              node[key] = new Node(value);
//              break;
//          }
//          node = node[key];
//     }
//     return tree;
// }

function insert(node, data) {
    const currentNode = node;
    if (currentNode.data > data) {
      if (currentNode.left === null) {
        currentNode.left = getNode(data);
      } else {
        insert(currentNode.left, data);
      }
    } else if (currentNode.right === null) {
      currentNode.right = getNode(data);
    } else {
      insert(currentNode.right, data);
    }
    return currentNode;
  }

// var array = [8, 10, 12, 5, 3, 6],
//     tree = array.reduce((t, v) => t ? insertNode(t, v) : new Node(v), null);

// console.log(JSON.stringify(tree, null,2));

var array = [1,2,5,3,4,null,6],
    tree = array.reduce((t, v) => t ? insert(t, v) : new Node(v), null);

console.log(JSON.stringify(tree, null,'\t'));

/*		1
	   / \
	      2
	       \
		    5  
		   / \
		  3   6
		  \
		   4
*/