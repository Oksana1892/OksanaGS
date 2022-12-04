
// const names = ["Alex", "Ivan", "Tony", "Petr"];

// const findElem = names.find ((el) => el !== "Tony");

// console.log(findElem);

// const names = [{name: "Alex"}, {name: "Ivan"}, {name: "Tony"}, {name: "Petr"}];

// const findElem = names.find ((el) => el.name == "Tony");

// console.log(findElem);

// const names = [{name: "Alex"}, {name: "Ivan"}, {name: "Tony"}, {name: "Petr"}];

// const filterArr = names.filter ((el, i) => (el.name === "Tony" || el.name === "Alex") && i !== 0);

// console.log(filterArr);

// const names = [{name: "Alex"}, {name: "Ivan"}, {name: "Tony"}, {name: "Petr"}];

// const mapArr = names.map ((el) => ({name: el.name, handCount: 2}))

// console.log(mapArr);

// const names = [{name: "Alex"}, {name: "Ivan"}, {name: "Tony"}, {name: "Petr"}];
// console.log(names);

// const arr = names.forEach((el) => el.name = "Unknown");

// console.log(arr);
// console.log(names);

// const names = [{name: "Alex"}, {name: "Ivan"}, {name: "Tony"}];
// console.log(names);

// const arr = names.map(() => ({name: "Unknown"}));

// console.log(arr);
// console.log(names);

// const arr = [10, -2, -5, 6, 9, -8, -5];

// const result = arr.reduce ((prev, cur) => {
//     if (cur > 0) {
//     return prev + cur
// }
// return prev;
// }, 100);
// console.log(result);

// const arr = [10, -2, -5, 6, 9, -8, -5];

// const result = arr.reduce ((prev, cur) => {
//     if (cur > 0 && cur % 2 === 0){
//         return prev + cur
//     }
//     return prev
// });
// console.log(result);

// const positiveEvenSum = (arr) => arr.filter ((el) => el > 0 && el % 2 === 0).reduce ((prev, cur) => prev + cur)
     
// console.log(positiveEvenSum ([1, 2, -3, -4, 5, 6, 7]));

// const arr = [1, 1, 1, 2, 3, 3, 4, 5, 6, 6];

// const filterArr = (arr) => { return arr.filter ((e, i) => arr.indexOf (e) === i)} 

// console.log(filterArr(arr));

// const arr = [1, 1, 1, 2, 3, 3, 4, 5, 6, 6];

// function uniqArrItem (itemArrey) {
//     const result = [];
//     for (let i = 0; i < itemArrey.length; i +=1) {
//         if (!result.includes(itemArrey[i])) {
//             result.push(itemArrey[i]);
//         } 
//     }
//     return result;
// }
// const uniqResult = uniqArrItem ([1, 1, 1, 2, 3, 3, 4, 5, 6, 6])

// console.log(uniqResult)

// function uniqArrItem (arr) {
//     return arr.filter ((el, i, array) => !array.includes(el, i + 1))
// }

// const uniqResult = uniqArrItem ([1, 1, 1, 2, 3, 3, 4, 5, 6, 6])

// console.log(uniqResult)

// const uniqArrItem = (arr) => arr.filter ((el, i, array) => !array.includes(el, i + 1))

// const uniqResult = uniqArrItem ([1, 1, 1, 2, 3, 3, 4, 5, 6, 6])

// console.log(uniqResult)

// const compareArray = (arr1, arr2) => {
//     const str1 = arr1.toString()
//     const str2 = arr2.toString()

//     if (str1.length === str2.length) {
//     return str1 === str2;
// }
// return false;
// };
// console.log(compareArray([1, 2, 3], [1, 2, 3]));
// console.log(compareArray([1, 2, 4], [1, 2, 3]));

const multiArr = [1, 2, [3, 4, 5, [6, 7, 8]], 9, 10, [11, 12, [13, 14, [15]]]];

// const firstTry = (arr) => arr.toString().split(',').map((el) => +el)

// console.log(firstTry(multiArr));

// const secondTry = (arr) => arr.flat(Infinity);
// console.log(secondTry(multiArr));

// const thirdTry = (arr) => {
//     let haveArray = false;

//     for (let i = 0; i < arr.length; i+=1){
//         if (Array.isArray(arr[i])) {
//             haveArray = true;
//         }
//     }

//     if (haveArray)
//     return thirdTry (arr.flat())

//     return arr;
// }
// console.log(thirdTry(multiArr));

// const number = 1;

// const increment = (a) => {
//     console.log(a, "before");
//     a += 1;
//     console.log(a, "after");
// };

// console.log(number, "one");
// increment(number);
// console.log(number, "two");

// const arr = [1, 2, 3, 4];
// const arr2 = arr;

// const arrPush = (arr) => {
//     arr.push(5)
// };

// console.log(arr, "one");
// arrPush(arr);
// console.log(arr, "two");
// console.log(arr2);

// const user = {name: "Alex"};

// const user2 = user;

// user.age = 18;
// user2.name = "Ivan";

// console.log(user);
// console.log(user2);

// const user = {name: "Alex"};

// const user2 = Object.assign ({}, user, {favoriteColor:"red", city: "London"});

// user.age = 18;
// user2.name = "Ivan";

// console.log(user);
// console.log(user2);

// const arr = [1, 2, 3];
// const arr2 = [...arr];

// arr.push(4);

// console.log(arr);
// console.log(arr2);

// const user = {name: "Alex"};

// const user2 = {...user, favoriteColor:"red", city: "London"};

// user.age = 18;
// user2.name = "Ivan";

// console.log(user);
// console.log(user2);

// const arr = [1, 2, 3, 4];

// const arrPush = (arr) => {
//     const arrNew = [...arr]
//     arrNew.push(5)
// };

// console.log(arr, "one");
// arrPush(arr);
// console.log(arr, "two");

// JSON.parse()
// JSON.stringify()

// const user = {name: "Alex", age: 18};

// const user2 = JSON.parse(JSON.stringify(user))

// user.name = "Ivan";
// user2.age = 20;

// console.log(user);
// console.log(user2);

// const infinitySum = (a, b, ...arg) => {
//     return a + b + arg.reduce ((prev, cur) => prev + cur, 0)
// }

// console.log(infinitySum(1, 23, 5, 5, 6));

// const user = {name: "Alex", age: 18, city: "London"};

// // const userName = user.name;

// const {name, ...restParams} = user;

// console.log(name);
// console.log(restParams);

// const arraySum = (arr) => {
//     let result = 0;

//     for (let value of arr){
//         result += value;
//     }
//     return result;
// }

// console.log(arraySum([1, 2, 3, 4, 5, 6, 7, 8]));

// const arr = ["Ivan", "Alex", "Tony"];
// const obj = {name: "Alex", age: 18};

// for (let value in obj) {
//     console.log(obj [value]);
// }

// const user = {name: "Ivan", age: 18, city: "Moscow"};
// const user2 = Object.assign ({}, user);

// user2.city = "NN";
// user2["secondName"] = "Petrov";

// console.log(user);
// console.log(user2);

// const user = {name: "Ivan", age: 18, city: "Moscow"};
// const user2 = {...user, secondName: "Petrov"};
// user2.city = "NN";

// console.log(user);
// console.log(user2);

const arrSum = (arr) => {
    let result = 0;

    for (let value of arr) {
        if (arr % 2 === 0) {
            return result += value;
        } else (arr %2 !== 0);
            return false
        
        return result
    }
}
console.log(arrSum [1, 3, 6, 8, 2]);


