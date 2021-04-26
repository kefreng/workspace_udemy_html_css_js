let number = 0;
while (number < 10) {
    console.log(`${number} dentro de while`);
    number++;
}

let pass = '';
/*
while (pass != 'hola') {
    pass = prompt('introduzca contraseña:');
}*/
do {
    pass = prompt('introduzca contraseña:');
} while (pass != 'hola');

console.log("fin del bucle");