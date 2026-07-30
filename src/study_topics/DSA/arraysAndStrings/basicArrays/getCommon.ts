export {};
/**
 * Given two integer arrays nums1 and nums2, sorted in non-decreasing order, return the minimum integer common to both arrays. If there is no common integer amongst nums1 and nums2, return -1.

Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer.

 

Example 1:

Input: nums1 = [1,2,3], nums2 = [2,4]
Output: 2
Explanation: The smallest element common to both arrays is 2, so we return 2.
Example 2:

Input: nums1 = [1,2,3,6], nums2 = [2,3,4,5]
Output: 2
Explanation: There are two common elements in the array 2 and 3 out of which 2 is the smallest, so 2 is returned.
 */

function getCommon(nums1: number[], nums2: number[]){
    /**
     * esto se resuelve con two pointers
     * un puntero en cada uno de los arreglos
     * i -> nums1; j -> nums2;
     * como los valores estan oredenados, la busqueda comienza desde el indice 0 para ambos
     */
    let i = 0, j = 0, res = -1;

    while(i < nums1.length && j < nums2.length){ // validamos que ambos indices esten dentro de los arrays
        if (nums1[i] === nums2[j]) { // validacion de cada elmento
            return nums1[i];
        } 
        // avance de cada puntero segun la condicion ¿que es lo que hace que avance o no un puntero?
        if (nums1[i] < nums2[j]) { // como 1 es menor que el 2, ya no puede aparecer mas en nums2
            i++;
        } else {
            j++;    // si el valor de nums2[j] es menor que nums1[i] se avanza j por que ya no puede ser el menor
        }
        // un punto avanza si no cumple la condicion ¿cual es esa condicion?
        // que sea el numero sea igual en ambos y que sea el menor
        // analiza bien las condiciones, eres matematico, no lo olvides
    }
    
    return -1;

}

console.log(getCommon([1,2,3,6], [2,3,4,5]))

/**
 * PASOS:
 * 1. colocarl el puntero en 0 para cada unos de los arrays
 * 2. declarar [res] una variable para almacenar el minimo valor comun
 * 3. declarar un ciclo while para determinar cuando nos tenemos que detener, si alguno de los valores llega al final de array
 * 4. comparar los valores, si ambos son iguales el guarda el valor  en [res]
 * 5. si un indice llega al final, regresar el ultimo valor, el mas pequeño
 */

/**
 * cuado se tiene la primer coincidencia se sale por que debe ser el menor
 * se tienen los dos indices en 0
 * [1,2,3,6], [2,3,4,5] ¿i y j son iguales?
 *  i          j        -> F i++
 *    i        j        -> T i++ j++ res = 2
 *      i        j      -> T i++ j++ res = 2
 *        i        j    -> F i++     res = 2
 * como i ya termino, pero j, tenemos que verificar si el ultimo valor de i es el meneor de j
 */