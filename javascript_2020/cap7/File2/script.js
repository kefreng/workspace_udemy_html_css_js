const fileInput = document.getElementById("file");
const progress = document.getElementById("progress");

/* fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.addEventListener("progress", (e) => {
         console.log(`loaded : ${e.loaded}`);
        console.log(`total : ${e.total}`); 
        let totalLoaded = e.loaded * 100 / e.total;
        console.log("total loaded : ", totalLoaded);
        progress.style.width = Number.parseInt(totalLoaded) + '%';
        //progress.setAttribute("width", totalLoaded);
    });

    fileReader.addEventListener("loadend", () => {
        console.log("end");
        progress.style.width = '100%';
    });
});
 */
const root = document.documentElement;

fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.addEventListener("progress", (e) => {
        let totalLoaded = e.loaded * 100 / e.total;
        root.style.setProperty('--bar-width', totalLoaded + '%')
    });

    fileReader.addEventListener("loadend", () => {
        root.style.setProperty('--bar-width', '100%')
    });
});