// "async and await make promises easier to write"

// async makes a function return a Promise
// await makes a function wait for a Promise

// async function myDisplay() {
//   let myPromise = new Promise(function(resolve, reject) {
//       resolve("I love You !!");
//       reject("I hate You !!");
//   });
//   document.getElementById("demo").innerHTML = await myPromise;
// }

// myDisplay();


// async function myDisplay() {
//   let myPromise = new Promise(function(resolve) {
//     setTimeout(function() {resolve("I love You !!");}, 3000);
//   });
//   document.getElementById("demo").innerHTML = await myPromise;
// }

// myDisplay();

                // ---------------------------

async function getData() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await response.json();
    console.log(data)
}

getData()