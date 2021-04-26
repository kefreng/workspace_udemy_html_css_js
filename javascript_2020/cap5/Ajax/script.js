const button = document.getElementById("button");
const list = document.getElementById("list");

button.addEventListener("click", () => {
    console.log("click in button");

    let xhr;
    if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest();
    } else {
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");

    xhr.addEventListener("load", (data) => {
        let dataJson = JSON.parse(data.target.response);

        datos = document.createDocumentFragment();
        for (j of dataJson) {
            let li = document.createElement("li");
            li.textContent = `${j.id} - ${j.name}`;
            datos.appendChild(li);

        }
        list.append(datos);

    });

    xhr.send();


});