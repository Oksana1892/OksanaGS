// const user = {
//     name: "Alex"
// };

// console.log(user);

// const arr = [1, 2];
// console.log(arr);

// console.log(new String());

// const russian = {
//     country: "Russia",
//     city: "NN",
    
// };

// const people = {
//     name: "Alex",
//     age: 26,
//     __proto__: russian,
// };



// console.log(people.__proto__);

// let animal = {
//     jumps: "Прыжок!"
//     };
    
//     let rabbit = {
//     __proto__: animal,
//     jumps: "Заяц прыгнул!"
//     };
    
//     delete animal.jumps;
// console.log( animal.jumps );   

// const name = "Alex";

// const user = {
//     name
// };

// console.log(user);

// function CreateUser (userName, userAge) {
//     this.name = userName;
//     this.age = userAge;
//     this.sayHi = function () {
//         console.log(`Привет! меня зовут ${this.name}`);
//     };
// };

// CreateUser.prototype.sayAge = function () {
//     console.log(`Мне ${this.age}`);

// }

// const firstUser = new CreateUser ("Alex", 26);
// const secondUser = new CreateUser ("Tony", 24);
// const thirdUser = new CreateUser ("Ivan", 15);

// console.log(firstUser);
// console.log(secondUser);
// console.log(thirdUser);

// secondUser.sayHi();
// secondUser.sayAge();

// function CreatePostCard (from, to) {
//     this.from = from;
//     this.to = to;
//     this.show = function () {
//         console.log(`Открытка от ${this.from} для ${this.to}`);
//     };
// };

// CreatePostCard.prototype.setForm = function (from) {
//     this.from = from
// };

// const firstPost = new CreatePostCard ("Alex", "Lisa");
// const secondPost = new CreatePostCard ("Tony", "Kate");

// firstPost.show();
// secondPost.show();

// firstPost.setForm ("Ivan");
// firstPost.show();

class People {
    constructor (name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName () {
        return `${this.name} : ${this.surname}`
    };
};

// const firstPeople = new People ("Alex", "Ivanov");

// console.log(firstPeople.getFullName());

class Worker extends People {
    constructor (name, surname, rate, day) {
        super (name, surname);
        this.day = day;
        this.rate = rate;
    }

    getSallary () {
        return `${this.getFullName()} получил ${this.rate * this.day}`;
    }
}

const firstWorker = new Worker ("Alex", "Petrov", 500, 20);
const secondWorker = new Worker ("Tony", "Ivanov", 700, 25);


console.log(firstWorker.getSallary());

console.log(secondWorker.getSallary());