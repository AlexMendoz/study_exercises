export { };

function longestSubstring(s: string): number {
    let i = 0;
    let j = 0;

    let len = 0;
    let ans = 0;

    while (j < s.length) {
        // console.log(s.slice(i,j), s[j], s.slice(i,j).includes(s[j]))
        if (s.slice(i, j).includes(s[j])) {
            i++;
            continue;
            // ans--;
        }

        if (i == j && s[i] == s[j]) { //caso 1)
            len = j + 1 - i;
            // console.log("len =", len, i , j, s[i], s[j])
            j++;
        } else if (j > i && s[i] != s[j]) { //caso 2)
            len = j + 1 - i;
            // console.log("len =", len, i , j, s[i], s[j])
            j++;
        } else if (j > i && s[i] == s[j]) { //caso 3)
            // console.log("len =", len, i , j, s[i], s[j])
            i++;
        }


        ans = Math.max(ans, len)
    }
    return ans;
}

console.log(longestSubstring("abcabcbb"));
console.log(longestSubstring("bbbbb"));
console.log(longestSubstring("pwwkew"));
console.log(longestSubstring("!S``PW"));


// j siempre avanza, pero j tiene que esperar una iteracion en el mismo lugar cuando i avanza
/**
 * abcabcbb     i = 0; j = 0; s[i] = a; s[j] = a -> caso 1) len -> 1 j -> 1, 
 * i
 * j
 * abcabcbb     i = 0; j = 1; s[i] = a; s[j] = b -> caso 2) len -> 2, j -> 2
 * i
 *  j
 * abcabcbb     i = 0; j = 2; s[i] = a; s[j] = c -> caso 2) len -> 3, j -> 3
 * i
 *   j
 * abcabcbb     i = 0; j = 3; s[i] = a; s[j] = a -> caso 3) len -> 4, i -> 1
 * i
 *    j
 * abcabcbb     i = 1; j = 3; s[i] = b; s[j] = a -> caso 2) len -> 3, j -> 4
 *  i
 *    j
 * abcabcbb     i = 1; j = 4; s[i] = b; s[j] = b -> caso 3) len -> 4, i -> 2
 *  i
 *     j
 * abcabcbb     i = 2; j = 4; s[i] = c; s[j] = b -> caso 2) len -> 3, j -> 5
 *   i
 *     j
 * abcabcbb     i = 2; j = 5; s[i] = c; s[j] = c -> caso 3) len -> 4, i -> 3
 *   i
 *      j
 * abcabcbb     i = 3; j = 5; s[i] = a; s[j] = c -> caso 2) len -> 3, j -> 6
 *    i
 *      j
 * abcabcbb     i = 3; j = 6; s[i] = a; s[j] = b -> caso 2) len -> 4, j -> 7
 *    i
 *       j
 * abcabcbb     i = 3; j = 7; s[i] = a; s[j] = b -> caso 2) len -> 5, j -> 8 se termina por que no es menor que len de s
 *    i    
 *        j
 * para la primera comparacion siempre sera igual, no la tenemos que obviar, pero si tenemos que escribir la condicion para salir del primer paso, i == j y s[i] == s[j] -> 0 == 0 y "a" == "a" {j avanza}, ahora i == 0 y j == 1, 
 * 
 * Para i == 0 y j == 1 ya no se cumple que i == j, entonces pasaria a otro caso donde forsozamente j sea mayor que i y     s[i] !=  s[j], entonces nuestra ventana puede seguir creciendo
 * 
 * que pasa cuando j > i y s[i] == s[j]? se tiene que detener j y aumentar i++  pero no se tiene que calcular la longitud 
 * 
 * 
 * EXTRA
 * 
 * Se tiene que revisar el valor anterior de j, ya que si j == (j-1) tiene que aumentar i
 * se tiene que recordar un valor, se puede avanzar en j y hacer un find en loque va del subarray
 * 
 * if (s.slice(i, j+1).find(c => c == s[j])) i++;
 * 
 */

