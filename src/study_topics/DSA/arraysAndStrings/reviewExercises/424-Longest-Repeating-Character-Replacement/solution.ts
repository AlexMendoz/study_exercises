export {};

function longestSubstringRepeatingCharacter(s: string, k: number) {

    
    let letter = new Set(s);
    let len = 0;
    let ans = 0;
    let newK = k;

    for (const c of letter) {
        let i = 0;
        let j = 0;
        while (j < s.length) {
            
            // caso 1)
            if (s[j] != c && newK > 0) {
                newK--;
            }

            // caso 2)
            if (s[j] != c && newK == 0) {
                if (s[i] != c && newK < k) {
                    newK++;
                }
                i++;    
            }
            console.log()
            j++;
            len = j + 1 -i;
            ans = Math.max(ans, len);
            console.log(ans)
        }
    }
    return ans;

}

console.log(longestSubstringRepeatingCharacter("AABABBA", 1))    
// console.log(longestSubstringRepeatingCharacter("ABAB", 2))

/**
 * NUEVAS IDEAS
 * 
 * Ayer estuvo complicado y no logre concluir este ejercicio pero aqui vamos otra vez.
 * Obtene un set con las letras unicas de la cada string "s"
 * Se crea un for para iterar con esas letras
 *  Se crea un while con condicon j < s.length
 *      ¿Cuando se cuenta la logitud del substring? todo el tiempo
 *      La longitud se cuenta despues de realiar los cambios en los indices
 * 
 *      ¿Cuando se realiza un cmbio? hay varios casos.
 *      caso 1): Caundo j != y k > 0
 *          j avanza, detecta que j != choose y se fije que k > 0, asi, puede seguir avanzando j, se resta 1 de k
 *      caso 2): Cuando j != y K == 0
 *          ahora i avanza un lugar, si i != choose k recupera 1 (teniendo en cuenta el original), se salta la sigueinte valor para no calcular una longitud erronea
 *      Se calcula la longitud actual
 * 
 * AABABBA c=A; s[j] == c; j++; len 1
 * i
 * j
 * AABABBA c=A; s[j] == c; j++; len 2
 * i
 *  j
 * AABABBA c=A; s[j] != c; Caso 1) (k--; k = 0) (len = 3)
 * i 
 *   j
 * AABABBA c=A; s[j] == c; (len = 4)
 * i
 *    j
 * AABABBA c=A; s[j] == c; Caso 2) (len = 4)
 * i
 *     j
 * 
 * 
 * 
 * 
 * 
 * IMPORTANTE
 * 
 * solo tengo que calcular mi longitud cuando k == 0
 * 
 */