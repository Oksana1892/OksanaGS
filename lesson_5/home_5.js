// задача 10

const getDigitsSum = (num) => {
    const str = `${num}`;
    let result = 0;

    for (let i = 0; i < str.length; i += 1) {
result += +str[i];
    }
    return result;
}

// console.log(getDigitsSum (123));

// задача 11

const filterYears = () => {
    const result =[];
    for (let i = 1; i < 2020; i +=1){
        
        if (getDigitsSum(i) === 13) {
            result.push (i)
        }
    }
    return result;
}

// console.log(filterYears());

// задача 12

const isEven = (num) => {
    if (num %2 ===0) {
        return true;
    }
    return false;
}
// console.log(isEven(7));
// console.log(isEven(12));

// задача 13

const filterArr = (arr) => {
    const result = []
    for (let i = 0; i < arr.length; i +=1) {
        if (isEven(arr[i])) {
           result.push (arr[i])
        }
    }
    return result;
}
// console.log(filterArr([1, 2, 3, 4, 5, 6, 7, 8, 9]))

// задача 15


// const lessNine = (num) => {
//     console.log(`Функция lessNine вызвана с параметром ${num}`);
//     if (getDigitsSum(num) > 9) {
//         return lessNine(getDigitsSum(num));
//     }
//     return getDigitsSum(num);
// }
// console.log(lessNine(156));

const lessNine = (num) => {
    let newn = getDigitsSum(num);
    while (newn >=10) {
        newn = getDigitsSum(newn);
    }
    return newn
}

console.log(lessNine(156));