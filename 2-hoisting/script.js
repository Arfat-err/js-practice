// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

// --FUNCTION Hoisting work on the normal function it's doesn't work on the function expression.

// sayMyName("Arfat");
// function sayMyName(name){
//     console.log(name)
// } //Arfat

                    // ----------------

// hello() //shows ReferenceError
// let hello = function() {
//     console.log("Arfat Ansari")
// } 


// --VARIABLE Hoisting work on the var keyword it's doesn't work on the let and coNst.

// console.log(age);
// var age = 20;


// --A callback is a function passed as an argument to another function/ This technique allows a function to call another function. A callback function can run after another function has finished.

// function sayhello (mycallback,fName ,lName){
//     fullName = fName + " " +lName;
//     mycallback(fullName);
// }

// function displayName(fullName){
//     console.log(fullName);
// }
// sayhello(displayName,"Arfat","Ansari"); 

                    // ---------------
       
// function add(a,b,mycallback){
//     let sum;
//     sum = a + b;
//     mycallback(sum);
// }

// function displaySum(sum){
//     console.log("The sum of a and b is:",sum)
// }
// add(10,20,displaySum);

                    // ---------

const obj = {
    fNmae : "Arfat",
    lName : "Ansari",
    printAge : function(age){
        console.log("My age is :",age)
    }
}
 obj.printAge(20);