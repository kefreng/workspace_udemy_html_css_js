const form = document.getElementById("form");
const input = document.getElementById("input");
const button2 = document.getElementById("button2");
const link = document.getElementById("link");

// input.addEventListener("keyup", (event) => {
//     console.log(event);
//     console.log(event.target.id);
// });

// addEventListener("click", (e) => {
//     console.log(e);
// });

// button.addEventListener("click", (event) => {
//     console.log(event);
//     console.log(event.target);
// });

// const gallery = document.getElementById('gallery');
// gallery.addEventListener("click", (e) => {
//     console.log(e);
//     console.log(e.target.innerHTML);
//     e.target.classList.add("red");
// });

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("El formulario se ha enviado");
});

button.addEventListener("click", (e) => {
    input.value = "Has Hecho click";
    // form.submit();
});

link.addEventListener("click", (e) => {
    e.preventDefault();
    button.click();
});