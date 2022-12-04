// Задача 3

// const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// const sumSeven = (arr) => {
//     const result = []

//     for (let i of arr)
//     for (let j of arr) {
//         if (i + j === 7 && !result.includes(`${j}:${i}`)) {
//             result.push (`${i}:${j}`);
//         }
//     }
//     return result;
// }
// console.log(sumSeven(arr));

// задача 5

// const str = "JavaScript";

// const strSymbols = (str) => {
//     const result = [];
//     const { length } = str;

//     for (let i = 0; i < length; i += 1) {
//         if (i === 0) {
//             result.push (str.slice (0, 2));
//         } else if (i === length - 1) {
//             result.push (str.slice (-2));
//         } else {
//             result.push (str.slice (i - 1, i + 2));
//         }
//     }
//     return result;
// };
// console.log(strSymbols(str));

// задача 7

// const arr1 = [1, 2, 3];
// const arr2 = [7, 8, 9];
// const arr3 = [4, 5, 6];

// const sortArr = (arr1, arr2, arr3) => 
// [...arr1, ...arr2, ...arr3]
// .sort((a, b) => a - b)
// .join(" ").split() ;

// console.log(sortArr(arr1, arr2, arr3));

// задача 9

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const customsReverce = (arr) => {
//     const result = [];

//     for (let value of arr){
//         result.unshift(value);
//     }
//     return result;
// }
// console.log(customsReverce(arr));

// задача 10

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const sumMoreTen = (arr) => {
//     let lastIndex;
//     arr.reduce((prev, cur, index) =>{
//         if (prev + cur <= 10){
//             lastIndex = index;
//             return prev + cur;
//         }
//     }, 0);

//     if (lastIndex === 0){
//         return lastIndex + 1;
//     }
//     if (typeof lastIndex === "undefined") {
//         return 1;
//     }
//     return lastIndex + 2;
// };

// console.log(sumMoreTen(arr));

// задача 2

// const numbers = [2, 3, 5, 7, 11, 13, 17, 19];
// const currentSums = (arr) => {
//     const result = [];

//         arr.reduce((prev, cur)=> {
//             result.push(prev + cur);
//                 return prev + cur;
//         },0);

//         return result;
//     }

//     console.log(currentSums(numbers));

    const numbers = [2, 3, 5, 7, 11, 13, 17, 19];
    const currentSums = (numbers) => {
        let result = [];
        numbers.reduce((prev, cur, index) => (result[index] = prev + cur), 0);
        return result;
    };

    console.log(currentSums(numbers));
