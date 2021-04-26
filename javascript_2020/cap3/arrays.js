let word = "Hola mundo";

// console.log(Array.from(word));
// console.log(word.split(''));

const letters = ['b', 'c', 'z', 'a'];
const numbers = [1, 100, 8, 300, 250, 3];

/*
console.log(letters.sort());
console.log(numbers);
console.log(numbers.sort((a, b) => a - b));


numbers.forEach((number) => console.log(number));
numbers.forEach((number, index) =>
    console.log(`${number} esta en la posicion ${index}`)
);

const words = ["HTML", "CSS", "Javascript", "PHP"];
console.log(words.some(word => word.length > 5));
console.log(words.every(word => word.length > 3));



numbers.map(number => console.log(number * 2));

const numbers2 = numbers.map(number => number * 2);
console.log(numbers2);


const numbers3 = numbers.filter(number => number > 40);
console.log(numbers3);
*/

console.log(numbers.reduce((a, b) => a + b));

const users = [
    {
        name: 'user 1',
        online: true
    },
    {
        name: 'user 2',
        online: true
    },
    {
        name: 'user 3',
        online: false
    },
    {
        name: 'user 4',
        online: true
    },
    {
        name: 'user 5',
        online: false
    },
    {
        name: 'user 6',
        online: true
    },

]

let cantUsers = users.reduce((cont, user) => {
    if (user.online) cont++;
    return cont;

}, cont = 0);

console.log(`Hay ${cantUsers} usuarios conectados`);