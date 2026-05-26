/**
 * 917. Reverse Only Letters

Given a string s, reverse the string according to the following rules:

All the characters that are not English letters remain in the same position.
All the English letters (lowercase or uppercase) should be reversed.
Return s after reversing it.


Example 1:

Input: s = "ab-cd"
Output: "dc-ba"
Example 2:

Input: s = "a-bC-dEf-ghIj"
Output: "j-Ih-gfE-dCba"
Example 3:

Input: s = "Test1ng-Leet=code-Q!"
Output: "Qedo1ct-eeLg=ntse-T!"
 

Constraints:

1 <= s.length <= 100
s consists of characters with ASCII values in the range [33, 122].
s does not contain '\"' or '\\'.
 */

function reverseOnlyString(s: string) {

    // NOTAS
    /**
     * Esto se resuelve con two pointers, NO OLVIDAR QUE ESTAMOS USANDO METODOS
     * convertimos el string a array y ponemos una condicion para identificar el guiones
     */

    let sArray: Array<string> = s.split("");

    let i = 0;
    let j = sArray.length -1;
    const regexLetter = /[a-zA-Z]/; //regexLetter.test("c");
    // condicional para avanzar el two pointers
    while (i < j) {
        //primera condicion
        if (!regexLetter.test(sArray[i])) {
            i++;
            continue;
        }   
        // segunda condicion
        if (!regexLetter.test(sArray[j])) {
            j--;
            continue; //recordar que continue salta esta iteracion
        }
        //usamos la destructuracion para reasignar el valor
        [sArray[i],sArray[j]] = [sArray[j], sArray[i]];
        i++;
        j--;
    }

    return sArray.join("");
}

console.log(reverseOnlyString("Test1ng-Leet=code-Q!"), "Qedo1ct-eeLg=ntse-T!");
//                                                      !Tes1tn-gLee=tcod-eQ

/**
 * 
 * el problema pide invertir las letras, hay que omitir los caracteres especiales como guiones y simbolos
 * para esto, tenemos tres casos
 * caso 1: i no es caracter, se tiene que avanzar
 * caso 2: j no es caracter, se tiene que avanzar
 * caso 3: ambos son caracter y se tiene que hacer el cambio
 */
