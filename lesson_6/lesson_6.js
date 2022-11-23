
// const key = "firstName";

// const person = {
//     [key]: "Alex",
    
// } 



// person.age = 56;

// person ["city-name"] = "NN";

// // console.log(person.firstName);
// // console.log(person["city-name"]);

// // console.log(person.age);

// person.age = "26";

// // console.log(person.age);

// // delete person.age;
// // console.log(person.age);

// const sayHello = function (){
//     console.log("Привет Я ALEX");
// }
// person.sayHello = sayHello;
// person.sayHello()

// const myFavoriteFilm = {
//     name: "Pi",
//     year: 1998,
//     creater: "D. Aronofski",
//     country: "USA",
//     sayName: function showName(name) {
//         console.log(myFavoriteFilm.name);
//     }
// }
// myFavoriteFilm.customs = "3200000$"
// delete myFavoriteFilm.year;

// console.log(myFavoriteFilm);

// myFavoriteFilm.sayName()

// const number = 100;

// console.log(number.toString());

// const str = "hello world";
// str [0] = "H";

// console.log(str);



const isUpperCase = (str, n) => {
    if (n > str.length) {
        return "Ошибка, такого индекса нет"
    }
    if (str [n] === str [n].toUpperCase()) {
        return true
    }
    return false
}

console.log(isUpperCase("AbcdEGRT", 0));
console.log(isUpperCase("GhhjsHHHSL", 90));
