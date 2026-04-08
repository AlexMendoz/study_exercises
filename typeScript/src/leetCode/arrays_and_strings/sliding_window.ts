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
    //esto se puede ver como 'cuantos ceros hay en el substring, si tiene mas de un cero, ya no se se concidera'
    let left = 0;
    // let arrayS = Array.from(s); // se crea el array desde el string
    let curr = 0; // como la restriccion es una suma se decalara esta variable que tendra la suma actual

    for(let right = 0; right < s.length; right++){// el tiene el indice derecho
        //rigth debe agregar todo el tiempo a la ventana?


    }

    // console.log(s.slice(0,s.length).split('0'))
    // console.log(s.slice(0,s.length).split('0').length)

    // recuerda que el while es mientras no condicion sea invalida. ¿cual es la condicion invalida para que siga?
    // la condicion invalida para que siga el while es que haya mas de un cero en el sub arrays
    /**
     * while subArr.count('0') > 1 
     */
}

console.log("\nbinaryString");
binaryString("1101100111");
// binaryString("11001100111");