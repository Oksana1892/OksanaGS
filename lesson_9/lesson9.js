// console.log(this);

// console.log(globalThis);

// var TEST = "TEST"
// console.log(this.TEST);

// function test() {
//     console.log(this);
// }
// test();

// function example () {
//     console.log(this); 
// }

// const test = () => {
//     console.log(this);
// }

// test()

// function example() {console.log(this);}
// const testObject = {
// testMethod: test,
// };
// testObject.testMethod();

// const examleObj = {
//     exampleMetod:test,
//     exampleValue: "@###",
// };

// examleObj.exampleMetod();



// const persona = {
//     name: "Alex",
//     age: "26",
//     getName:function () {
//         console.log(this.name);
//     }
// }

// persona.getName ();

// const town = {
//     name: "Moscow",
//     population: "25 mln",
//     getName: function() {
//         console.log(this.name);
//         return this.name;
//     },
//     getPopulation: function() {
//         console.log(this.population);
//         return this.population;
//     },

//     setAnyValue: function (key, value) {
//         this [key] = value;

//     }
// }

// town.getPopulation();
// town.getName();
// town.setAnyValue("name", "London");
// town.setAnyValue("country", "UK");
// town.getName();

// console.log(town);

// const user1 = {name:"Vasya", surName: "Ivanov"};
// const user2 = {name:"Petya", surName: "Semenov"};
// const user3 = {name:"Alex"};

// function greeting (phrase, smile) {
//     console.log(`${this.name} ${this.surName} : ${phrase} : ${smile}` );
// };

// greeting.call (user1, "Привет", "^_^");
// greeting.apply (user2, ["Hello", "*_*"]);
// greeting.call (user3, "Привет", ")))");


// const greetingUser1 = greeting.bind (user1, "Привет", "^_^");

// greetingUser1();

// const greetingUser2 = greeting.bind (user2, "Hello");
// const greetingUser22 = greeting.bind (user2, "Bye");

// const greetingUser22 = greeting.bind (user2, "Привет", "=))");
// greetingUser22();
// greetingUser2("*_*");
// greetingUser2(":)");
// greetingUser2("((");

// greetingUser22("*_*");
// greetingUser22(":)");
// greetingUser22("((");

// const town = {
//         name: "Moscow",
//         population: "25 mln",
//         getName: function() {
//             console.log(this.name);
//             return this.name;
//         },
//         getPopulation: function() {
//             console.log(this.population);
//             return this.population;
//         },
//         setAnyValue: function (key, value) {
//             this [key] = value;
//         }
//     }

//     const townTwo = {
//         name: "London",
//         population: "5 mln"
//     }
//     town.getName.call(townTwo);
//     town.getPopulation.call(townTwo);

//     const bound = town.setAnyValue.bind(townTwo);
//     bound ("name", "Paris")
//     bound ("country", "France")

//     console.log(townTwo);

// const cubeValue = (a) => {
//     return (b, c) => {
//         return a * b * c;
//     };
// };
// const first = cubeValue(10);
// console.log(first(10, 10));
// console.log(first(2, 5));
// console.log(first(5, 7));

// const second = cubeValue(4);
// console.log(second(10, 10));
// console.log(second(2, 5));
// console.log(second(5, 7));

// const test = (a,b,c) => a * b * c;
// console.log(test(4, 10, 10));
// console.log(test(4, 2, 5));
// console.log(test(4, 5, 7));


// const cubeValue = (a, b, c) => a * b * c;

// console.log(cubeValue(1, 3, 3));

// const cubeCaryValue = (a) => {
//     return (b) => {
//         return (c) => {
//             return a * b * c;
//         }
//     }
// }
// console.log(cubeCaryValue(1)(3)(3));

// const twoArgs = cubeCaryValue(1)(3);
// console.log(twoArgs(3));
// console.log(twoArgs(4));
// console.log(twoArgs(5));

// const cubeCaryValueVar2 = (a) => (b) => (c) => a * b * c;
// console.log(cubeCaryValueVar2(1)(3)(3));



   