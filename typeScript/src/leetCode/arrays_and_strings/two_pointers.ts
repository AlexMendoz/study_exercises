/**
 * Ejercicios Two Pointers
 */


/**
 * 
 * @param s palabra a evaluar
 */
function isPalindrome(s: string){
    let i = 0;
    let j = s.length -1;
    while(i < j){
        if (s[i] != s[j]) return false;
        i++;
        j--;
    }

    return true;
}
console.log("\nIsPalindrome")
// para determinar si es palidromo o no, se colocan los dos punteros, uno al inicio y otro al final
console.log(isPalindrome("esto"));
console.log(isPalindrome("sis"));
// Este algoritno no cumple ciertas validaciones por lo que este palindromo no cumple
console.log(isPalindrome("anita lava la tina"));

/**
 * @param s palabra a evaluar
 */
function bestIspalidrome(s: string) {
    //clean stirng
    let newS = s.split(" ").join("");
    let i=0;
    let j=newS.length-1;
    while(i<j){
        if(newS[i] != newS[j]) return false;
        i++;
        j--;
    }
    return true;
}
console.log("\nbestIsPalindrome")
console.log(bestIspalidrome("esto"));
console.log(bestIspalidrome("sis"));
console.log(bestIspalidrome("anita lava la tina"));
/**
 * Dado un arreglo de numeros enteros no negativos, devoler true or false si target es suma de dos numeros del array
 * 
 * @param arr array con numeros enteros no negativos ordenados
 * @param target entero no negativo que debe ser suma de dos elementos del array
 * @returns true o false
 */
function sumTargetArray(arr: Array<number>, target: number) {
    let sum: number = 0;
    let i = 0;
    let j = arr.length -1;
    while(i<j){
        sum = arr[i] + arr[j];

        if (sum == target) return [true, arr[i], arr[j]];
        if(target < arr[j]){
            j--;
        }

        if(target > arr[i]){
            i++;
        }
    }
    return false;
}
console.log("\nsumTargetArray")
console.log(sumTargetArray([1, 2, 4, 6, 8, 9, 14, 15], 13))
console.log()
console.log()
