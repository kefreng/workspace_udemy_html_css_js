const button = document.getElementById("button");
const list = document.getElementById("list");

button.addEventListener("click", () => {

    axios({
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/users'
    }).then(res => {
        /* console.log(res);
        console.log(res.data); */
        let fragment = document.createDocumentFragment();
        for (let u of res.data) {
            let ul = document.createElement("li");
            ul.innerHTML = `${u.id} - ${u.name}`

            fragment.appendChild(ul);
        }
        list.appendChild(fragment);
    }).catch(err => console.log(err))

});