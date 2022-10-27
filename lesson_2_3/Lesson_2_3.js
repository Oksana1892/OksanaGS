

// const name = 'Alex';


// const nameToNumber = Number(name);

// console.log(nameToNumber);

// const age = 12;

// const ageToString = String(age);

// console.log(typeof ageToString);

// const nullValue = null;
// console.log(typeof nullValue);

// console.log(Boolean(''));
// console.log(Boolean(0));
// console.log(Boolean(1));
// console.log(Boolean({}));


// console.log(typeof + '45');
// console.log(typeof Number('45'));

// console.log(2 == 3);
// console.log(2 == 2);
// console.log(2 != 2);
// console.log(2 > 3);
// console.log(2 < 3);

// console.log(2 + 2 + '3');
// console.log('2' + 2 + 3);
// console.log('2' + '3');
// console.log(2 + 3);

// console.log('Hello' + ' ' + 1);
// console.log('Hello' + ' ' + '2');
// console.log(2 + 2 + '2' + 3 * 2);
// console.log('hello' / 3);
// console.log(2 + 2 + 3 * 2 + 2);
// console.log((2 + 2) * 5);

// console.log('hello' > 'Hello');
// console.log('авто' == 'Авто');
// console.log('автомобиль' > 'авто');

// console.log(2 == '2');
// console.log(2 === '2');

// console.log(5 > 4);
// console.log('ананас' > 'яблоко');
// console.log('2' > '12');
// console.log(undefined == null);
// console.log(undefined === null);
// console.log(null == "/n0/n");
// console.log(null === +"/n0/n");
// console.log(""+1+0);
// console.log(""-1+0);
// console.log(true + false);
// console.log(6/'3');
// console.log('2'*'3');
// console.log(4 + 5 + 'px');
// console.log('$' + 4 + 5);
// console.log('4' - 2);
// console.log('4px' -2);
// console.log(7/0);
// console.log(' -9 ' + 5);
// console.log(' -9 ' -5);
// console.log(null + 1);
// console.log(undefined + 1);
// console.log('\t\n' - 2);



const towns = ['Moscow', 'Paris', 'London', 'NN'];

console.log(towns.length);
towns[1] = 'Milan';
console.log(towns);
console.log(towns [0]);
towns[4] = 'St.Peterburg';
console.log(towns)

towns[9] = 'Berlin';
console.log(towns);
towns.push('Sidney');
console.log(towns);


console.log(towns.length);

const example = [];
example[100] = 'EXAMPLE'
example[50] = 'Oksana';
console.log(example);
console.log(example.length);

const films = ['Сияние', 'Пи', 'Мечтатели', 'Сибирский церюльник'];
console.log(films [0]);
films[7] = 'Амели';
console.log(films);
films.push('Американский психопат')
console.log(films);
console.log(films.length);
console.log(films [films.length-2]);
console.log(films[9-1]);
 
const lastIndex = films.length - 1;
console.log(lastIndex);
console.log(films[lastIndex]);

