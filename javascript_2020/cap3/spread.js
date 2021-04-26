const numbers = [2, 34, 67, 54, 96, 5];

console.log(numbers);

console.log(...numbers);

const addNumbers = (a, b, c) => {
    console.log(a + b + c);
}

addNumbers(1, 2, 3);

let numbersToAdd = [1, 2, 3];
addNumbers(...numbersToAdd);

let newUsers = ["marta", "jaime", "laura"];
let users = ["javier", "david", "rosa", "juan", "mercedes"];

users.push(...newUsers);
//users.unshift(...newUsers);
//users.splice(2, 0, ...newUsers);
console.log(users);

let arr1 = [1, 2, 3, 4];
let arr2 = [...arr1];
console.log(arr2);

let arr3 = [1, 2, 3, 4, 5, 6, 7];
let arr4 = [6, 7, 8, 9, 10];

//let arrayConcat = arr3.concat(arr4);
let arrayConcat = [...arr3, ...arr4];
console.log(arrayConcat);

const restParams = (...numbers) => {
    console.log(numbers.reduce((a, b) => a + b));
}

restParams(...arrayConcat);

console.log(Math.max(...arrayConcat));
console.log(Math.min(...arrayConcat));

console.log([...new Set(arrayConcat)]);
