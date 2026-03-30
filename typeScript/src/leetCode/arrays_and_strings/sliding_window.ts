/**
 * Ejercicios de sliding window
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

console.log(longestSubArray([3, 1, 2, 7, 4, 2, 1, 1, 5], 8))