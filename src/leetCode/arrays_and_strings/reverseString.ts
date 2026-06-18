/**
 * Escribe una funcion que volteé un string. la entrada sera un array de caracteres s.
 * deberás realizar los cambios en el mismo array con O(1).
 * 
 * Example 1:

 *  Input: s = ["h","e","l","l","o"]
 *  Output: ["o","l","l","e","h"]
 *  Example 2:
 *  Input: s = ["H","a","n","n","a","h"]
 *  Output: ["h","a","n","n","a","H"]
 */

function reverseString(s: Array<string>){
    console.log(s);
    let i = 0;
    let j = s.length -1;
    //variable para alemacenar el elemento a intercambiar
    let aux = "";

    while(i < s.length && i < j){
        //se guarda el ultimo 
        aux = s[j];
        //se pasa el primero elemento al ultimo
        s[j] = s[i];
        //se pasa el ulitmo elemento al primero
        s[i] = aux;
        
        i++;
        j--;
    }
    console.log(s)
}
/**
 * A -> aux
 * Z -> A
 * A -> Z
 */
console.log(reverseString(["Z","Y","X","H","C","B","A"]));
console.log(reverseString(["h","e","l","l","o"]));
// Hay que revisar muy buien las condiciones para que se detenga el algoritmo, ya que puede caudar bucles infinitos