
const fileInput = document.getElementById("file");
const images = document.getElementById("images");
/* const img = document.getElementById("img");
const text = document.getElementById("text"); */

/* fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    // console.log(file);
    // console.log(e.target.files);
    const fileReader = new FileReader();
    fileReader.readAsText(file);
    fileReader.addEventListener("load", (e) => {
        console.log(e);
        console.log(e.target.result);
        text.textContent = e.target.result;
    });
}); */

//carga simple imagenes
/* fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.addEventListener("load", (e) => {
        img.setAttribute("src", e.target.result);
    });

}); */

//Carga multiple de imagenes
fileInput.addEventListener("change", (e) => {
    const files = e.target.files;
    const fragment = document.createDocumentFragment();
    for (const file of files) {
        const img = document.createElement("img");
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);
        fileReader.addEventListener("load", (e) => {
            img.setAttribute("src", e.target.result);
        });
        fragment.appendChild(img);
    }
    images.appendChild(fragment);
});