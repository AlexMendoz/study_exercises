export {};
/**
 * Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.
 * 
Example 1:

Input: s = "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"
Example 2:

Input: s = "Mr Ding"
Output: "rM gniD"
Constraints:

1 <= s.length <= 5 * 104
s contains printable ASCII characters.
s does not contain any leading or trailing spaces.
There is at least one word in s.
All the words in s are separated by a single space.
 */

function reverseStringIII(s: string): string{

    let sArray = s.split(" "); // array ["word", "hello"];
    let cArrays = []
    
    let res = ""
    // split word in characters and convert in assci
    for (let w = 0; w < sArray.length; w++) {
        cArrays[w] = sArray[w].split("").map(c => c.charCodeAt(0));   
    };
    //reverse words
    for (let w = 0; w < cArrays.length; w++) {
        let i = 0;
        let aux;
        let j = cArrays[w].length -1;

        while (i < cArrays[w].length && i < j && cArrays[w] != undefined) {
            aux = cArrays[w][j]; //ultimo valor
            cArrays[w][j] = cArrays[w][i] //el primero pasa a ser sel ultimo
            cArrays[w][i] = aux;
            
            i++;//avanzamos el primer indice
            j--;//reducimos el ultimo indice

        }
        // console.log(cArrays[w].map(c => String.fromCharCode(c)))
        let auxC = String.fromCharCode(...cArrays[w]) + " ";   
        res = res.concat(auxC)
        
    }
    return res.trim();
}

reverseStringIII("Let's take LeetCode contest");

/**
 * NOTAS
 * 1. hay que tomar en cuenta que tiene caracteres especiales y pueden ocupar mas espacio en memoria, por lo que hay que convertir en asscii y luego a string
 * 2. Solo tiene un espacio entre palabras por lo que eso un indicativo de como se puede trabajar
 * 3. hay que conservar mayusculas y minusculas
 * 
 * PASOS:
 * 1. Ingresa el string.                            X
 * 2. Hacemos un split para cada palabra            X
 * 3. convertimos cada palabra en array de strings  X
 * 4. convertimos cada letra en asscii              
 * 5. cambiamos el ordenn
 * 6. convertimos cada codigo assci en letra
 * 7. juntamos cada palabra cuando se termine un sub array y ponemos un espacio
 * 
 */

function reverseStringIIII(s: string): string{

    let sArray = s.split(" ").map(w => w.split("")); // array ["word", "hello"];
    
    let res = ""
    //reverse words
    for (let w = 0; w < sArray.length; w++) {
        let i = 0;
        let aux;
        let j = sArray[w].length -1;

        while (i < sArray[w].length && i < j) {
            aux = sArray[w][j]; //ultimo valor
            sArray[w][j] = sArray[w][i] //el primero pasa a ser sel ultimo
            sArray[w][i] = aux;
            
            i++;//avanzamos el primer indice
            j--;//reducimos el ultimo indice

        }
        res = res.concat(sArray[w].join("") + " ")  
        
    }
    return res.trim();
}

console.log(reverseStringIIII("Let's take LeetCode contest"))