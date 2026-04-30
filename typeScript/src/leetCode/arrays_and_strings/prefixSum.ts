/**
 * La suma de prefijos e suna tecnica que se usa en arrays y string para obtener la suma en tiempo constante de un sub array.
 * 
 * arr = [5, 2, 1, 6, 3, 8]
 * prefix = [5,7,8,14,17,25] -> es la suma acumulada de los elementos de arr
 * 
 * para acceder a la suma de un subArray basta con ejecutar esta operacion prefix[j] - prefix[i-1]
 * 
 */

/**
 * Dado un array de numeros, un array de querys tal que querys[i] = [x,y] y un entero limit, regresa un array de boleanos que regrese la respuesta de cada query. Un query es true si la suma de x a y es menor que un limite, o falso en otro caso
 * 
 * Ejemplo: Dado lo siguiente 
 * nums = [1, 6, 3, 2, 7, 2], queries = [[0, 3], [2, 5], [2, 4]], and limit = 13 la respuesta seria [true, false, true] para cada query, la suma de los subarrays es [12, 14, 12]
 * 
 * prefix = [ 1, 7, 10, 12, 19, 21 ]
 */

function answerQuerys(arr: Array<number>, querys: Array<any>, limit: number) {
    let prefix = [arr[0]];
    // se crea un prefix Array
    for (let i = 1; i < arr.length; i++) {
        prefix.push(arr[i] + prefix[i-1]);
    }
    let ans = [];
    //evaluacion de los querys
    for (let i = 0; i < querys.length; i++) {
        if ((prefix[querys[i][1]] - prefix[querys[i][0]] + arr[i]) < limit) {
            ans.push(true);
        } else {
            ans.push(false);
        }
        
    }
    return ans;
}



console.log("\nanswerQuerys")
console.log(answerQuerys([1, 6, 3, 2, 7, 2], [[0, 3], [2, 5], [2, 4]],13))

/**
 * Dado un arra de numeros enteros, encuentra el numeor de formas en que se puede divir el array en subarrays tal que el la suma de los elementos del primer subarray sea mayor o igual que la segunda parte. La segunda parte debe tener al menos un numero
 */

function numberOfWaysToSplitArray(arr: Array<number>){

    /**
     * NOTAS
     * 
     * El array se tiene que divir en dos, por lo que al tomar un conjunto el sobrante por default es la otra mitad
     * [10,4,-8,7] -> [10] y [4, -8, 7]; [10,4] y [-8,7]; [10,4,-8] y [7]
     * [10,4,-8,7] -> 10 y 3;           14 y -1;            6 y 7
     * Se debe usar el array de prefix
     */

    // Creamos el prefixSum
    let prefix = [arr[0]]
    for (let i = 1; i < arr.length; i++) {
        prefix[i] = prefix[i-1] + arr[i];
    }
    // la idea principal de este problema es jugar con el prefixSum
    let ans = 0;

    for (let i = 1; i < arr.length; i++) {
        if(prefix[i-1] > (prefix[prefix.length -1] - prefix[i-1])){
            //console.log(prefix[i-1] ,">", (prefix[prefix.length -1] - prefix[i-1]))
            ans ++;
        }
        
    }

    return ans;

}
console.log("\nnumberOfWaysToSplitArray")
console.log(numberOfWaysToSplitArray([10,4,-8,7]))
console.log(numberOfWaysToSplitArray([10,4,12,6,4,1,-8,7]))

/**
 * NOTAS IMPORTANTES
 * La prefixSum nos ahorra la iteracion usando un solo array con la suma acumulada de un array.
 * Hay que tomar en cuenta esta caracteriztica de la prefixSum, ese es el verdadero uso de la prefixSum
 * arr = [10,4,-8,7]
 * prefixSum = [10,14,6,13]
 * si quiero encontrar la suma de indice 1 al 3 seria 13 - 10 = 3
 * indice 1 = 4, indice 3 = 7
 * prefix[1] = 14, prefix[3] = 13 -> ¿Cómo llegamos al 3?
 * lo normal seria sumar del 4 al 7 -> 4 + (-8) + 7 = 4 - 8 + 7= -4 + 7 = 3 (NORMAL - MAL USO)
 * con prefixSum
 * prefix[j] - prefix[i - 1] = prefix[3] - prefix[1-1] = prefix[3] - prefix[0] = 13 - 10 = 3 
 * 
 */