var myObj = {

	alpha: "gggg",
  myMethod: function () { 
     var self = this;
    myFunc()
    
    function myFunc () {
      console.log(this)
      console.log(self.alpha)
    }
  }
}

myObj.myMethod()