const video = document.getElementById("video");

console.log(document.visibilityState);
addEventListener("visibilityChange", (e) => {
    console.log(document.visibilityState);
    if (document.visibilityState === "visible") {
        console.log("PLAY");
        video.play();
    } else if (document.visibilityState === "hidden") {
        console.log("HIDDEN");
        video.pause();

    }
});