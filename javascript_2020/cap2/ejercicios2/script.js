/*
ejercicio 1
let nombre = prompt("ingrese nombre");
let edad = prompt("ingrese edad");

console.log(`Hola ${nombre} tienes ${edad} años y el proximo año tendas ${parseInt(edad) + 1} años`);
*/

/*-------------------*/

/*ejercicio 2
let opcion = prompt("ingrese opcion de figura que quiere calcular area: \n1 - triangulo \n2 - rectangulo \n3 - circulo")

switch (parseInt(opcion)) {
    case 1:
        let base = prompt("ingrese base:");
        let altura = prompt("ingrese altura:");
        let area = base * altura / 2;
        console.log(`el area de un triangulo que tiene como base ${base} y altura ${altura} es : ${area}`);
        break;
    case 2:
        let baser = prompt("ingrese base:");
        let alturar = prompt("ingrese altura:");
        let arear = baser * alturar;
        console.log(`el area de un rectangulo que tiene como base ${baser} y altura ${alturar} es : ${arear}`);
        break;
    case 3:
        let radio = prompt("ingrese radio:");
        let areac = Math.PI * Math.pow(radio, 2);
        console.log(`el area de un circulo que tiene como radio ${radio} es : ${areac}`);
        break;

    default:
        console.log("opcion incorrecta");
        break;
}
*/

/*jericio 3
let numero = prompt("Ingrese un numero ");
for (let i = 1; i <= numero; i++) {
    console.log(`El numero ${i} es ${parseInt(i) % 2 == 0 ? "par" : "impar"}`)
}
*/

/*ejercicio 4
let numero = -1;
while (numero < 0) {
    numero = prompt("Ingrese un numero para saber si es primo o no");
}
let isPrimo = true;
for (let i = 2; i < numero; i++) {
    if (numero % i == 0) {
        isPrimo = false;
    }
}
console.log(`el numero ${numero} ${isPrimo ? "es" : "no es"} primo`)
*/

/*ejercicio 5
let numero = prompt("ingrese numero para calcular su factorial");
let factorial = 1;
for (let i = numero; i >= 1; i--) {
    factorial *= i;
}
console.log(`el factorial de ${numero} es ${factorial}`);
*/

/*ejercicio 6
let arr1 = [6, 33, 45, 74, 82];
let arrPar = [];
let arrImpar = [];
for (let a of arr1) {
    console.log(Math.floor(Math.random() * 10 + 1));
    if ((a * Math.floor(Math.random() * 10 + 1)) % 2 == 0) {
        arrPar.push(a);
    } else {
        arrImpar.push(a);
    }
}
console.log(arrPar);
console.log(arrImpar);
*/

let colores = ["azul", "amarillo", "rojo", "verde", "rosa"];

let color = prompt("ingrese el nombre de un color");

let exist = colores.indexOf(color);
console.log(`el color ${color} ${exist >= 0 ? "si" : "no"} existe dentro del array ${colores}`);
