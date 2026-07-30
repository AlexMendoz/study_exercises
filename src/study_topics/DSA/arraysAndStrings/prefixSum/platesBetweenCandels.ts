/**
 * 2055. Plates Between Candles
    Medium

    Topics
    premium lock icon
    Companies

    Hint
    There is a long table with a line of plates and candles arranged on top of it. You are given a 0-indexed string s consisting of characters '*' and '|' only, where a '*' represents a plate and a '|' represents a candle.

    You are also given a 0-indexed 2D integer array queries where queries[i] = [lefti, righti] denotes the substring s[lefti...righti] (inclusive). For each query, you need to find the number of plates between candles that are in the substring. A plate is considered between candles if there is at least one candle to its left and at least one candle to its right in the substring.

    For example, s = "||**||**|*", and a query [3, 8] denotes the substring "*||**|". The number of plates between candles in this substring is 2, as each of the two plates has at least one candle in the substring to its left and right.
    Return an integer array answer where answer[i] is the answer to the ith query.

    Example 1:

    ex-1
    Input: s = "**|**|***|", queries = [[2,5],[5,9]]
    Output: [2,3]
    Explanation:
    - queries[0] has two plates between candles.
    - queries[1] has three plates between candles.
    Example 2:

    ex-2
    Input: s = "***|**|*****|**||**|*", queries = [[1,17],[4,5],[14,17],[5,11],[15,16]]
    Output: [9,0,0,0,0]
    Explanation:
    - queries[0] has nine plates between candles.
    - The other queries have zero plates between candles.

    Constraints:

    3 <= s.length <= 105
    s consists of '*' and '|' characters.
    1 <= queries.length <= 105
    queries[i].length == 2
    0 <= lefti <= righti < s.length
 */

function platesBetweenCandles(s: string, queries: number[][]): number[] {
    let validPlates: number[] = [];

    //usar metodos que no modifiquen el array original
    let queriesLen = queries.length;
    let sLen = s.length;
    // si esta vacio no hay nada que hacer
    if (queriesLen == 0) {
        return [];
    }

    for (const [start, end] of queries) {
        
        let right = end;
        let left = start;
        // condicion contraria para que lo haga
        while (right > left) {
            while (s[left] != "|") {
                left++;
            }
            while (s[right] != "|") { // de esta manera recorremos hasta que encontremos una vela
                right--;
            }
            // si ambos son |, tenemos los limites
            if (s[left] == "|" && s[right] == "|") {
                // console.log(s[left], s[right]);
                // console.log(s.slice(left, right+1));
                
                let plates = s.slice(left, (right+1)).replaceAll("|","").length
                validPlates.push(plates);
                break;
            }
            
            if (s[left] != "|" && s[right] != "|") {
                console.log(s.slice(left, right), "\n");
                validPlates.push(0);
                break;
            }
        }   
    }

    return validPlates;
}

// console.log(platesBetweenCandles("***|**|*****|**||**|*",[[1,17],[4,5],[14,17],[5,11],[15,16]]));
// console.log(platesBetweenCandles("******", [[1,4]]))
console.log(platesBetweenCandles("**|*******************|**********************************************|************|*********|*****|*********************************************************************************************|***", [[31,96],[14,192],[0,180]]))




/**
 * 
 * NOTAS
 * 
 * Es un problema de slidindg window ya que nos pide encontrar sub arrays
 * tengo que tener una variable para almacenar los platos validos
 * 
 * IDEAS
 * 
 * Pienso que esto es una combinacion de two pointers y sliding window
 * 
 * Ejemplo
 * 
 * "**|**||*"; [1,6]; res = 2
 * porque los platos que tienen como limites los "|" solo son dos, los de la posicion 3 y 4 y los limites estan en 2 y 5
 * Aunque hay mas platos esos no se cuentan por que no tien limites
 * 
 * En el problema nos dan un array de limites, tenemos que hacer este procedimiento iterable
 * 
 * Hay restricciones
 * Un plato solo cuenta si tiene velas como limites, 
 * 
 * Input: s = "***|**|*****|**||**|*", queries = [[1,17],[4,5],[14,17],[5,11],[15,16]]
 * 
 * para [1,17], hago un for que solo empiece y termine en esos limites
 * ***|**|*****|**||**|*
 *  i                j          En este intervalo voy a hacer mis operaciones
 *                              i No candle; i++, j No candle; j--;
 * ***|**|*****|**||**|*
 *   i              j           i No candle; i++, j No candle; j--;
 * ***|**|*****|**||**|*
 *    i            j            i candle; j candle, slice(i,j).replace("|", "").length() -> esto es mi respuesta
 * 
 * repetir esto para cada query
 * 
 * 
 * 
 * 
 * 
 * 
 */