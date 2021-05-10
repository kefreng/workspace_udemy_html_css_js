const button = document.getElementById("button");

button.addEventListener("click", () => {
    const geolocation = navigator.geolocation;

    geolocation.getCurrentPosition(getPosition, error, options);
});

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
}

const getPosition = (position) => {
    console.log(position);
}

const error = (error) => console.log(error);