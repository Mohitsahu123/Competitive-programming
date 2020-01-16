var xyz = {
  name : "mohit",
  age : 30
}


function eee(){
  console.log("hello ");
}



module.exports = eee;

(function() {
  console.log("require.main  ", require.main)
  console.log(" module ",  module)
  console.log(" require.main == module ",  require.main == module)
 
}());