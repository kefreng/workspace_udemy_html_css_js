console.log(innerWidth);

const mql = matchMedia('(min-width: 400px) and (orientation: landscape)');

console.log(mql);

const applyMatchMedia = mql => {
    mql.matches ?
        document.body.style.backgroundColor = "red" :
        document.body.style.backgroundColor = "royalblue"
}

addEventListener("resize", () => applyMatchMedia(mql));
addEventListener("DOMContentLoaded", () => applyMatchMedia(mql));
applyMatchMedia(mql);