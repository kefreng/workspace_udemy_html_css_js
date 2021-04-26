class Libro {

    constructor(titulo, autor, año, genero) {
        this.titulo = titulo;
        this.autor = autor;
        this.año = año;
        this.genero = genero;
    }

    getInfo() {
        return `Nombre del libro ${this.nombre}\n
        Autor: ${this.autor} \n
        Año: ${this.año} \n
        Genero: ${this.genero}`
    }
}

function showByGenero(genero) {
    console.log(`Mostrando libros para genero  : ${genero}`);
    for (let libro of libros) {
        if (libro.genero === genero) {
            console.log(libro);
        }
    }
}

function showLibros() {
    console.log("Mostrando libros : ")
    for (let libro of libros) {
        console.log(libro);
    }
}

function showAutors() {
    console.log("Mostrando autores ordenados alfabeticamente....");
    let autors = [];
    for (let libro of libros) {
        autors.push(libro.autor);
    }
    console.log(autors.sort());
}



function setNewLibro() {
    let titulo = '';
    while (titulo == '') {
        titulo = prompt("Ingrese titulo para libro:");
    }
    let autor = prompt("Ingrese autor para libro");
    let año = prompt("Ingrese año para libro");
    let genero = prompt("Ingrese genero para libro");

    let libroTemp = new Libro(titulo, autor, año, genero);

    return libroTemp;
}


const libro1 = setNewLibro();
const libro2 = setNewLibro();
const libro3 = setNewLibro();

let libros = [libro1, libro2, libro3];

showLibros();
showAutors();
showByGenero("zxc");