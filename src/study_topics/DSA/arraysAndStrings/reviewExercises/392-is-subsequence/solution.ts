export {};


function isSubsecuence(s: string, t: string) {
    
    let i = 0;
    let j = 0;

    while (i < s.length && j < t.length) {
        
        if ((s[i] === t[j] && i <= j)) {
            i++;
        }
        j++;
    }
    return i == s.length ? true : false;
}

console.log(isSubsecuence("ace", "abcde"));

// recueda que en un array el orden esta implicito


/**
 * EJEMPLO
 * 
 * s = [a,c,e] t = [a,b,c,d,e]
 * 
 * s = [a,c,e] t = [a,b,c,d,e]  i= 0, j = 0; s[i] = a, t[j] = a; SI, igual y menor o igual, i++; j++
 *      i
 *                  j
 * s = [a,c,e] t = [a,b,c,d,e]  i= 1, j = 1; s[i] = c, t[j] = b; NO , j++;
 *        i
 *                    j
 * s = [a,c,e] t = [a,b,c,d,e]  i= 1, j = 2; s[i] = c, t[j] = c; SI, igual y menor o igual , i++, j++;
 *        i
 *                      j
 * s = [a,c,e] t = [a,b,c,d,e]  i= 2, j = 3; s[i] = e, t[j] = d; NO , j++;
 *          i
 *                        j
 * s = [a,c,e] t = [a,b,c,d,e]  i= 2, j = 4; s[i] = e, t[j] = e; SI, igual y menor o igual , i++, j++; FIN
 *          i
 *                          j
 * 
 * 
 */