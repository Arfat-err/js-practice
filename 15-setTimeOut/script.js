// setTimeout() functions used to schedule code execution.

// Runs a function once after a delay (in milliseconds).

 let setTime = setTimeout(()=>{
    alert("Hello")
},1000)
clearTimeout(setTime)
// setInterval() functions used to schedule code execution.

// Runs a function repeatedly at regular intervals (in milliseconds).

let setInterval = setInterval(()=> {
    alert("Hello i'm setInterval")
},2000)
clearInterval(setInterval)