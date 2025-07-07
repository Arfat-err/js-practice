// --BY USING MAP() 
// const arrSquare  = arr.map((num) => {
//     return num*num;
// })
// console.log(arrSquare)



// --BY USING FILTER()
// const arr = [11, 20, 33, 40];
// const evenNumber = arr.filter((num) => {
//     return num%2 !== 0 ? true: false;
// })
// console.log(evenNumber)

// const arr = ["arfat","1056",12,34,"done","submit"]
// let checkString = arr.filter((value) => {
// return typeof(value) === "string" ? true : false ;
// })
// console.log(checkString)



// --BY USING REDUCE() 
// const arr = [1,2,3,4,5,6,7,8];
// let result = arr.reduce((acc,curr,index) => {
//     return acc + curr;
// }, 0)
// console.log(result)



// --BY USING SORT()
// const arr = [5,8,6,4,9,7,10];
// let sortingArr = arr.sort((a,b) => {
//     return a - b;
// });
// console.log(sortingArr);



// --BY USING FOREACH()
// const arr = [12,24,37,40,53,66];
// arr.forEach((value,index) => {
//     console.log(`value ${value}`);
// })



// --BY USING FOR IN LOOP
// const obj = {
//     fName : "Arfat",
//     lName : "Ansari",
//     age : 20,
//     city : "Bhiwandi",
//     fullName : function() {
//         console.log(this.fName, " ", this.lName);
//     }
// }

// for(let variable in obj){
//     console.log(variable,":",obj[variable]);
// }



// --BY USING FOR OF LOOP
// const arr = [1,3,5,6,7,89,43,6,]
// const string = "JavaScript";

// for(let varaible of arr){
//     console.log(varaible)
// }



// --SUM OF THE ARRAY BY USING FOR LOOP
// const arr = [1,2,3,4,5,6,7];
// function getSumArray(arr){
// let sum = 0;
// for (let index=0; index<=arr.length; index++){
//     sum += index;
// }
// return sum;
// }
 
// console.log(getSumArray(arr))

// const arr = [1,2,3,4,5,6,7];
// let sum = 0;

// arr.forEach((value) => {
//   sum += value;
// })

// console.log(sum); // 28