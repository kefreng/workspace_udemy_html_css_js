//Fetch API

const button = document.getElementById("button");

button.addEventListener("click", () => {
    /*  if (window.fetch != undefined) console.log("fetch ok");
     else console.log("IE"); */
    //res = response 
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        .then(res => {
            const list = document.getElementById("list");
            const datos = document.createDocumentFragment();
            for (j of res) {
                let li = document.createElement("li");
                li.textContent = `${j.id} - ${j.name}`;
                datos.appendChild(li);

            }
            list.append(datos);
        })
        .catch(err => console.log(err))
});

