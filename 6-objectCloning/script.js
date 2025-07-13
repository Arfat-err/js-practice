let obj = {
    fname : "arfat",
    age : 20
}
obj.weight = 55;

// let dest = {...obj};
// dest.lname = "Ansari"
// console.log("dest:",dest)

console.log("obj:",obj)

let dest = Object.assign({},obj)
console.log(dest)