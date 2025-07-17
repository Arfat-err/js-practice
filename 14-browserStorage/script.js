// Browser storage in JavaScript refers to the mechanisms provided by web browsers to store data locally on the user's device, so it can be used later by websites or web applications without needing to fetch it from the server again.

// JavaScript provides three main types of browser storage:
// 1. Cookies
// 2. localStorage
// 3. sessionStorage

// 1. Cookies

document.cookie = "fName = Arfat expires=Fri, 31 Dec 2025 23:59:59 UTC; path=/"
console.log(document.cookie)
// 2. localStorage

localStorage.setItem("fName","Arfat");
localStorage.setItem("lName","Ansari");
console.log(localStorage.length)
console.log(localStorage.key(1))
console.log(localStorage.getItem("fName") + " " + localStorage.getItem("lName"));
// localStorage.clear()


// 3. sessionStorage

sessionStorage.setItem("fName","Arfat");
sessionStorage.setItem("lName","Ansari");
console.log(sessionStorage.length)
console.log(sessionStorage.key(1))
console.log(sessionStorage.getItem("fName") + " " + sessionStorage.getItem("lName"));
// sessionStorage.clear()