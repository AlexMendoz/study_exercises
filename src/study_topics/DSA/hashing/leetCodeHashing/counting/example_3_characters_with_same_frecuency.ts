/**
 * Example 3: 1941. Check if All Characters Have Equal Number of Occurrences

Given a string s, determine if all characters have the same frequency.

For example, given s = "abacbc", return true, because all characters appear twice. Given s = "aaabb", return false. "a" appears 3 times, "b" appears 2 times. 3 != 2.
 */

function sameFrequency(s: string): boolean {

    let counts = new Map();
    for (let i = 0; i < s.length; i++) {
        //agregamos y contamos elementos para el Map
        counts.set(s[i], (counts.get(s[i]) ?? 0) +1);
        
    }
    
    let frequency = new Set([...counts.values()]);
    return frequency.size === 1 ? true : false;
}

console.assert(sameFrequency("abacbc") === true, "algo fallo");
console.log(sameFrequency("abacbc"));
console.log(sameFrequency("abacbcjjaass"));

/**
 * NOTAS   
 * 
 *  -   Nos piden devolver tru si todas las letras del mismo string tienen la misma frecuencia
 *  -   Vamos a crear un HashMap para contar el numero de frecuencia de cada letra
 *  -   Despues, vamos a crear una HashSet para verificar la frecuencia, si el tamaño sel HashSet es 1, todos tiene la misma frecuencia.
 * 
 * VARIABLES
 * 
 *  -   HashMap para contar la fecuencia de las letras
 *  -   HashSet para determinar si tienen la misma frecuencia        
 */