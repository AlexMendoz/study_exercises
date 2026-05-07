/**
 * El promedio de radio k para un subconjunto nums centrado en algún índice icon radio k k es el promedio de todos los elementos entre numslos índices i - ky * i + k( inclusive ). Si hay menos de kelementos antes o después del índice k i, entonces el promedio de radio k es k -1.

 * Construye y devuelve una matriz avgsde longitud ndonde avgs[i]es el promedio del radio k para la submatriz centrada en el índicei .

 * El promedio de xlos elementos es la suma de los xelementos dividida por x, utilizando la división entera . La división entera trunca hacia cero, lo que significa que se pierde su parte fraccionaria.

 * Por ejemplo, el promedio de cuatro elementos 2, 3, 1, y 5es (2 + 3 + 1 + 5) / 4 = 11 / 4 = 2.75, que se trunca a 2.
 */
function kRadiusAverageSubArrays(nums: Array<number>, k: number){
    /**
     * NOTAS
     * como primera observacion es un sliding window estatico.
     * Se tiene que verificar el tamaño del subarray para calcular el promedio: if currSubArry.length < k -> -1
     * la divicion sera entera, sin decimales.
     * recordar que el radio es la mitad del diametro, por lo que con un radio 2, el tamaño del sub array sera 2*2 + 1 = 5; k = 3, 3*2 + 1 = 7
     */

}

console.log(kRadiusAverageSubArrays([7,4,3,9,1,8,5,2,6], 3))