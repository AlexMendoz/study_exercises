/**
 * 
 * Administracion de librería
 * 
 * crear objeto referente a los datos de un libro
 * crear funciones para borrar, guardar, editar, y cambiat de estado algun valor de un libro
 * 
 */


import * as readline from "readline/promises";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

interface Book {
    author: string,
    title: string,
    description: string,
    read: boolean,
}

/**
 * crea un libro de los elementos al azar de los arrays
 * @returns Book
 */
function createBook(): Book {

    let authors: Array<string> = ["Sarah J. Maas",
        "Shelby Mahurin",
        "Elise Kova",
        "Holly Black",
        "Tricia Levenseller",
        "Margaret Rogerson",
        "Roshani Chokshi",
        "Stephanie Garber",
        "Laura Thalassa",
        "Alexandra Christo"];
    let titles: Array<string> = ["Reino de Sombras y Llamas",
        "La Magia que Nos Une",
        "El Príncipe de Hielo",
        "Susurros del Bosque Eterno",
        "La Hechicera del Alba",
        "El Juramento del Guardián",
        "Las Alas del Destino",
        "Luz entre las Tormentas",
        "El Ladrón de Estrellas",
        "Corazón de Fuego"];
    let descriptions: Array<string> = ["Una hechicera prohibida une fuerzas con un príncipe maldito para salvar un reino dividido.",
        "Dos enemigos destinados a matarse descubren un vínculo que podría cambiar el mundo.",
        "Una guardiana de la noche protege a un ser de luz con quien no debería enamorarse.",
        "El destino de dos reinos recae en una alianza tan peligrosa como apasionada.",
        "Una asesina y un bibliotecario mágico deben enfrentarse a secretos que los unen.",
        "Una guerrera sin magia protege al último mago vivo… y a su propio corazón.",
        "Un pacto con un espíritu antiguo despierta un romance tan prohibido como poderoso.",
        "Su beso puede destruir imperios, pero él es la única persona capaz de salvarla.",
        "Un dragón ancestral toma forma humana para proteger a la única mortal que puede detener una guerra.",
        "Una ladrona con poderes oscuros descubre que su peor enemigo es también su alma gemela."
    ];
    let read: boolean = false;

    return {
        author: authors[Math.random() * authors.length + 1],
        title: titles[Math.random() * (titles.length + 1)],
        description: descriptions[Math.random() * (descriptions.length + 1)],
        read: false
    };

}

/**
 * Funcion para editar un libro
 * @param book Libro a editar
 */
function editBookInformation(book: Book) {

}

function newBook(books: Array<Book>): Array<Book> {
    // de esta forma no modificamos el arreglo original
    // let newBooks: Array<Book> = [...books, createBook()];
    books.push(createBook());
    return books;
}
/**
 * 
 * @returns Array incicial de libros
 */
function myBooks(): Array<Book> {
    let books: Array<Book> = [createBook(), createBook(), createBook()];
    return books;
}

async function menu() {
    console.log("Bienvenido a mi biblioteca! \n");
    console.log("Estos son mis libros: \n\n");
    console.log(myBooks);

    console.log("\n\n✴Elije una de las opciones: ");
    console.log("\n1) Agregar un nuevo libro \n2) Editar un libro \n3)Borrar un libro");
    let option = await rl.question("¿Tu nombre? ");
    console.log("option: ", option);
    rl.close();

}

menu()

