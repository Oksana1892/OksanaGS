// function showMessage (message) {
//     console.log(message);
// }

// showMessage ("Hello")
// showMessage ("Hi")
// showMessage ("Привет")
// showMessage ("Добрый день")

// function sum (a, b) {
//     return (a + b);
    
// }

// const result = sum (3, 5)

// console.log(result);
// console.log(sum (4, 6));

// function positiveSum (a, b) {
//     if (a > 0 && b > 0) {
//         return a + b;
//     }
//     return "Ошибка вычисления"
// }
// console.log(positiveSum (2, 3));
// console.log(positiveSum (-2, 3));

// function getName () {
//     const userName = "Alex";
//     return userName;
// }

// function getuserName () {
//     const userName = "Ivan";
//     return userName;
// }

// console.log(getName());
// console.log(getuserName());

// const name = "Alex";

// function sayHello (message = "Hello") {
//     const name ="Ivan";
//     console.log(`${message} - ${name} !!`);
// }

// sayHello();
// sayHello("привет")

// let name = "Alex";

// function sayHello (message = "Hello") {
//     name ="Ivan";
//     console.log(`${message} - ${name} !!`);
// }

// console.log(name);
// sayHello();
// console.log(name);

// let a = 0;

// function sum (b) {
//     const result = a + b;
//     a += 1;
//     console.log(result);
// }
// sum(2);
// sum(2);



// function sayHello (userName = "Гость") {
//     console.log(`Hello ${userName}`);
// }

// sayHello("Ivan")
// sayHello()

// function stepen (a, b = 1) {
//     return (a ** b);
// }

// console.log(stepen (2));
// console.log(stepen(2, 3));

// const sayHello = function (name) {
//     console.log(`Hello ${name}`);
// };


// const funcExample = function (callback) {

//     for (let i = 0; i < 10000000000; i += 1) {}
//     callback("Ivan");
// }

// funcExample(sayHello)
 
// sum(1, 2)

// function sum (a, b) {
//     console.log(a + b);
// }

// multiply(3, 4)

// const multiply = function (a, b) {
//     console.log(a * b);
// }

// const getName = (name) => `Name - ${name}`

// console.log(getName("Alex"));
// console.log(getName("Ivan"));

// const getName = (name) => {
//     return `Name - ${name}`
// };

// console.log(getName("Alex"));
// console.log(getName("Ivan"));

// const quadro = a => a ** 2;

// console.log(quadro(3));

// const showString = (str, n) => {

//     for (let i = 0; i < n; i+=1) {
//         console.log(str);
//     }  
// }
// showString("Hello", 2);
// showString("Hello world", 3)

// const isVowel = (letter) => {
//     if (letter === "а" ||
//         letter === "e" ||
//     letter === "ё" ||
//     letter === "и" ||
//     letter === "о" ||
//     letter === "у" ||
//     letter === "э" ||
//     letter === "ю" ||
//     letter === "я" ||
//     letter === "ы") {
//        return true;
    
//     } 
//         return false;
// }
//  console.log(isVowel ("е"));
//  console.log(isVowel ("д"))

 const isVowel = (letter) => {
    const arr = ["а", "e", "ё", "и", "о", "у", "э", "ю", "я", "я", "ы"];
    for (let i = 0; i < arr.length; i +=1) {
        return true;
    }
    return false;
}

isVowel ("т")
    
    

