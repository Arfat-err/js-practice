// With the HTML DOM, JavaScript can access and change all the elements of an HTML document.
// getElementById is a method, while innerHTML is a property.

// The HTML DOM (Document Object Model)
// When a web page is loaded, the browser creates a Document Object Model of the page.

// The HTML DOM model is constructed as a tree of Objects:

// let div = document.querySelector("div");
// let br = document.createElement("br")
// div.appendchild(br);
// div.prepend(br)
// div.before(br)
// div.after(br)
// div.remove(br)

        // -----------------

// const fragment = document.createDocumentFragment();
// const li = fragment.appendChild(document.createElement("section")).appendChild(document.createElement("ul")).appendChild(document.createElement("li"));
// li.textContent = "hello world";

// document.body.appendChild(fragment);

        // ------------------
// const ul = document.createElement("ul");
// const fragment = document.createDocumentFragment();
// const browsers = ["chrome","safari","edge","firefox"];

// browsers.forEach((browser) => {
//     const li = document.createElement("li");
//     li.textContent = browser;
//     ul.appendChild(li);
// });

// ul.appendChild(fragment);
// document.body.appendChild(ul); // ✅ add to DOM

        // ---------------------

// const btn = document.createElement("button");
// btn.innerText = "click me!";
// btn.style.backgroundColor = "red";
// btn.style.color = "white";
// document.body.prepend(btn)
         

        // ------------------

// let para = document.querySelector("p")
// para.classList.add("new-class");
// para.classList.remove("old-class")