// задача 7

// const charArr = [
//   ".",
//   ",",
//   "-",
//   "/",
//   "#",
//   "!",
//   ";",
//   ":",
//   "{",
//   "}",
//   "$",
//   "%",
//   "^",
//   "&",
//   "*",
// ];
// const removeChar = (str) => {
//   for (let i = 0; i < charArr.length; i += 1) {
//     while (str.includes(charArr[i])) {
//       str = str.replace(charArr[i], "");
//     }
//   }

//   let result = "";
//   for (let i = 0; i < str.length; i += 1) {
//     if (str[i] === " " && str[i - 1] !="") {
//       result += str[i];
//     }
//     if (str !="") {
//       result += str[i];
//     }
//   }
//   return result;
// };

// console.log(removeChar("every., -/ hunter #! wishes ;: {} to $ % ^ & * know"));

// вариант 2


// const removeChar = (str) => {
//     let result = "";

//     for (let i = 0; i < str.length; i += 1){
//         if (/[a-zA-z]|[а-яА-я]|[0-9]|\s/.test(str[i])) {
//             result+=str[i]
//         }
//     }
//     return result
// }
// console.log(removeChar("every., -/ hunter #! wishes ;: {} to $ % ^ & * know"));

// задача 12


// const initSnake = (str) => {
//     let result = ""

//     for (let i = 0; i < str.length; i+=1){
//         if (str [i].toUpperCase() === str[i] && i!==0) {
//             result += `_${str[i].toLowerCase()}`;
//         } else {
//             result += str[i].toLowerCase();
//         }
//     }
//     return result
// };
// console.log(initSnake("CurrentUserSecondName"));

// задача 16

const getSubStr = (str, char, pos) => {
    if (str.includes(char)) {
        if (pos === "before") {
            return str.slice(0, str.indexOf(char))
        }
        if (pos === "after") {
            return str.slice(str.indexOf(char))
        }

    }
    return `Символ ${char} отсутствует в строке ${str}`
};

console.log(getSubStr("My name Alex!", "b", "after"))