// Promise :
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation was completed successfully.
// rejected: meaning that the operation failed.

// Example 1:

// let promise = new Promise((resolve, reject) => {
//   let promise = true;
//   if (true) {
//     resolve("'promise successfully resolve'");
//   } else {
//     reject("'promise rejected'");
//   }
// })
//   .then((value) => {
//     console.log("resolved promise:", value);
//   })
//   .catch((err) => {
//     console.log("rejected promise:", err);
//   });


//  Example 2: promise chaining

// let promise = new Promise((resolve,reject) => {
//     let data = true;
//     if(data == true){
//     resolve("getting data successfully");
// }else {
//     reject("'something went wrong'");
// }
// }).then(msg => {
//     console.log("promise resolved:",msg);
//     return 1;
// }).then(msg => {
//     console.log("promised resolved second time:",msg)
//     return 2
// }).then(msg => {
//     console.log("promised resolved third time:",msg)
// })


// Example 3: promise all 

// let promise1 = new Promise((resolve,reject) => {
//     let data = true;
//     if(data == true){
//         resolve("resolve successfully");
//     }else {
//         reject("promise rejected");
//     }
// });

// let promise2 = new Promise((resolve,reject) => {
//     let data = true;
//     if(data == true){
//         resolve("resolve successfully");
//     }else {
//         reject("promise rejected");
//     }
// });

// let promise3 = new Promise((resolve,reject) => {
//     let data = true;
//     if(data == true){
//         resolve("resolve successfully");
//     }else {
//         reject("promise rejected");
//     }
// });

// let promiseAl = Promise.all([promise1,promise2,promise3]);
// console.log(promiseAl)