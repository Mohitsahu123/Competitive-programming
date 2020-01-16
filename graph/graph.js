'use strict';

// create a graph class 
class Graph { 
	// defining vertex array and 
	// adjacent list 
	constructor(noOfVertices) 
	{ 
		this.noOfVertices = noOfVertices; 
		this.AdjList = {}; 
	} 

	// functions to be implemented 

	// addVertex(v) 
	// addEdge(v, w) 
	// printGraph() 

	// bfs(v) 
	// dfs(v) countPairs

	// add vertex to the graph 
	addVertex(v) 
	{ 
		// initialize the adjacent list with a 
		// null array 
		this.AdjList[v] = []; 
	}

	// add edge to the graph 
	addEdge(v, w) 
	{ 
		// get the list for vertex v and put the 
		// vertex w denoting edge between v and w 
		this.AdjList[v].push(w); 

		// Since graph is undirected, 
		// add an edge from w to v also 
		this.AdjList[w].push(v); 
	}

	// Prints the vertex and adjacency list 
	printGraph() 
	{ 
		// get all the vertices 
		var get_keys = Object.keys(this.AdjList); 

		// iterate over the vertices 
		for (var i of get_keys) 
		{ 
			// great the corresponding adjacency list 
			// for the vertex 
			var get_values = this.AdjList[i]; 
			var conc = ""; 

			// iterate over the adjacency list 
			// concatenate the values into a string 
			for (var j of get_values) 
				conc += j + " "; 

			// print the vertex and its adjacency list 
			console.log(i + " -> " + conc); 
		} 
	} 

	// function to performs BFS 
	bfs(startingNode) 
	{ 

		// create a visited array 
		var visited = []; 
		for (var i = 0; i < this.noOfVertices; i++) 
			visited[i] = false; 

		// Create an object for queue 
		var q = []; 

		// add the starting node to the queue 
		visited[startingNode] = true; 
		q.push(startingNode); 

		// loop until queue is element 
		while (q.length) { 
			// get the element from the queue 
			var getQueueElement = q.shift(); 

			// passing the current vertex to callback funtion 
			console.log(getQueueElement); 

			// get the adjacent list for current vertex 
			var get_List = this.AdjList[getQueueElement]; 

			// loop through the list and add the element to the 
			// queue if it is not processed yet 
			for (var i in get_List) { 
				var neigh = get_List[i]; 

				if (!visited[neigh]) { 
					visited[neigh] = true; 
					q.push(neigh); 
				} 
			} 
		} 
	}

	// Main DFS method 
	dfs(startingNode) 
	{ 

		var visited = []; 
		for (var i = 0; i < this.noOfVertices; i++) 
			visited[i] = false; 

		this.DFSUtil(startingNode, visited); 
	} 

	// Recursive function which process and explore 
	// all the adjacent vertex of the vertex with which it is called 
	DFSUtil(vert, visited) 
	{ 
		visited[vert] = true; 
		console.log(vert); 

		var get_neighbours = this.AdjList[vert]; 

		for (var get_elem of get_neighbours) { 
			if (!visited[get_elem]) 
				this.DFSUtil(get_elem, visited); 
		} 
	} 

} 

// Using the above implemented graph class 
var g = new Graph(6); 
var vertices = [ 'A', 'B', 'C', 'D', 'E', 'F' ]; 

// adding vertices 
for (var i = 0; i < vertices.length; i++) { 
	g.addVertex(vertices[i]); 
} 

// adding edges 
g.addEdge('A', 'B'); 
g.addEdge('A', 'D'); 
g.addEdge('A', 'E'); 
g.addEdge('B', 'C'); 
g.addEdge('D', 'E'); 
g.addEdge('E', 'F'); 
g.addEdge('E', 'C'); 
g.addEdge('C', 'F'); 

// prints all vertex and 
// its adjacency list 
// A -> B D E 
// B -> A C 
// C -> B E F 
// D -> A E 
// E -> A D F C 
// F -> E C 
g.printGraph();

// prints 
// BFS 
// A B D E C F 
console.log("BFS"); 
g.bfs('A');

// prints 
// DFS 
// A B C E D F 
console.log("DFS"); 
g.dfs('A'); 

