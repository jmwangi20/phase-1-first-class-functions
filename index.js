// create a function that receives afunction as a parameter 
function receivesAFunction(cb){
    return cb()
}

function returnsANamedFunction(){
    return function namedFunction(){
        return "This function returns a named function"
    }
}


function returnsAnAnonymousFunction(){
    return function (){
      return console.log("This is the value of the returned function")
    }
  }


