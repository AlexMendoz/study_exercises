/**
 * Given an integer array arr, count how many elements x there are, such that x + 1 is also in arr. If there are duplicates in arr, count them separately.
 * Example 1:

Input: arr = [1,2,3]
Output: 2
Explanation: 1 and 2 are counted cause 2 and 3 are in arr.
Example 2:

Input: arr = [1,1,3,3,5,5,7,7]
Output: 0
Explanation: No numbers are counted, cause there is no 2, 4, 6, or 8 in arr.
 

Constraints:

1 <= arr.length <= 1000
0 <= arr[i] <= 1000
 */


function countingElements(arr: number[]): number {
    let elements = new Set(arr);
    let count = 0;
    for (const num of arr) {
        if (elements.has(num+1)) {
            count++;
        };
    };
    return count;
}

console.log(countingElements([1,2,3]));
console.log(countingElements([1,1,3,3,5,5,7,7]))
console.log(countingElements([1,1,2,2]));

/**
 * NOTAS
 * 
 * Contar cuantos elementos hay en el array,eso significa que se tiene que utlizar un SET
 * -    Los elementos que van a contar para la condicion son: x + 1, si en el array hay 1, tiene que existir 1 + 1 para que cuente como elemento
 * -    Concidera que si un elemento esta repetido se tiene que contar por aparte, para [1,1,2,2] el output seria 2 por que el uno esta dos veces y su x + 1 si existe
 * 
 * Idea 1: 
 * -    Convertr en un Set y luego contar cada elemento.
 * -    Este no cuenta repetidos 
 * 
 * Idea 2: 
 * -    Convertir en un Map, cada numero es la llave y el numero de repeticiones es el valor
 * 
 * 
 * 
 */