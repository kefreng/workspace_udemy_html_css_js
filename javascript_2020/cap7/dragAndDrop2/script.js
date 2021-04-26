const pendingTasks = document.getElementById("pending-tasks");
const finishedTasks = document.getElementById("finished-tasks");

pendingTasks.addEventListener("dragstart", (e) => {
    //e.preventDefault();
    /* console.log(e.target); */

    /*dataTransfer
        setdata: establece la informacion que queremos compartir
        getdata: establece la informacion que queremos obtener
    */
    e.dataTransfer.setData('text/plain', e.target.id);
    /* console.log(e.dataTransfer); 
    console.log(e.dataTransfer.getData('text'));*/
});

pendingTasks.addEventListener("drag", (e) => {
    e.target.classList.add("active");
});

pendingTasks.addEventListener("dragend", (e) => {
    e.target.classList.remove("active");
});

finishedTasks.addEventListener("dragover", (e) => {
    e.preventDefault();
});

finishedTasks.addEventListener("drop", (e) => {
    e.preventDefault();
    const element = document.getElementById(e.dataTransfer.getData('text'));
    element.classList.remove("active");
    finishedTasks.appendChild(pendingTasks.removeChild(element));

});


finishedTasks.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/plain", e.target.id);

});

pendingTasks.addEventListener("dragover", (e) => {
    e.preventDefault();
});

pendingTasks.addEventListener("drop", (e) => {
    e.preventDefault();
    const element = document.getElementById(e.dataTransfer.getData("text"));
    pendingTasks.appendChild(finishedTasks.removeChild(element));
});
