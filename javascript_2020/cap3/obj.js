const person = {
    name: "Juan",
    age: 26,
    sons: ["Juan", "Diego", "Pepe", "Rosa", "Tomas"]
}

console.log(person);
console.log(person.name);
console.log(person["name"]);

console.log("-------------");

for (const key in person) {
    console.log(key)
}

console.log("-------------");

for (const key in person) {
    console.log(person[key])
}

for (let son of person.sons) {
    console.log(son);
}

console.log(`Hola ${person.name}. Tienes ${person.age} años y tus hijos se llaman: ${person.sons.join(", ")}`)