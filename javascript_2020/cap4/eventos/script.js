
const button = document.getElementById("button");
const box = document.getElementById("box");
const input = document.getElementById("input");

// button.addEventListener("click", () => {
//     console.log("CLICK");
// });

/*
button.addEventListener("dblclick", () => {
    console.log("doble click");
});

box.addEventListener("mouseenter", () => {
    box.classList.replace("red", "green");
});

box.addEventListener("mouseleave", () => {
    box.classList.replace("green", "red");
});

box.addEventListener("mousedown", () => {
    console.log("Has pulsado en la caja");
});

box.addEventListener("mouseup", () => {
    console.log("Has soltado el clic en la caja");
});

box.addEventListener("mousemove", () => {
    console.log("Estas moviendo el raton en la caja");
});
*/

input.addEventListener("keydown", () => {
    console.log("Has pulsado una tecla");
});

input.addEventListener("keypress", () => {
    console.log("Has presionado una tecla");
});

input.addEventListener("keyup", () => {
    console.log("Has soltado una tecla");
});