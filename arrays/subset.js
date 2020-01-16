

  function findSubsets(nums) {
    var subsets = new Set();
    // start by adding the empty subset
    subsets.add([]);
    for ( var currentNumber of nums) {
      // we will take all existing subsets and insert the current number in them to
      // create new subsets
      var n = subsets.size;
      for (var i = 0; i < n; i++) {
        // create a new subset from the existing subset and 
        // insert the current element to it
        var set = new Set([...subsets][i]);
        set.add(currentNumber);
        subsets.add([...set]);
      }
    }
    return subsets;
  }

  
   var result = findSubsets([1, 3 ]);
    console.log("Here is the list of subsets: ", result);

   var result = findSubsets([1, 5, 3 ]);
   console.log("Here is the list of subsets: ", result);
   console.log("Here is the list of subsets: ", findSubsets([1,0,1,0]));
  
