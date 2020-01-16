

// User defined class 
// to store element and its priority 
class QElement { 
	constructor(element, priority) 
	{ 
		this.element = element; 
		//this.priority = element; 
	} 
} 

// PriorityQueue class 
class PriorityQueue { 

	// An array is used to implement priority 
	constructor(elements) 
	{ 
		this.items = []; 
		var i = -1 ;
		while(++i < elements.length){
			this.add(elements[i]);
		}
	} 

	// functions to be implemented 
	// enqueue(item, priority) 
	// dequeue() 
	// front() 
	// isEmpty() 
	// printPQueue() 

	// enqueue function to add element 
	// to the queue as per priority 
	add(element) 
	{ 
		// creating object from queue element 
		//var qElement = new QElement(element, element); 
		var contain = false; 
		// iterating through the entire 
		// item array to add element at the 
		// correct location of the Queue 
		for (var i = 0; i < this.items.length; i++) { 
			if (this.items[i] > element) { 
				// Once the correct location is found it is 
				// enqueued 
				this.items.splice(i, 0, element); 
				contain = true; 
				break; 
			} 
		} 

		// if the element have the highest priority 
		// it is added at the end of the queue 
		if (!contain) { 
			this.items.push(element); 
		} 
	} 

	// dequeue method to remove 
	// element from the queue 
	poll() 
	{ 
		// return the dequeued element 
		// and remove it. 
		// if the queue is empty 
		// returns Underflow 
		if (this.isEmpty()) 
			return "Underflow"; 
		return this.items.shift(); 
	}

	// isEmpty function 
	isEmpty() 
	{ 
		// return true if the queue is empty. 
		return this.items.length == 0; 
	} 

	size() 
	{ 
		return this.items.length; 
	} 


 


} 


  var ropes = [2, 2, 3, 3];
  var ropes2 =  [1, 2, 10, 5, 35, 89];
  var pq = new PriorityQueue(ropes);
  console.log(" pq ", pq);
  var totalCost = 0;
  while (pq.size() > 1) {
    var cost = pq.poll() + pq.poll();
    pq.add(cost);
    totalCost += cost;
  }
   

   console.log("totalcost ", totalCost);
