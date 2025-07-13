// Compile time error
// Syntax error
// if(true{
//     console.log("this is ture")
// }

// Run time error
// The try statement defines a code block to run (to try).
// try {
// console.log(a)
// }

// The catch statement defines a code block to handle any error.
// catch (e){
//  console.log("something went wrong!",e.meassage);
// }

// The throw statement defines a custom error.
// throw new Error("a is not define")

// The finally statement defines a code block to run regardless of the result.
try{
    console.log(x)
}
catch(e){
    console.log("something went wrong!",e.meassage)
    throw new Error("x is not define")
}
finally{
    console.log("Im always execute")
}