
const titl = document.getElementById("title");
const nam = document.getElementById("name");

console.log(titl);
console.log(nam);

titl.classList.add("main-title", "other-title");

titl.classList.remove("main-title");

console.log(titl.classList.contains("title"));

titl.classList.replace("other-title", "main-title");

console.log(titl.id);
console.log(titl.innerHTML);
console.log(nam.value);

/*
console.log(nam.getAttribute("type"));
console.log(nam.getAttribute("id"));
*/
//nam.setAttribute("type","number");

