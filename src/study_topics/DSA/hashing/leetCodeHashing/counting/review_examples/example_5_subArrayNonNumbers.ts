/**
 * 1248. Count Number of Nice Subarrays
 * Given an array of positive integers nums and an integer k. Find the number of subarrays with exactly k odd numbers in them.

For example, given nums = [1, 1, 2, 1, 1], k = 3, the answer is 2. The subarrays with 3 odd numbers in them are [1, 1, 2, 1, 1] and [1, 1, 2, 1, 1].
 */

function subArrayOfNonNums(nums: number[], k:number): number {

    //variables para los indices dinamicos
    let i = 0;
    let j = 0;
    //contador de subArray validos
    let numOfValidSubArray = 0;

    //variable para contar la cantidad de numeros impares que vamos encontrando durante el recorrido del array
    let nonNums = 0;
    while (j < nums.length && i < nums.length) {
        console.log(i,j, nonNums, nums.slice(i,j+1));
        
        if (nonNums == k) {
            numOfValidSubArray++;
            console.log("find one")
        }
        if (nonNums < k) {
            if (nums[j]%2 == 1) {
                nonNums++;
            }
            j++;
            
        } else {
            
            console.log( "nonNums ya no es menor que k")
            i++;
            if (nums[i]%2 == 1) {
                nonNums--;
            }
            
        }

    }
    return numOfValidSubArray; // segun mi logica, esto es una solucion valida
}

// console.log(subArrayOfNonNums([1, 1, 2, 1, 1], 3));
console.log(subArrayOfNonNums([2,2,1,2,2,1,2,2,2], 2))

//para esta idea, el contadores de numeros nones solo aumenta, pero tambien tiene disminuar cuando se quite un valor
// ¿Cuando se queita un valor? Cuando i aumenta
// otro error, j siempre aumenta cuando no tiene le numero de impares, pero hay subarrays que si cumplen la condicion mientras que i aumenta, entonces j tiene que esperar mientras siga siendo valido

// tengo 3 casos onNums == k, significa que hay intervalos, o sea, nonNums < k y nonNums > k
/**
 * comienzo en i=0, j=0
 * verifico que nums[j] sea impar, si es impar, nonNums++; j++;
 * Si no es impar, tengo que seguir avanzando, entonces j, no debe depender de una condicion
 * 
 * Como j no debe depender de una condicion, podemos usar un for
 * para j hasta la longitud de nums
 * verifico que nums[j] sea impar, si es impar, nonNums++;
 * 
 * Caso nonNums == k; numOfValidSubArray++; ahora, durante el camino i = 0; poque solo voy contando los nones, significa que puede haber subarrays validos cuando aumente i por ejemple [2,2,2,1,2,2,1], esto es valido pero [2,2,1,2,2,1] y [2,1,2,2,1] y [1,2,2,1], por que cumplen k = 2, entonces cuando tengo un array valido, tengo que detener a j y aumentar i
 * i se aumenta si el valor de nums[i] es par, cuando llegue a un impar me detengo y aumento j, 
 * entonces [1,2,2,1] -> [1,2,2,1,2], y esto es valido, continuo aumentado j
 * 
 * para que j se detenga, hare el analisis en un while, y mi valor que me permitira salir sera el nonNums, si nonNums < k, salgo
 * 
 * OTRO ENFOQUE
 * 
 * Inicio: avanzo j hasta que tenga k impares, nonNums == k
 * 
 * cuando tengo k impares, avanzo i hasta que sea impar; nonNums == k
 * 
 * cuando i es impar, avanzo j, nonNums == k
 * 
 * cuando j es impar, nonNums != k, avanzo i, hasta que tenga k impares
 * 
 * [2,2,1,2,1,2,2,1,2]  k= 2, (nonNums == k, valid ++)
 *  i                   nonNums = 0; i= 0, j= 0; valid = 0; (si NonNums < k ? j++ : _i++);
 *  j
 * [2,2,1,2,1,2,2,1,2]
 *  i                   nonNums = 0; i= 0, j= 1; valid = 0; (si NonNums < k ? j++ : _i++);
 *    j
 * [2,2,1,2,1,2,2,1,2]
 *  i                   nonNums = 1; i= 0, j= 2; valid = 0; (si NonNums < k ? j++ : _i++);
 *      j
 * [2,2,1,2,1,2,2,1,2]
 *  i                   nonNums = 1; i= 0, j= 3; valid = 0; (si NonNums < k ? j++ : _i++);
 *        j
 * [2,2,1,2,1,2,2,1,2]. -------------
 *  i                   nonNums = 2; i= 0, j= 4; valid = 1; (si NonNums < k ? _j++ : i++);
 *          j
 * [2,2,1,2,1,2,2,1,2]
 *    i                 nonNums = 2; i= 1, j= 4; valid = 2; (si NonNums < k ? _j++ : i++);
 *          j
 * [2,2,1,2,1,2,2,1,2]
 *      i               nonNums = 2; i= 2, j= 4; valid = 3; (si NonNums < k ? _j++ : (i++ (nums[i]%2 == 1 ? nonNUms-- : )));
 *          j
 * [2,2,1,2,1,2,2,1,2]
 *        i             nonNums = 1; i= 3, j= 4; valid = 4; (si NonNums < k ? j++ : _(i++ (nums[i]%2 == 1 ? nonNUms-- : )));
 *          j
 * [2,2,1,2,1,2,2,1,2]
 *        i             nonNums = 1; i= 3, j= 5; valid = 4; (si NonNums < k ? j++ : _(i++ (nums[i]%2 == 1 ? nonNUms-- : )));
 *            j
 * [2,2,1,2,1,2,2,1,2]
 *        i             nonNums = 1; i= 3, j= 6; valid = 4; (si NonNums < k ? j++ : _(i++ (nums[i]%2 == 1 ? nonNUms-- : )));
 *              j
 * [2,2,1,2,1,2,2,1,2]
 *        i             nonNums = 2; i= 3, j= 7; valid = 5; (si NonNums < k ? _j++ : (i++ (nums[i]%2 == 1 ? nonNUms-- : )));
 *                j
 * [2,2,1,2,1,2,2,1,2]
 *          i           nonNums = 1; i= 4, j= 7; valid = 6; (si NonNums < k ? _j++ : (i++ (nums[i]%2 == 1 ? nonNUms-- : )));
 *                j

 */

