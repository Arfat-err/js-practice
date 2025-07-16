// What is a closure?
// A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function’s variables — a scope chain.

// The closure has three scope chains:

// it has access to its own scope — variables defined between its curly brackets
// it has access to the outer function’s variables
// it has access to the global variables


function myFirstName(){
    let fName = "Arfat";
    function myLastName(){
        let lName = "Ansari";
        console.log("the Full Name is:", fName + " " + lName);
    }
    return myLastName
}

let printName = myFirstName()

printName()
