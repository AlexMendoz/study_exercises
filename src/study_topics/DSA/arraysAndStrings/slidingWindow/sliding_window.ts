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

    let j = 0;
    let ans = 0;
    let curr = 1;

    if (k <= 1) {   // como la multipicacion debe ser mayor a k, no hay ningun numero menor a 1, por lo que se devulve cero
        return 0;
    }

    for (let i = 0; i < arr.length; i++) {
        curr *= arr[i]; //vamos agregando las multiplicaciones
        //condicion invalida -> while curr >= k
        while (curr >= k) {
            curr /= arr[j]; //se le quita el ultimo elemento
            j++;
        }
        ans += i -j +1; // cuando se detecta un sub array valido, los sub array de este son validos y la cantidad total esta dada pr i-j+1
    }
    return ans;
}// un siguinete paso seria mostrar todos los subarray validos

console.log("\nproductLessThanK");
console.log(productLessThanK([10, 5, 2, 6],100));
console.log(productLessThanK([2, 3, 5, 8, 6],100));

/**
 * El siguiente ejemplo va sobre una variacion del sliding window, ahora el k será el tamaño de una ventana fija, es decir, en anteriores ejercicios la ventana era de tamaño dinamica y ahora tendra un tamaño fijo, por ejemplo k = 2, tendra dos elementos.
 * k = 2; arr = [10,5,2,6]; ventana = [10,5] -> [5,2] -> [2,6] y deberan cumplir cierta condicion.
 * Para este problema, se deberá calcular el valor de ventana y se iran sumando y restando los elemtos segun sea el caso
 * window [10,5] = 15 -> [5,2] = 15 - 10 +2 = 7 -> [2,6] = 7 - 5 +6 = 8
 */

/**
 * Dado un array de numero y un entero k, encuentra el sub array de longitud k que tenga la mayor suma de elementos
 * @param arr 
 * @param k 
 */
function findBestStaticSubArray(arr: Array<number>, k: number) {
    let curr = 0;
    let ans = 0;
    // se crea el valor de la primer ventana
    for (let i = 0; i < k; i++) {
        curr += arr[i];
    }
    ans = curr;
    // se evalua como sliding window normal pero con rigth iniciado en k por que ya se calculo el tamaño de la primer ventana
    for (let i = k; i < arr.length; i++) {
        curr = curr - arr[i-k] + arr[i];
        // console.log(curr);
        //evaluacion para determinar la respuesta correcta
        if(curr >= ans){
            ans = curr;
        }
    }
    return ans;
}

console.log("\nfindBestStaticSubArray");
console.log(findBestStaticSubArray([10, 5, 2, 6],2));
console.log(findBestStaticSubArray([3,-1,4,12,-8,5,6],4));
console.log(findBestStaticSubArray([4,-3,1,12,-8,2,6,3,19,2,-12],3));

