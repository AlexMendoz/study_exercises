export {};
/**
 * Code Question 1

As part of your Day 1 Orientation at Amazon, you've been invited to participate in a programming challenge. Please represent your team by completing the following challenge:

Given an array of binary digits, 0 and 1, sort the array so that all zeros are at one end and all ones are at the other. Which end does not matter. To sort the array, swap any two adjacent elements.

Determine the minimum number of swaps to sort the array.

Example
arr = [0, 1, 0, 1]

With 1 move, switching elements 1 and 2, yields [0, 0, 1, 1], a sorted array.

Function Description

Complete the function minMoves in the editor below.

minMoves has the following parameter(s):

int arr[n]: an array of binary digits
Returns
int: the minimum number of moves necessary
Constraints
1 ≤ n ≤ 10⁵
arr[i] is in the set {0, 1}
 */
function minMoves(arr: number[]) {

    let unosVistos = 0;
    let cerosVistos = 0;
    let movimientosCeros = 0;
    let movimientosUnos = 0;

    for (const num of arr) {
        //caso 1) ceros a la izquierda
        if (num === 0) {
            movimientosCeros+= unosVistos;
            cerosVistos++;
        } else {
            movimientosUnos+= cerosVistos;
            unosVistos++;
        }
    }
    console.log(movimientosCeros,movimientosUnos)
    return Math.min(movimientosCeros,movimientosUnos);

    let zerosSeen = 0;
    let onesSeen = 0;

    // Movimientos para obtener: 000...111
    let zerosLeftMoves = 0;

    // Movimientos para obtener: 111...000
    let onesLeftMoves = 0;

    for (const value of arr) {
        if (value === 0) {
            // Este cero debe cruzar todos los unos anteriores
            // para quedar del lado izquierdo.
            zerosLeftMoves += onesSeen;

            zerosSeen++;
        } else {
            // Este uno debe cruzar todos los ceros anteriores
            // para quedar del lado izquierdo.
            onesLeftMoves += zerosSeen;

            onesSeen++;
        }
    }

    return Math.min(zerosLeftMoves, onesLeftMoves);
}

console.log(minMoves([0,1,0,0,1,1]));
console.log(minMoves([0, 1, 0, 1]));
console.log(minMoves([1, 1, 1, 1, 0, 1, 0, 1]));


/**
 * Notas
 * 
 * es un problema similar a two pointers
 * No es necesario modificar el array, solo basta con tener en cuenta los cambios de los ceros o unos
 * 
 * [0,1,0,0,1,1] -> [0,0,0,1,1,1]
 * Como el orden final de los ceros y unos no importa, hay dos posibilidades: 
 * 1) [0,0,0,1,1,1]
 * 2) [1,1,1,0,0,0]
 * 
 * Entonces tenemos que ver que es mas rapido, paasar todos los ceros a la izquierda o todos los unos a la izquierda (es lo mismo, pasar los todos ceros a la derecha o todos lo unos a la derecha)
 * [0,1,0,0,1,1] caso 1) solo 0
 *    i         contadorUnos= 1, movimientos = 0;
 * [0,1,0,0,1,1] como ya vimos un 1, el cero tiene que pasarlo,
 *.     i       contadorUnos = 1, movimientos = 1;
 * [0,1,0,0,1,1] como ya vimos un 1, el cero tiene que pasarlo,
 *        i     contadorUnos = 1, movimientos 2;
 * 
 * 
 * */
