const numbers = document.getElementById("numbers");
const result = document.getElementById("result");

let a = prompt("Introduzca el primer numero");
let b = prompt("Introduzca el segundo numero");
let c = prompt("Introduzca el tercer numero");

numbers.textContent = `Los numeros introducidos son ${a} ${b} ${c}`;

if(a >= b && a >=c){
    if(b>=c){
        result.textContent = `Los numeros ordenados son ${a} ${b} ${c}`;
    }else{
        result.textContent = `Los numeros ordenados son ${a} ${c} ${b}`;
    }
}
if(b >= a && b >=c){3
    if(a>=c){
        result.textContent = `Los numeros ordenados son ${b} ${a} ${c}`;
    }else{
        result.textContent = `Los numeros ordenados son ${b} ${c} ${a}`;
    }
}
if(c >= a && c >=b){
    if(a>=b){
        result.textContent = `Los numeros ordenados son ${c} ${a} ${b}`;
    }else{
        result.textContent = `Los numeros ordenados son ${c} ${b} ${a}`;
    }
}