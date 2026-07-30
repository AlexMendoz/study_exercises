/**
 * Example 1: You are given a string s and an integer k. Find the length of the longest substring that contains at most k distinct characters.

For example, given s = "eceba" and k = 2, return 3. The longest substring with at most 2 distinct characters is "ece".
 */

function findLongestSubstring(s: string, k: number): number {

    let left = 0; // rigth no se usa por que es la "i" del for
    let countLetters = new Map();
    let ans = 0;

    for (let rigth = 0; rigth < s.length; rigth++) {
        
        // (clave, (funcion para aunmentar el contador del valor)) Claro esta que el que se agrega es rigth y el que se quita es left
        countLetters.set(s[rigth],(countLetters.get(s[rigth]) ?? 0) + 1);
        //condicion contraria para que la ventana avance []
        while (countLetters.size > k) {
            // como no se cumple la condicion, se tiene que restar uno del valor de la letra, de la ultima letra del string
            countLetters.set(s[left], countLetters.get(s[left]) -1);

            if(countLetters.get(s[left]) == 0){
                countLetters.delete(s[left]);
            }            
            //esta es la condicion que quita elementos del lado izquiero
            left++; // se quita un elemento del lado izquierdo, ahora se tiene que quitar un valor del map
        }
        ans = Math.max(ans, rigth - left + 1);
        
    }

    return ans;
}

console.log(findLongestSubstring("eceba", 2))

/**
 * NOTAS
 * 
 * -    El problema me pide encontrar el subarray mas grande con la cantidad de letras "k"
 * -    Como es un problema de encontrar un substring, lo mejor es usar sliding window.
 * -    Ahora, como tengo que ver que letras son, tengo que llevar un conteo de las letras que voy revisando en el substring y por eso es el hashMap, la llave será la letra y el valor sera el conteo.
 * -    Si una clave llega a cero se tiene que eliminar.
 * -    Una clave esta determinada por el string 's' y su indice s[i] = "a", por ejemplo
 * -    
 */

/**
 * crear un Hash Map llamado counts
left = 0
answer = 0

recorrer el string con right desde 0 hasta el final:

    tomar el caracter actual:
        rightChar = s[right]

    agregar rightChar al Hash Map:
        si rightChar ya existe:
            aumentar su contador en 1
        si no existe:
            guardarlo con valor 1

    mientras el número de claves en counts sea mayor que k:

        tomar el caracter de la izquierda:
            leftChar = s[left]

        restar 1 al contador de leftChar en counts

        si el contador de leftChar llega a 0:
            eliminar leftChar del Hash Map

        mover left una posición a la derecha

    calcular el tamaño actual de la ventana:
        windowLength = right - left + 1

    actualizar answer:
        answer = máximo entre answer y windowLength

regresar answer
 */