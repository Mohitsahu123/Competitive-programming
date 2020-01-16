
function Graph(){
	this.adjList = {};
}


Graph.prototype.addVertex = function(vertex){
	this.adjList[vertex] = [];
}


Graph.prototype.addEdge = function(vertex1, vertex2){
	this.adjList[vertex1].push(vertex2);
}


Graph.prototype.dfs = function(){
	const nodes = Object.keys(this.adjList);
	const visited = {};
	for(let i = 0; i < nodes.length; i++){
		const node = nodes[i];
		this._dfsUtil(node, visited);
	}
}


Graph.prototype._dfsUtil = function(vertex, visited){
	if(!visited[vertex]){
		visited[vertex] = true;
		console.log(vertex, visited);
		const neighbours = this.adjList[vertex];
		for(let i = 0 ; i < neighbours.length; i++){
			const neighbour = neighbours[i];
			this._dfsUtil(neighbour, visited);
		}
	}
}


Graph.prototype.detectCycle = function(){
	const nodes = Object.keys(this.adjList);
	const visited = {};
	const recStack = {};

	for(let i = 0; i < nodes.length; i++){
		const node = nodes[i];
		if(this._detectCycleUtil(node, visited, recStack))
			return "There is a cycle";
	}
	return "No Cycle!";
}


Graph.prototype._detectCycleUtil = function(vertex, visited, recStack){
	if(!visited[vertex]){
		visited[vertex] = true;
		recStack[vertex] = true;

		const neighbours = this.adjList[vertex];

		for(let i = 0 ; i < neighbours.length; i++){
			const currentNode = neighbours[i];
			console.log("parent ",vertex, "Child", visited);
			if(!visited[currentNode] && this._detectCycleUtil(currentNode, visited, recStack)){
				return true;
			}else if (recStack[currentNode]){
				return true;
			}
		}
	}

	recStack[vertex] = false;
	return false;
}

Graph.prototype.createVisitedObject = function(){

  let arr = {};
  for(let key of Object.keys(this.adjList)){
    arr[key] = false;
  }
  return arr;

}

Graph.prototype.doesPathExist = function(firstNode, secondNode){
  // we will approach this BFS way
  let path = [];
  let visited = this.createVisitedObject();
  let q = [];
  visited[firstNode] = true;
  q.push(firstNode);
  while(q.length){
    let node = q.pop();
    path.push(node);
    let elements = this.adjList[node];
    if(elements.includes(secondNode)){
      console.log(path.join('->'))
      return true;
    }else{
      for(let elem of elements){
        if(!visited[elem]){
          visited[elem] = true;
          q.unshift(elem);
        }
      }
    }
  }
  return false;
}






const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");

graph.addEdge("A", "B");
graph.addEdge("D", "E");
graph.addEdge("C", "E");
graph.addEdge("A", "D");
graph.addEdge("A", "C");
graph.addEdge("E", "B");
graph.addEdge("D", "B");


console.log(graph);

// Graph {
//   adjList:
//    { A: [ 'B', 'D', 'C' ],
//      B: [],
//      C: [ 'E' ],
//      D: [ 'E', 'B' ],
//      E: [ 'B' ] } }


console.log(graph.dfs());

// A { A: true }
// B { A: true, B: true }
// D { A: true, B: true, D: true }
// E { A: true, B: true, D: true, E: true }
// C { A: true, B: true, D: true, E: true, C: true }

console.log(graph.detectCycle());

// parent  A Child { A: true }
// parent  A Child { A: true, B: true }
// parent  D Child { A: true, B: true, D: true }
// parent  E Child { A: true, B: true, D: true, E: true }
// parent  D Child { A: true, B: true, D: true, E: true }
// parent  A Child { A: true, B: true, D: true, E: true }
// parent  C Child { A: true, B: true, D: true, E: true, C: true }
// No Cycle!

console.log(graph.doesPathExist("A","B"));

