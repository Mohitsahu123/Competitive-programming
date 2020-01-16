var myObj = {
  myMethod: function () {    
    console.log(this)
  }
}

var myFunc = myObj.myMethod
myFunc()