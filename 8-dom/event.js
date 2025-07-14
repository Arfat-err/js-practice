// The change in the state of an object is known as an event
// Events are fired to notify code of "interesting changes" that may affect code execution.

// there are three type of events handlers 
// 1) inline event
// 2) js node event
// 3) Event Listeners 

const btn = document.querySelector("button");
// btn.addEventListener("onclick",(e) => {
//     document.body.style.backgroundColor = "grey"
//     console.log("arfat");
    // let flag = 0;
    // if(flag == 0){
    //     document.body.style.backgroundColor = "black"
    //     btn.style.color = "white";
    //     flag = 1;
    //     btn.innerText = "Light Mode"
    // }else {
    //     document.body.style.backgroundColor = "white";
    //     btn.style.color = "black";
    //     flag = 0;
    //     btn.innerText = "Dark Mode"        
    // }
// });
let flag = 0;
btn.addEventListener("click",(e)=>{
    console.log("arfat")
    if(flag == 0){
        document.body.style.backgroundColor = "black";
        btn.style.color = "white";
        btn.innerText = "Dark Mode";        
        flag = 1;

    } else{
        document.body.style.backgroundColor = "white"
        btn.style.color = "black";
        btn.innerText = "Light Mode"
        flag = 0;
    }
})