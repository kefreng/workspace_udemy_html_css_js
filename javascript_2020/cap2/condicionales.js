let num1 = 5;
let num2 = 5;
/*
if(num > 0){
    console.log(`${num} es mayor que 0`); 
}


if(num > 0){
    console.log(`${num} es mayor que 0`);
}else{
    console.log(`${num} es menor que 0`);
}


if(num > 0){
    console.log(`${num} es mayor que 0`);
}else if(num < 0){
    console.log(`${num} es menor que 0`);
}else{
    console.log(`${num} es igual a 0`);
}
*/
if(num1 > 0 ){
    if(num2 > 0){
        console.log(`${num1} y ${num2} son mayores que 0`);
    }else if(num2 < 0){
        console.log(`${num1} es mayor que 0 y ${num2} es menor que 0`);
    }else{
        console.log(`${num1} es mayor que 0 y ${num2} es igual a 0`);
    }
}else if(num1 <0){
    if(num2 > 0){
        console.log(`${num1} no es mayor que 0 y ${num2} es mayor que 0`);
    }else if(num2 < 0){
        console.log(`${num1} y ${num2} son menores que 0`);
    }else{
        console.log(`${num1} es menor que 0 y ${num2} es igual a 0`);
    }
}else{
    if(num2 > 0){
        console.log(`${num1} es igual a 0 y ${num2} es mayor que 0`);
    }else if(num2 < 0){
        console.log(`${num1} es igual a 0 y ${num2} es menor que 0`);
    }else{
        console.log(`${num1} y ${num2} son igual a 0`);
    }
}

let word = 'Hola';
if(word.length>4){
    console.log(`${word} tiene un largo mayor a 4 caracteres`)
}else if(word.length<4){
    console.log(`${word} tiene menos de 4 caracteres`)
}else{
    console.log(`${word} tiene 4 letras`)
}

let respuesta = true;
if(respuesta){
    console.log("Respuesta tiene el valor de true");
}else{
    console.log("Respuesta tiene el valor de false");
}