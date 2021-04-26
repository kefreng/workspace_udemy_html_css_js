const form = document.getElementById("form");
const button = document.getElementById("submitButton");

const name = document.getElementById("name");
const email = document.getElementById("email");
const gender = document.getElementById("gender");
const terms = document.getElementById("terms");

const formIsValid = {
    name: false,
    email: false,
    gender: false,
    terms: false
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateForm();
});

const validateForm = () => {
    const formValues = Object.values(formIsValid);
    console.log(formIsValid);
    console.log(Object.values(formIsValid));
    const valid = formValues.findIndex(value => value == false);
    if (valid == -1) {
        console.log("sending data....");
        form.submit();
    } else {
        alert("invalid form....");
    }
}

name.addEventListener("change", (e) => {
    console.log(e.target);
    if (e.target.value.trim().length > 0) {
        formIsValid.name = true;
    }
})

email.addEventListener("change", (e) => {
    console.log(e.target);
    if (e.target.value.trim().length > 0) {
        formIsValid.email = true;
    }
})

gender.addEventListener("change", (e) => {
    console.log(e.target);
    if (e.target.checked == true) formIsValid.gender = true;
});

terms.addEventListener("change", (e) => {
    console.log(e.target);
    formIsValid.terms = e.target.checked;
    e.target.checked ? button.removeAttribute("disabled") :
        button.setAttribute("disabled", true);
});