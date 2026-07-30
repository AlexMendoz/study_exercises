

function validPlates(s: string, queries: number[][]){

    // ¿Qué pasa si hago una sum de prefijos? el reusltado que me daria, al ser 1 y 0, es que donde la suma es 1 o aumneta uno ahi hay un 1, y haciendo la suma de prefijos podemos obtner la informacion de donde estan los limites en O(1)

    if (queries.length == 0) {
        return []; // no hay anda en los queries, no hay nada quye avaluar
    }
    
    let newString = s.replaceAll("*", "1").replaceAll("|", "0").split("").map(n => Number(n));
    let prefixSum: number[] = [newString[0]];

    for (let i = 1; i < newString.length; i++) {
        //resultado =  suma anterior  + valor actual
        prefixSum[i] = prefixSum[i-1] + newString[i];
    }
    console.log(prefixSum)
    // ahora, el prefix tiene la suma de todos los platos entonces tenemos qe determinar los limites y hacer una operacion artmetica para obtener el total
    console.log(prefixSum[1], prefixSum[8], prefixSum[8] - prefixSum[1]); // es cierto que podemos obtener el numero de platos, pero como podemos establecer los limites reales? es decir, para este queri,[1][8] solo ahy dos platos validos


}

console.log(validPlates("***|**|*****|**||**|*",[[1,8],[1,17],[4,5],[14,17],[5,11],[15,16]]));
// console.log(validPlates("******", [[1,4]]))
// console.log(validPlates("**|*******************|**********************************************|************|*********|*****|*********************************************************************************************|***", [[31,96],[14,192],[0,180]]))

/**
 * NOTAS
 * 
 * este será un neuvo enfoque que se le dara este problema, anterriormente se logro resolver pero el tiempo de calculo es demasiado por lo que se debe busdcar otro enfoque. Al consultarlo con Gemini comento que se puede hacer con una "prefixSum" o precalculando ciertos array
 * 
 */

/**
 * ya tengo las sumas
 * Necesitos los limites reales
 * ahora si con los limites
 */