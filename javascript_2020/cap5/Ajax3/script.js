const form = document.getElementById("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendData(form);
});

const sendData = (data) => {
    let xhr;
    if (window.XMLHttpRequest) xhr = new XMLHttpRequest();
    else xhr = new ActiveXObject("Microsoft.XMLHTTP");

    console.log(data);
    xhr.open("POST", "http://localhost:3000/api/formdata");
    xhr.addEventListener("load", (e) => {
        console.log("asdasd");
        console.log(JSON.parse(e.target.response));
    });
    const formData = new FormData(data);
    xhr.send(formData);
}
