export {};

function validPalindrome(s: string): boolean {
    let ans:boolean = true;
    
    //se normaliza la palabra
    let newS: string = s.toLocaleLowerCase().replaceAll(" ","").replaceAll(/[^a-zA-Z0-9]/g, "");
    let j = newS.length-1;

    for (let i = 0; i < newS.length; i++) {
        if (newS[i] !== newS[j]) {
            ans = false;
            return ans;
        }
        if (i == j) {
            //significa que todos los elementos anterios a i o a j son iguales y si es palindromo
            break;
        }
        j--;
    }
    return ans;
}

console.log(validPalindrome("A man, a plan, a canal: Panama"))
console.log(validPalindrome("race a car"));
console.log(validPalindrome(" "));