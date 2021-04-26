var parent = document.getElementById("parent");

console.log(parent.parentNode);
console.log(parent.parentElement);
console.log(parent.parentElement.parentElement.parentElement);


console.log(parent.childNodes);
console.log(parent.children);
console.log(parent.children[2]);
console.log(parent.firstChild);
console.log(parent.firstElementChild);
console.log(parent.lastChild);
console.log(parent.lastElementChild);
console.log(parent.hasChildNodes());
console.log(parent.firstChild.hasChildNodes());

console.log("-------------");

console.log(parent.nextSibling);
console.log(parent.nextElementSibling);
console.log(parent.parentElement.nextElementSibling);
console.log(parent.parentElement.previousSibling);
console.log(parent.parentElement.previousElementSibling);