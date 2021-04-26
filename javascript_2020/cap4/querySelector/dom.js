
/*const title = document.getElementById('title');

console.log(title);

title.textContent = "Dom - Accediendo a nodos";
*/
const paragraph = document.querySelector('.paragraph:nth-child(2)');

const span = paragraph.querySelector("span");

console.log(paragraph)
console.log(span);

const span1 = document.getElementById("title").querySelector("span");

console.log(span1);

const paragraphs = document.querySelectorAll(".paragraph");

console.log(paragraphs);

paragraphs[0].style.color = "red";

const paragraphsSpread = [...document.querySelectorAll(".paragraph")];
const paragraphsArray = Array.from(document.querySelectorAll(".paragraph"));

//paragraphsSpread.map(p => p.style.color = "blue");
paragraphsArray.map(p => p.style.color = "grey");