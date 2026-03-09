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
// para determinar si es palidromo o no, se colocan los dos punteros, uno al inicio y otro al final
console.log(isPalindrome("esto"));
console.log(isPalindrome("sis"));
// Este algoritno no cumple ciertas validaciones por lo que este palindromo no cumple
console.log(isPalindrome("anita lava la tina"));

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
console.log(bestIspalidrome("esto"));
console.log(bestIspalidrome("sis"));
console.log(bestIspalidrome("anita lava la tina"));