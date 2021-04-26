const button = document.getElementById("button");
const list = document.getElementById("list");

button.addEventListener("click", () => {


    const post = {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    };

    axios({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        data: post,
        headers: {
            "Content-type": "application/json"
        }
    }).then(res => console.log(res.data))
        .catch(err => console.log(err))

});

/**"https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
            "Content-type": "application/json"
        } */