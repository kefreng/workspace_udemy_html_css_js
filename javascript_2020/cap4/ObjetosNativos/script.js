const button = document.getElementById("button");

const person = {
    name: "Dorian",
    age: 30,
    email: "dorian@gmail.com",
    lenguajes: ["ingles", "alemana", "frances", "español"]
}

// alert("hola");
// addEventListener("scroll", (e) => {
//     console.log(e);
// });

/*
Shift + alt + a
if (confirm("Acepta?")) {
    console.log("El usuario acepto");
} else {
    console.log("El usuario no acepto");
} */

/* console.dir(button);
console.error("Errorrrrrr");
console.log(person);
console.table(person);

console.log(location.href);
console.log(location.protocol);
console.log(location.host);
console.log(location.pathname);
console.log(location.hash); */
// location.reload()

// location.href = "https://google.com"

/* const date = new Date();
console.log(date.getDay());
console.log(date.getDate());
console.log(date); */

console.log("------------------");

/* button.addEventListener("click", () => {

    // setTimeout(saludar, 2000);
    const timeout = setTimeout(() => {
        console.log("Adios");
    }, 3000);

    clearTimeout(timeout);

}); */

/* const timeout = setTimeout(() => {
    console.log("Adios");
}, 3000);

button.addEventListener("click", () => { 
    clearTimeout(timeout); 
}); */

const saludar = () => {
    console.log("Hola");
};

let cont = 0;

// const interval = setInterval(saludar, 2000);
/* const interval = setInterval(() => {
    console.log(cont);
    cont++
}, 2000);

button.addEventListener("click", () => {
    clearInterval(interval);
}); */

