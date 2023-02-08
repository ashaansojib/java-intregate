// list of this content about below:
/*
1. document.getElementById("id-name");
2. document.getElementsByTagName("h1");
3. document.getElementsByClassName("class name");
4. document.createElement("that you want to create");
5. document.querySelectorAll("uses: .class or id #main or single tag");
6. document.getElementById("id name").classList.add("that class u want to add");
7. append = functionName.appendChild(const name);
8. innerText = idName.innerText = "change directly inner text";
9. innerHTML = name.innerHTML = "div, you can add here ay html elements";
0. classList = name.classList.add("that want to add");
1. classList = name.classList.remove("that you want to remove");
2. getAttribute = name.getAttribute();
3. setAttribute = name.setAttribute("attributes", "value");
4. 
*/

// how to work id in html to javascript:
/*
document.getElementById this operation only access id mention element. It will work only one thing. You can change add remove one thing.
*/
const main = document.getElementById("main");
main.style.margin = "0 auto";
main.style.width = "990px";

// how to work classname in html to javascript:
/*
document.getElementsByClassName it will work with for of loop and it change all same thing.
*/

const blogs = document.getElementsByClassName("blog");
for(const blog of blogs){
    blog.style.backgroundColor = "#ddd";
    blog.style.margin = "10px";
    blog.style.padding = "10px";
}

// how to work taglist in javascript
/*
taglist can modify all same name desing and anthing it will work as class name.
*/
const title = document.getElementsByTagName("h2");
for(const h2 of title){
    h2.style.color = "red";
    h2.style.textTransform = "uppercase";
}

const para = document.getElementsByTagName("p");
for(const p of para){
    p.style.fontSize = "18px";
    p.style.color = "blue";
}

// how to works querySelector or querySelectorAll
const newArt = document.querySelectorAll(".info");
for(const info of newArt){
    info.style.border = "1px solid";
}

// create a new element with javascript: i can change and add new elements and tag are added.
const newPost = document.createElement("h2");
document.getElementById("main").classList.add("blog");
newPost.innerText = "this is new model post";

const newDes = document.createElement("p");
newDes.innerText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo accusantium quidem dolorem similique autem voluptatibus debitis tempore laboriosam laborum, voluptas sunt harum possimus nam porro consequuntur quas officiis vel! Iusto?";

const added = document.getElementById("main");

added.appendChild(newPost);
added.appendChild(newDes);
// classlist add and remove system
const bgChange = document.getElementById("main");
bgChange.classList.add("bg-change");
// bgChange.classList.remove("bg-change")