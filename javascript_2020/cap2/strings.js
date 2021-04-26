let cadena = "Hola mundo";

console.log(cadena.length);

console.log(cadena.toUpperCase());

console.log(cadena.toLowerCase() );

console.log(cadena.indexOf("ola") );

console.log(cadena.lastIndexOf("o") );

console.log(cadena.replace('Mundo','Youtube') );

console.log(cadena.substring(3) );
console.log(cadena.substring(3,7) );
 
console.log(cadena.slice(0,-6) );

let cadena2 = '          Hola youtube, estamos trabajando con cadenas             ';
console.log(cadena2.trim() );

console.log(cadena.startsWith("H") );

console.log(cadena.startsWith("m",5));

console.log(cadena.endsWith("n",8));

console.log(cadena.includes('a m',3) );

let cadena3 = 'Hola';
console.log(cadena3.repeat(3));

let nombre = 'Juan';
let apellido = 'Gomez';
let edad = 20;

console.log("Hola " + nombre + " " + apellido + ". Tienes: " + edad + " años.");

console.log(`Hola ${nombre} ${apellido}. Tienes: ${edad} años`);
console.log(`Hola ${nombre} ${apellido}. El año que vienes, tendras: ${edad+1} años`);