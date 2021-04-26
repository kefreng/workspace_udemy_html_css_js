let numbers = [1, 2, 3, 4, 5];
let num = 3;

console.log(numbers.length);

console.log(Array.isArray(numbers));
console.log(Array.isArray(num));

console.log(numbers);
console.log(numbers.shift());
console.log(numbers);
console.log(numbers.pop());
console.log(numbers);

console.log("-------------");

let newLength = numbers.push(6);
console.log(numbers);
console.log(newLength);

let newLength2 = numbers.unshift(0);
console.log(numbers);
console.log(newLength2);

console.log("-------------");

console.log(numbers.indexOf(3));
console.log(numbers.lastIndexOf(6));

console.log(numbers.reverse());

console.log("-------------");
let arrayString = numbers.join(' ');
console.log(arrayString);
console.log(numbers.join(" -> "));

console.log("-------------");

console.log(numbers);
numbers.splice(2, 1, 10, 3, 4, 5, 6, 7, 8);
console.log(numbers);

console.log("-------------");
console.log(numbers);
console.log(numbers.slice(2));
console.log(numbers);