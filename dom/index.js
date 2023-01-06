// // console.log("script init");
// // console.log(window.location);

// const addButton = document.getElementById ("add_button");
// addButton.textContent = "Создать новый элемент"

// console.log(addButton);

// // const buttonsCol = document.getElementsByTagName ("button");
// // console.log(buttonsCol [0]);

// // const listItem = document.querySelector ("li + .active");
// // const listItems = document.querySelectorAll (".list_item")
// // console.log(listItem, listItems);


// // const header = document.querySelector ("header");
// // header.innerHTML = "<h3> NEW TITLE </h3>"

// // console.log(header.innerHTML);

// // const footer = document.querySelector ("footer");
// // footer.outerHTML = "<div><p>HELLO FOOTER</p></div>"

// const addButton = document.getElementById ("add_button");

// addButton.style.color = "red";
// addButton.style.width = "400px";

// const list = document.querySelector("ul");

// list.classList.add("active");

// const newListItem = document.createElement("li");

// newListItem.className = "list_item";
// newListItem.textContent = "Четвертый элемент";


// console.log(newListItem);

// const list = document.querySelector("ul");
// list.append(newListItem);

// const themeBTN = document.getElementById ("theme_button");

// const first = function () {
//     console.log("Hello World");
// };
// const second = function () {
//     console.log("Bye World");
// };

// themeBTN.onclick = function () {
//     first ();
//     second ();
// };


// const themeBTN = document.getElementById ("theme_button");

// const themeToogle = function (event) {
//     console.log(event);
//     const body = document.body

//     body.classList.toggle ("light_theme");
//     if (body.classList.contains("light_theme")) {
//     this.textContent = "Темная тема";
//     } else {
//         this.textContent = "Светлая тема";
//     }
// };
// themeBTN.addEventListener ("click", themeToogle);


const content  = document.querySelector (".content");
content.addEventListener ("click", (event)=> 
console.log(event.target, event.currentTarget));

const list = document.querySelector (".list");
list.addEventListener ("click", ()=> console.log("list"));

const listItems = document.querySelectorAll (".list_item");

for (let item of listItems) {
    item.addEventListener ("click", (event)=> event.stopPropagation());
};

