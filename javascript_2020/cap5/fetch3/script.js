const buttonImg = document.getElementById("button-img");
const buttonPdf = document.getElementById("button-pdf");

/*blob = binary long object */

buttonImg.addEventListener("click", () => {

    fetch("buckethead.jpg")
        .then(res => res.blob())
        .then(img => {
            document.getElementById("img").src = URL.createObjectURL(img);
        });


});

buttonPdf.addEventListener("click", () => {

    fetch("dummy.pdf")
        .then(res => res.blob())
        .then(pdf => {
            document.getElementById("pdf").href = URL.createObjectURL(pdf);
        });


});