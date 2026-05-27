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

    let i = nums1.length -1, j = nums2.length -1, res = -1;

    while (i > 0 && j > 0) {
        console.log(1,res)
        if( nums1[i] === nums2[j]){
            // res = nums1[i];
            res = Math.min(res, nums1[i]);
        }
        i--;
        j--;
    }
    
    //condicion por si nums1 termina antes que nums2
    if (i > 0) {
        while(i < nums1.length){
            if( nums1[i] === nums2[j]){
                // res = nums1[i];
                res = Math.min(res, nums1[i]);
                console.log(2,res)
            }
            i--;
        }
    }
    //condicion por si nums2 termina antes que nums1
    if (j > 0 ) {
        while (j < nums2.length) {
            if (nums1[i] === nums2[j]) {
                // res = nums1[i];
                res = Math.min(res, nums1[j]);
                console.log(3,res)
            }
            j--;
        }
    }

    return res;

}
// res no puede ser cero!!!!!!! jajajajaja

console.log(getCommon([1,2,3,6], [2,3,4,5]))

/**
 * PASOS:
 * 1. colocarl el puntero en 0 para cada unos de los arrays
 * 2. declarar [res] una variable para almacenar el minimo valor comun
 * 3. declarar un ciclo while para determinar cuando nos tenemos que detener, si alguno de los valores llega al final de array
 * 4. comparar los valores, si ambos son iguales el guarda el valor  en [res]
 * 5. si un indice llega al final, regresar el ultimo valor, el mas pequeño
 */