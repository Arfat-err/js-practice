// code 1 
let t1 = performance.now()
for(let i=1; i<=20; i++)
{
 let p = document.createElement("p");
 p.innerText = "This is a para" + i ;
 document.body.appendChild(p);
}

let t2 = performance.now();
console.log(t2-t1);

// code 2 
let t3 = performance.now();
let div = document.createElement("div");
for(let i=1; i<=20; i++){
    let p = document.createElement("p");
    p.innerText = "This is a para" + i;
    div.appendChild(p);
}

document.body.appendChild(div);
let t4 = performance.now();
console.log(t4-t3);

// code 3
let t5 = performance.now();
let fragment = document.createDocumentFragment();
for (let i=0; i<=20; i++){
    let p = document.createElement("p");
    p.innerText = "This is a para" + i;
    fragment.appendChild(p);
}
document.body.appendChild(fragment);
let t6 = performance.now();
console.log(t6-t5);