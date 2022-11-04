// let N = 100;
// const M = 10;
// let i = 0;

// while (M < N) {
//     N = N / 2;
//     i+=1;
// }

// console.log(i);

// const yearOfFly = 1961;
// let count = 0;

// for (let i = 2022; 1800 < i; i -= 1) {
//     if (i === yearOfFly) {
//         break
//     }
//     count += 1;
// }
// console.log(count);

let count = 0;

for (let i = 1800; i <= 2022; i +=1) {
    if (i % 4 === 0) {
        count += 1;
    }
}
console.log(count);

