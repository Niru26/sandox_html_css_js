'use strict';
const weekDays = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
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

// let bill = 170;
// const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

// const calcAverage = (...scoresData) => {
//     let total = 0;
//     for (let value of scoresData) {
//         total += value;
//     }
//     return total / (scoresData.length);
// }

// let avgDophins = calcAverage(18, 15, 14);
// let avgKoalas = calcAverage(18, 14, 14);
// const checkWinner = function (avgTeamOne, avgTeamTwo) {
//     if (avgDophins >= 2 * avgKoalas || avgKoalas >= 2 * avgDophins) {
//         return (avgTeamOne > avgTeamTwo) ? `"Dolphins" with average score ${avgDophins}` : `"Koalas" with average score ${avgKoalas}`;
//     }
//     return "...opps, oh well, everybody winners.";
// }

// console.log(`And the winner is ${checkWinner(avgDophins, avgKoalas)}`);

// const calcTip = function (bill) {
//     return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
// }
// let billsTotal = [];
// let bill = 200;
// billsTotal.push(bill);
// let billHystory = billsTotal;
// console.log(`Tips - ${calcTip(bill)}, bills history - ${billHystory}`);

// const person = {
//     name: 'Tom',
//     age: 12,
//     duty: 'pupil',
//     phraseGenerator: function () {
//         this.hasDriverLicense = true;
//         let driverLicensePart;
//         if (this.hasDriverLicense) {
//             driverLicensePart = 'already has a license!';
//         } else {
//             driverLicensePart = 'logicaly, has no license.'
//         }
//         console.log(`${this.name} is a ${this.age} years old, ${this.duty}, ${driverLicensePart}`);
//     },
// }

// console.log(typeof true);
// person.phraseGenerator();
// console.log(person);

// const profileMark = {
//     name: 'Mark Miller',
//     mass: 78,
//     hight: 1.69,
//     calcBMI: function () {
//         this.BMI = this.mass / Math.pow(this.hight, 2);
//         return this.BMI;
//     },
// }

// const profileJohn = {
//     name: 'John B Jordan',
//     mass: 92,
//     hight: 1.95,
//     calcBMI: function () {
//         BMI = this.mass / Math.pow(this.hight, 2);
//         return this.BMI;
//     },
// }

// let markBMI = Math.round(profileMark.calcBMI() * 10) / 10;
// let johnBMI = Math.round(profileJohn.calcBMI() * 10) / 10;

// if (markBMI < johnBMI) {
//     console.log(`${profileJohn.name}'s BMI (${johnBMI}) is higher than ${profileMark.name}'s (${markBMI})!`);
// } else {
//     console.log(`${profileMark.name}'s BMI (${Math.round(profileMark.BMI * 10) / 10}) is higher than ${profileJohn.name}'s (${johnBMI})!`);
// }

// console.log(profileJohn);
// console.log(profileMark);
// console.log(profileMark.calcBMI());

let randomValue = function (start, end) {
    let randomNumber = start + Math.round(Math.random() * (end - start));
    return randomNumber;
};
// console.log(randomValue(10, 100));

// let bills;
// let tips;
// let totalSum;
// let averageValue;

const fillBills = function (start, finish, elementQty) {
    const array = [];
    for (let i = 0; i < elementQty; i++) {
        array.push(randomValue(start, finish));
    }
    return array;
};

// const calcTip = function (generatedBillsArray) {
//     const array = [];
//     let value;
//     let roundedValue;
//     for (let i = 0; i < generatedBillsArray.length; i++) {
//         value = generatedBillsArray[i] >= 50 && generatedBillsArray[i] <= 300 ? generatedBillsArray[i] * 0.15 : generatedBillsArray[i] * 0.2;
//         roundedValue = Math.round(value);
//         array.push(roundedValue);
//     }
//     return array;
// };

// const countTotal = function (billsArray, tipsArray) {
//     let array = [];
//     for (let i = 0; i < billsArray.length; i++) {
//         array.push(billsArray[i] + tipsArray[i]);
//     }
//     return array;
// };

// const calcAverage = function (finalArray) {
//     let summary = 0;
//     for (let i = 0; i < finalArray.length; i++) {
//         summary += finalArray[i];
//     }
//     return Math.round(summary / finalArray.length);
// };

// bills = fillBills(10, 1500, 3);
// tips = calcTip(bills);
// totalSum = countTotal(bills, tips);
// averageValue = calcAverage(totalSum);

// // console.log(`This is bills list - [${bills}]`);
// // console.log(`This is tips list - [${tips}]`);
// // console.log(`This is expenses summary - [${totalSum}]`);
// // console.log(`This is average value of "totalSum" array - ${averageValue}`);


// const temeperatureOne = fillBills(15, 45, 5);
// const temeperatureTwo = fillBills(10, -20, 5);

// const findMinMax = function (array1, array2) {
//     const mergedArray = [...array1, ...array2];
//     let minTemperature = mergedArray[0];
//     let maxTemperature = mergedArray[0];
//     for (let i = 0; i < mergedArray.length; i++) {
//         if (typeof mergedArray[i] !== "number") continue;
//         if (minTemperature > mergedArray[i]) {
//             minTemperature = mergedArray[i];
//         }
//         if (maxTemperature < mergedArray[i]) {
//             maxTemperature = mergedArray[i];
//         }
//     }
//     let temperatureAmplitude = maxTemperature - minTemperature;
//     return (console.log(`Max - ${maxTemperature}. Min - ${minTemperature}. Amplitude - ${temperatureAmplitude}`));
// }
// console.log(temeperatureOne, temeperatureTwo);
// findMinMax(temeperatureOne, temeperatureTwo);

// let temperatureArray = fillBills(10, 30, 5);
// console.log(temperatureArray);
// const printTemperature = function (array) {
//     let inOneString = '';
//     for (let o = 0; o < array.length; o++) {
//         inOneString += ` ... ${array[o]}C in ${o + 1} days`;
//     };
//     console.log(inOneString);
// }
// printTemperature(temperatureArray);

// const fizzBuzz = function (input) {
//     if (typeof input !== 'number') return console.log(`Enter number, please.`);
//     if (input % 3 === 0 && input % 5 === 0) return console.log(`FizzBuzz`);
//     if (input % 3 === 0) return console.log(`Fizz`);
//     if (input % 5 === 0) return console.log(`Buzz`);
//     if (input % 3 !== 0 && input % 5 !== 0) return console.log(`${input}`);
// }
// fizzBuzz(15);

// const checkSpeed = function (speed) {
//     const speeLimitLow = 70;
//     const speedLimitTop = 180;
//     const kmPerPoint = 5;
//     if (speed <= 0 || typeof speed !== 'number') return `Wrong value`;
//     if (speed < speeLimitLow + kmPerPoint) return (`Ok`);
//     if (speed > speeLimitLow && speed < speedLimitTop) {
//         const points = Math.floor((speed - speeLimitLow) / kmPerPoint);
//         return `Points: ${points}`;
//     }
//     if (speed >= speedLimitTop) return `License suspended!`;
// }
// console.log(checkSpeed(74));

// const showNumbers = function (limit) {
//     for (let i = 0; i <= limit; i++) {
//         if (i % 2 === 0) console.log(`${i} - even`)
//         else console.log(`${i} - odd`);
//     }
// }
// showNumbers(10);

const testArray = [1, NaN, 2, undefined, 3, 4, 0];
// const countTruthy = function (array) {
//     console.log(`${testArray}`);
//     let counter = 0;
//     for (let value of array) {
//         if (value) counter++;
//     };
//     return counter;
// }
// console.log(countTruthy(testArray));

// const movie = {
//     title: "Movie",
//     date: 2014,
//     director: "Bob",
//     rating: 4.3,
// };
// const showProperties = function (object) {
//     for (let value in object) {
//         if (typeof object[value] === 'number') {
//             console.log(`${value}: ${object[value]}`);
//         }
//     };
// }
// showProperties(movie);

// const summary = function (limit) {
//     let result = 0;

//     for (let i = 0; i <= limit; i++) {
//         if (i % 3 === 0 || i % 5 === 0) {
//             result += i;
//         }
//     };

//     return result;
// }
// console.log(summary(9));

// const marks = fillBills(0, 100, 3);
// console.log(marks);

// const calculateAverage = function (array) {
//     let accamulator = 0
//     for (let value of array) {
//         accamulator += value;
//     }
//     return Math.round(accamulator / array.length);
// }
// const averageMark = calculateAverage(marks);
// console.log(averageMark);

// const assignGrade = function (average) {
//     if (average < 0 || average > 100 || typeof average !== 'number') console.log(`Enter number between 0 and 100`);
//     if (average < 60) return `F`;
//     if (average < 70) return `D`;
//     if (average < 80) return `C`;
//     if (average < 90) return `B`;
//     return `A`;
// }
// console.log(assignGrade(averageMark));

// const drawSymbol = function (rows) {
//     let row = '';
//     for (let i = 0; i < rows; i++) {
//         row += '*';
//         console.log(row);
//     }
// }
// drawSymbol(15);

// const isPrime = function (numberToCheck) {
//     for (let factor = 2; factor < numberToCheck; factor++)
//         if (numberToCheck % factor === 0)
//             return false;
//     return true;
// }
// const showPrime = function (limit) {
//     for (let number = 2; number <= limit; number++) {
//         if (isPrime(number)) console.log(number);
//     };
// }
// showPrime(3);

// const MakeCircle = function (radius) {
//     this.radius = radius;
//     this.showCoordinate = function (coordinate) {
//         console.log(coordinate);
//     }
// }
// const circleOne = new MakeCircle(10);
// circleOne.showCoordinate(20);
// circleOne.author = 'Nick';
// console.log(circleOne);
// const largeCircle = new MakeCircle(100);

// let hugeCircle = new MakeCircle([1, 2, 3]);
// hugeCircle.origin = true;
// console.log(hugeCircle);
// console.log(typeof hugeCircle.radius);
// console.log(typeof MakeCircle);

// for (let key of Object.keys(hugeCircle)) {
//     console.log(key, hugeCircle[key]);
// }
// console.log('radius' in circleOne);

// const anotherCircle = {};

// for (let key in circleOne) {
//     anotherCircle[key] = circleOne[key];
// }
// anotherCircle.radius = 100;
// anotherCircle.tag = 'Tag circle';
// anotherCircle.radius = 100;
// const lastCircle = { ...hugeCircle, ...anotherCircle };
// console.log(anotherCircle);
// console.log(lastCircle);

// const now = new Date();
// console.log(now);
// console.log(now.getFullYear());
// now.setFullYear('1822');
// console.log(now.toISOString());

const factoryFunction = function (street, city, zipCode) {
    return {
        street,
        city,
        zipCode,
        showAddress: function (inerObject) {
            for (let key in inerObject) console.log(`${key}: ${inerObject[key]}`);
        }
    }
};
const ConstructorFunction = function (street, city, zipCode) {
    this.street = street,
        this.city = city,
        this.zipCode = zipCode,
        this.showAddress = function (inerObject) {
            for (let key in inerObject) console.log(`${key}: ${inerObject[key]}`);
        }
}
const constructorObject = new XFactorFunction('Peter st.', 'New York', 1541);
const factoryObject = factoryFunction('Moscow st.', 'Gavnopol', 2314);
console.log(factoryObject, constructorObject);
// factoryObject.showAddress(factoryObject);
// constructorObject.showAddress(constructorObject);

