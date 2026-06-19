/**
 * 
 */

function inPangram(s: string): boolean {
    // create set to english alphabet
    // let alphabet = new Set(" B, C, D, F, G, H, J, K, L, M, N, P, Q, R, S, T, V, W, X, Y, Z,A, E, I, O, U".toLocaleLowerCase());
    let alphabet = new Map();

    




    return true;
}

/**
 * NOTAS
 * 
 * Un pangrama es una oracion que contiene cada letra de un alfabeto, en este caso el alfabeto ingles.
 * 
 * IDEA 1
 * Se puede usar un Set para tener el alfabeto sin repeteciones.
 * 
 * IDEA 2
 * -    Se puede crear un un map, que cada letra sea la clave y el valor sea las veces que apareceio.
 * -    Si alguna de las claves es dos, ahi se termina el bucle.
 * 
 * 
 */