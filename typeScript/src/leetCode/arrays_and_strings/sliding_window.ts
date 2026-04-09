/**
 * Ejercicios de sliding window
 * 
 * Parte de la estrategia que usa sliding window es hacer el analizis sobre el recorrido del array, asi no guardamos variables inecesarias y solo reasignamos cuando es necesario.
 *
 */


/**
 * Ejercicio 1
 * 
 * Dado un array de numeros positivos arr y un entero k, encuentra el subarray mas largo que cumpla que la suma sea menor o igual que k
 */
function longestSubArray(arr: Array<number>, k: number){
    let left = 0; //limite izquierdo
    let curr = 0; //suma actual del subarray
    let res = 0; //resultado

    for (let right = 0; right < arr.length; right++) {
        curr += arr[right];

        // while mientras no se cumpla la condicion
        while(curr > k){
            curr -= arr[left];
            left++; //aumentar el limite izquierdo IMPORTANTE
        }
        res = Math.max(res, right - left +1);
        // console.log(res, right-left + 1, arr.slice(left,right+1));
    }
    return res;
}
console.log("\nlongestSubArray")
console.log(longestSubArray([3, 1, 2, 7, 4, 2, 1, 1, 5], 8))

/**
 * Ejercicio 2
 * 
 * Dado un array binario s (que solo contenga 0 y 1), Deberás elegir hasta un 0 y cambiarlo por 1. Tal que la longitud logre ser la longitud mas grande de un sub array que contenga solo 1
 * 
 * s = "1101100111"; la repsuesta es 5, ya que si cambiamos el indice 2 se crea 1111100111.
 */
function binaryString(s: string) {
    let j = 0; //left
    let i = 0;
    let curr = 0; //contadores de ceros
    let ans = 0; //longitud maxima del subarray - i

    while (i < s.length) {
        if( s[i] == "0"){ //buscamos ceros en el array
            curr ++;
        }
        while( curr > 1 ) {
            if (s[i] == '0' && s[j] == '0') {
                i++;
                j++;
            }
            j = i;
            i = j;
            curr = 0;
        }
        ans = Math.max(ans, i - j +1);
        i++; //avance de rigth
    }
    return ans;
}
console.log("\nbinaryString");
console.log(binaryString("1101100111"), "5"); // res 5
console.log(binaryString("11001100111"), "4"); //res 4
console.log(binaryString("110001100111"), "4"); // tres  res 4
console.log(binaryString("011001100111"), "4"); // cero al inicio res 4
console.log(binaryString("00110011001110"), "4"); // doble cero al inicio y final res 4
console.log(binaryString("1101111100111"), "8"); // res 8
console.log(binaryString("00100"), "2"); // res 2
/**
 * 1101100111
 * i            curr = 0; i = 0; j = 0
 * j
 * 1
 * 1101100111
 *  i           curr = 0; i = 1; j = 0
 * j
 * 2
 * 1101100111
 *   i          curr = 1; i = 2; j = 0
 * j
 * 3
 * 1101100111
 *    i         curr = 1; i = 3; j = 0
 * j
 * 4
 * 1101100111
 *     i        curr = 1; i = 4; j = 0
 * j    
 * 5
 * 1101100111
 *      i       curr = 2; i = 5; j = 0; length = 5; length > ans? SI -> ans = length NO  ans = ans; ans 5
 * j
 * 6
 * 1101100111
 *      i       curr = 1; i = 6; j = 6
 *      j   
 * 7
 * 1101100111
 *       i      curr = 2; i = 7; j = 6; length = 2; length 2 > ans 5? SI -> ans = length NO  ans = ans; ans 5
 *      j
 * 8
 * 1101100111
 *       i      curr = 1; i = 8; j = 8
 *       j
 * 9
 * 1101100111
 *        i     curr = 1; i = 9; j = 8
 *       j
 * 10
 * 1101100111 
 *         i    curr = 1; i = 10; j = 8
 *       j  
 * 11
 * 1101100111 while i < arr.length; 11 < 11 -> se detiene
 *          i   curr = 1; i = 11; j = 8; length = 2; length 4 > ans 5 ? SI -> ans = length NO  ans = ans; ans 5
 *       j     
 * 
 */

/**
 * Ejercicio 3 
 * 
 * Dado un array de numeros enteros positivos y un entero k, encontrar todos lo subarray validos que cumplan que el producto sea menor que k y devolver la cantidad de subarrays validos
 * Por ejemplo: nums = [10, 5, 2, 6]; [10] 10 * 1 = 10 valido; [10,5] 10 * 5 = 50 valido; [10, 5, 2] 10 * 5 * 2 = 100 No valido
 * 
 */
function productLessThanK(arr: Array<number>, k: number){
    // se inician las variables i, j, curr,
    // parte de la idea es almacenar la multiplicacion y luego ir añadiendo o eliminando, muy similar al prefix sum
    // si un subarrays es valido, por consecuente los sub array serán validos, por ejemplo: [10,5] -> [10], [5]
    // 
}