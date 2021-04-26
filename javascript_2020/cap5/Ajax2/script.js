const form = document.getElementById("form");
const characters = document.getElementById("characters");
const table = document.getElementById("table");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(characters.children[characters.selectedIndex].value);
    getData(characters.children[characters.selectedIndex].value);
});

const getData = (id) => {
    let xhr = new XMLHttpRequest();


    if (id == undefined) {
        xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
        xhr.addEventListener("load", (users) => {

            const dataJson = JSON.parse(users.target.response);
            console.log(dataJson);
            const fragment = document.createDocumentFragment();
            for (const u of dataJson) {
                const option = document.createElement("option");
                option.textContent = u.name;
                option.value = u.id;
                fragment.appendChild(option);
            }
            characters.append(fragment);

        })

    } else {
        xhr.open("GET", `https://jsonplaceholder.typicode.com/users/${id}`);
        xhr.addEventListener("load", (users) => {

            const dataJson = JSON.parse(users.target.response);
            console.log(dataJson);
            const fragment = document.createDocumentFragment();
            let temp = [dataJson];

            for (const u of temp) {
                const row = document.createElement("tr");
                const dataName = document.createElement("TD");
                const dataUsername = document.createElement("TD");
                const dataEmail = document.createElement("TD");
                dataName.textContent = u.name;
                dataUsername.textContent = u.username;
                dataEmail.textContent = u.email;
                row.append(dataName);
                row.append(dataUsername);
                row.append(dataEmail);
                fragment.append(row);

            }
            if (table.children[1]) {
                table.removeChild(table.children[1]);
            }

            table.append(fragment);

        })
    }

    xhr.send();
}

getData();