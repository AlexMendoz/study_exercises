export {};
/**
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 */

function moveZeros(nums: number[]): number[] {
    let ans = nums;

    let i = 0; // este solo avanza con cierta condición
    let j = 0; // este el puntero que siempre va a avanzar
    let moveNums = 0;

    while (j < ans.length) {
        if(nums[j] != 0){
            [ans[i],ans[j]] = [ans[j],ans[i]];
            moveNums++;
            i++;
            // j++;
        } 
        // else {
        //     j++;
        // }
        j++; // de la forma actual, se factoriza j
    }
    return ans;
}

console.log(moveZeros([0,1,0,3,12]));
console.log(moveZeros([1,0,2]));


/**
 * Idea:
 * 
 * se puede usar la destructuraqcion para resolver este problema [[i],[j]] = [[j],[i]]
 * se tiene que validar que el numero actual sea cero o distinto de cero; es mejor usar distinto de cero
 * tendremos dos variables para movernos
 * 
 * Input: [0,1,0,3,12]      
 * 
 * [0,1,0,3,12]             i=0; j=1; nums[j] != 0 ? [[i],[j]] = [[j],[i]]]; i++ && j++ : j++;
 *  i j
 * [1,0,0,3,12]             i=1; j=2; nums[j] != 0 ? [[i],[j]] = [[j],[i]]]; i++ && j++ : j++;
 *    i j 
 * [1,0,0,3,12]             i=1; j=3; nums[j] != 0 ? [[i],[j]] = [[j],[i]]]; i++ && j++ : j++;
 *    i   j
 * [1,3,0,0,12]             i=1; j=4; nums[j] != 0 ? [[i],[j]] = [[j],[i]]]; i++ && j++ : j++;
 *      i   j
 * [1,3,12,0,0]             i=1; j=5; nums[j] != 0 ? [[i],[j]] = [[j],[i]]]; i++ && j++ : j++;
 * 
 * como j ya no cumple que sea menor que la longitud del array se termina el bucle
 * 
 * RETOS
 * - Que cantidad de movimientos se necesitan para hacer los cambios?
 * - Que numeros son pares o impares?
 * - Se puede hacer con un for?
 * - Qué pasa con un arreglo vacio?
 * - Que pasa si los movimientos solo pueden ser nuemeros adyacentes?
 * 
 * inicio 15:55 16:28
 * 
 * 1. ¿Qué me están pidiendo exactamente?
    que mande los ceros al final, o, en otras palabrar, mandar los numeros distintos de cero al frente
2. Input:
   ¿Qué recibo?
    array de numeros
3. Output:
   ¿Qué tengo que producir?
    array de numeros con los ceros al final
4. Ejemplo pequeño:
   ¿Qué debería pasar manualmente?
    comienzo mis punteros en ceros y avanzo uno de ellos vaidando si es distinto de cero, si lo es, lo intercambio, por el numero en la posicion i, y aumento mis punteros, si es cero, solo aumento mi puntero con el que reviso
5. Brute force:
   ¿Cómo lo resolvería aunque fuera lento?
    Con un bucle While y dos punteros moviendose dependiendo de una condicion
6. ¿Qué información necesito recordar mientras recorro el array?
    donde estan los valores que son cero

7. ¿Necesito recorrer todo? Si
   ¿Necesito dos posiciones? Si
   ¿Necesito recordar valores anteriores? Si, pero se hace implicitamente
   ¿Necesito una ventana? No

8. Después de eso:
   ¿qué patrón parece encajar?

   Two pointers
 */