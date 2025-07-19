// Destructuring :
// Destructuring in JavaScript is a powerful feature that lets you unpack values from arrays or properties from objects into distinct variables in a concise and readable way.

//  1. Array Destructuring

// const arr = [1,2,3]
// const [a,b,c] = arr;
// console.log(a,b,c)


// 2. Object Destructuring

// const user = { name : "Arfat" , age : 20};
// const {name , age} = user;
// console.log(name, age)


//  3. Nested Destructuring

// const student = {
//     name : "Arfat",
//     marks : {
//         maths : 50,
//         science : 46
//     }
// };

//  const { studMarks: { subMath , subScience } } = student;
//  console.log(subMath , subScience)

            // ------------------

//  const student = {
//   name: "Ali",
//   marks: {
//     math: 95,
//     science: 90
//   }
// };

// const { marks: { math, science } } = student;
// console.log(math, science);


//  4. Rest with Destructuring

// const [first, ...spread] = [1, 2, 3, 4];
// console.log(first); // 1
// console.log(spread); // [2, 3, 4]