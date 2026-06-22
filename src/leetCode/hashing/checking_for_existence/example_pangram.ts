/**
 * 
 */

function isPangram(s: string): boolean {
    // create set to english alphabet
    let alphabet = new Set();
    let alphabetLen = 26;
    let count =0;
    for (let i = 0; i < s.length; i++) {
        if (!alphabet.has(s[i])) {   
            alphabet.add(s[i]);
            count++;   
        }
    }
    if(alphabet.size === alphabetLen) return true; else return false;
    //IMPORTANTE
    // como las letras del alfabeto ya estan definidas (26) se puede hacer la tranformacion  directa a una Set, asi solo comparamos la longitud del set con el 26 de las letras totales
}

console.log(isPangram("thequickbrownfoxjumpsoverthelazydog"));
console.log(isPangram("leetcode"));
console.log(isPangram("leetcodeaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"));

/**
 * NOTAS
 * 
 * Un pangrama es una oracion que contiene cada letra de un alfabeto, en este caso el alfabeto ingles.
 * 
 * El alfabeto ingles tiene 26 letras
 * 
 * IDEA 1
 * Se puede usar un Set para tener el alfabeto sin repeteciones.
 * podemos iterar sobre cada letra del array, 
 * verificar si se llega hasta el final
 * y tener un contador de apariciones
 * 
 * IDEA 2
 * -    Se puede crear un un map, que cada letra sea la clave y el valor sea las veces que apareceio.
 * -    Si alguna de las claves es dos, ahi se termina el bucle.
 * 
 * 
 */