// if (true) {
//     console.log('true');
// }

// if (false) {
//     console.log('false');
// }

// if (1) {
//     console.log('true');
// }

// if (99) {
//     console.log('false');
// }
// const name ='Alex';
// if (name === 'Alex') {
//     console.log(`Привет друг ${name}`);
// } else if (name === 'Petr') {
//     console.log(`Hi ${name}`);
// } else {
//     console.log('Привет Незнакомец')
// }


// const userName = 'Alex';
// const result = userName === 'Alex' ? 'Hello Alex' : 'Hello user';
// console.log(result);

// const A = 10;
// const B = 50;
// const C = 30;

// if (A < B) {
//     B < C 
//     ? console.log('C самый большой'): console.log('B самый большой')
// } else  {
//     A < C 
//     ? console.log('C самый большой'): console.log('A самый большой')
// } 

// const userRole = 'Admin';

// switch(userRole){
//     case 'Admin': 
//         console.log('Это админ, он любит чай')
//         break;
    
//     case 'user': 
//         console.log('Это юзер, он любит колу')
//         break;
    
//     case 'manager': 
//         console.log('Это менеджер, он любит кофе')
//         break;
// }
// const a = 1;
// const b = 2;
// const c = 3;
 
// if (a < b && b < c) {
//     console.log('с самый большой');
// } else if (a < b && b > c) {
//     console.log('b самый большрй');
// } else if (a < c) {
//     console.log('c самый большой');
// } else {
//     console.log('a самый большой');
// }


// const temp = -30;

// if(temp <= -30) {
//     console.log('Оставайся дома');
// } else if (temp > -30 && temp <= -10) {
// console.log('сегодня холодно');
// } else if (temp > -10 && temp <= 5) {
//     console.log('не холодно');
// } else if (temp > 5 && temp <= 15) {
//     console.log('тепло');
// } else if (temp >15 && temp <= 25) {
//     console.log('очень тепло');
// } else if (temp > 25 && temp < 35) {
//     console.log('жарко');
// } else  {
//     console.log('пекло');
// }
// let i = 0;
// while(i < 100) {
//     console.log(i);
//     i += 1;
// }

// let i = 0;
// do {
//     console.log(i);
// } while (false);

// let i = 0;

// for (; i < 3; i++) {
//     console.log(i);
// }

// let i = 0;
// while (true) {
//     if (i < 30) {
//         i += 1;
//     } else {
//         break;
//     }
//     console.log(i);
// }

for (let i = 0; i <= 5; i += 1) {
    if (i === 1 || i === 3) continue
    console.log(i);
}

// const arr = [1, 3, 5, 6, 9, 12, 14, 16, 18, 21, 25, 65, 37];
// const result = [];

// for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] % 2 === 0){
//         result.push(arr[i]);
//     } 
// }
// console.log(result);

// const arr = [1, 3, 5, 6, 9, 12, 14, 16, 18, 21, 25, 65, 37];
// const result = [];

// for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] % 2 !== 0){
//         result.push(arr[i]);
//     } 
// }
// console.log(result);

// const text = "Hello";
// const count = 5;

// for (let i = 0; i < count; i += 1) {
//     console.log(text);
// }

const text = "Hello";
const count = 5;

let i = 0;
while (i < count){
    console.log(text);
    i+=1;
}

