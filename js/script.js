
// const weekDays = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
// const firstDay = 7; // от 1 до 7
// const monthDays = [];

// for(let i = 1; i <= 31; i++) {
//     monthDays.push(i);
// }

// console.log(1%7);

// for (let i=1; i <=monthDays.length; ++i) {
//     console.log(`${i} января, ${weekDays[((firstDay-2) + i) % 7]}`);
// // }
// let i = 1;

// function counter() {
//     while (i < 4) {
//         if (i === 2) {
//             console.log(`${i} bottle, fall down!`);
//             i++;
//             continue;
//         }
//         console.log(`${i} bottle on a shelf`);
//         i++;
//     }

// }

// counter();
// let i = 5;

// while(i !=0) {
//     console.log(i);
//     --i;
// }

// let userName = prompt('Enter login name:');

// if(userName === 'Admin') {
//     let userPassword = prompt('Enter password:');
//     if(userPassword === 'Admin') {
//         alert ('Welcome')
//     } else if(userPassword === '' || userPassword === null) {
//         alert (`Password wasn't entered`);
//     } else {
//         alert ('Wrong password');
//     }

// } else if(userName === '' || userName === null) {
//     alert ('Canceled');
// } else {
//     alert ('Unknown user');
// }

// let n = 19;

// nextPrime:
// for (let i = 2; i <= n; i++) { // for each i...

//   for (let j = 2; j < i; j++) { // look for a divisor..
//     if (i % j == 0) continue nextPrime; // not a prime, go next i
//   }

//   console.log( i ); // a prime
// }

// let myVariable = +prompt ('Enter value:', '0');

// switch(myVariable) {
//   case 0:
//     console.log('0');
//     break;
//   case 1:
//     console.log('1');
//     break;
//   case 2:
//   case 3:
//     console.log('2, 3');
//     break;
//     default:
//       console.log('Just for check');
// }

// function greet(firstName = 'Porky', secondName = 'Pig') {
//   console.log(`Good day, Mr. or Mrs. ${firstName} ${secondName}!`);
// }

// greet('Duffy', 'Duck');

// console.log(Math.pow(3,2));
// console.log(1 | 2);

// let testArray = [1, 'Lance', true];
// let testFunction = function() {
//     for (let anyName in testArray) {
//         console.log(`this is normal "for...in..." work result: ${anyName}, this is usage [] notation: ${testArray[anyName]}`);
//     }
// }
// testFunction();
// console.log(typeof testFunction);

// let pattern = '#';
// for(let i = 0; i <= 3; i++) {
//     console.log(pattern);
//     pattern = pattern + '#';
// }

// console.log('Hello, world!');
// let i = 0;
// while (true) {
//     i = i + 1;
//     if (i % 2 === 0) {
//         console.log(`${i} -it's a trap`);
//         continue;
//     }
//     if (i % 3 === 0) {
//         console.log(`${i} -it's a holy crap`);
//         continue;
//     }
//     console.log(`${ i } - it is almost prime number`);
//     if (i === 25) {
//         console.log('Boom!')
//         break;
//     }
// }

// for (let index in weekDays) {
//     let dayNumber = Number(index) + 1;
//     console.log(`${dayNumber} - ${weekDays[index]}`);
// }

// const eternalArray = [];
// eternalArray.push('Nick');
// console.log(eternalArray);

let bill = 170;
const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);