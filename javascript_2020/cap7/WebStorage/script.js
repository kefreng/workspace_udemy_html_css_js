
/**session storage guarda info permanentemente en una pestaña y se pierde cuando se cierra
 * local storage storage guarda info permanentemente en el ordenador
 */

const form = document.getElementById("form");
const keys = document.getElementById("keys");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    /*  const person = {
         name: 'Felix',
         email: "felix@gmail.com"
     }
 
     sessionStorage.setItem("person", JSON.stringify(person));
     sessionStorage.setItem("name", "Felix"); */
    localStorage.setItem(form.key.value, form.value.value);

    keys.innerHTML += `<option>${form.key.value}</option>`;

    form.reset();
});

keys.addEventListener("change", (e) => {
    let val = localStorage.getItem(keys[keys.selectedIndex].textContent);

    document.getElementById("infoValue").textContent = val;
});

localStorage.clear();
localStorage.removeItem("name");