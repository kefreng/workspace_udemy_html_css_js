var list = document.getElementById("list");
var newElement = document.createElement("li");
newElement.textContent = "Soy el elemento nuevo";

// list.insertBefore(newElement, list.children[1]);

// list.children[0].insertAdjacentElement("beforebegin", newElement);
// list.insertAdjacentElement("afterbegin", newElement);
// list.insertAdjacentElement("beforeend", newElement);
// list.children[list.children.length - 1].insertAdjacentElement("afterend", newElement);
// list.children[list.children.length - 1].insertAdjacentHTML("afterend", "<li>Elemento con html</li>");
// list.children[list.children.length - 1].insertAdjacentText("afterend", "<li>Elemento con html</li>");

// list.replaceChild(newElement, list.children[0]);


// list.children[0].before(newElement);
// list.prepend(newElement);
// list.append(newElement);
// list.children[list.children.length - 1].after(newElement);

// list.children[0].replaceWith(newElement);

// list.after(list.cloneNode(true));

// list.remove();
list.removeChild(list.children);