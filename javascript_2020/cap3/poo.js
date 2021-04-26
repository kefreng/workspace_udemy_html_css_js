class Persona {

    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;

        this.datos = `Me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años.`;
    }

    saludar() {
        return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años`;
    }

}

const per1 = new Persona("Felix", "Flores", 32);
console.log(per1.nombre);
console.log(per1.apellido);
console.log(per1.edad);
console.log(per1.datos);
console.log(per1.saludar());

console.log("--------------");

const per2 = new Persona("Felipe", "Cesped", 26);
console.log(per2.nombre);
console.log(per2.apellido);
console.log(per2.edad);
console.log(per2.datos);
console.log(per2.saludar());