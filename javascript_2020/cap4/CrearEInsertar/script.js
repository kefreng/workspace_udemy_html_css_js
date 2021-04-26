const days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

const title = document.getElementById("title");
const daysList = document.getElementById("daysList");
const daysSelect = document.getElementById("daysSelect");

//  const itemList = document.createElement("li");
// itemList.textContent = "Lunes";

// console.log(itemList);

// daysList.appendChild(itemList);
title.innerHTML = "DOM - <span>Crear e insertar elementos I</span>"

const fragment = document.createDocumentFragment();

for (const day of days) {
    // console.log(day);
    //daysList.innerHTML += `<li>${day}</li>`;
    const itemList = document.createElement("li");
    itemList.textContent = day;
    fragment.appendChild(itemList);
}

console.log(fragment);

daysList.appendChild(fragment);

const fragmentSelect = document.createDocumentFragment();
for (const day of days) {
    const optionSelect = document.createElement("option");
    optionSelect.setAttribute("value", day.toLowerCase());
    // optionSelect.value = day;
    optionSelect.textContent = day;
    fragmentSelect.appendChild(optionSelect);
}

daysSelect.appendChild(fragmentSelect);
