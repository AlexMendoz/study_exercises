/**
 * Dado un array binario y un entero k, encontrar el sub array maximo intercambiando los 1 dados por k
 * Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
    Output: 6
    Explanation: [1,1,1,0,0,1,1,1,1,1,1]
 */


function maximunConsecutiveOnes(arr: Array<number>, k: number){
    let j = 0;
    let curr = 0;
    let ans = 0;
    // en el ejercico anterior, recordamos que debemos buscar ceros en el array, en lo opuesto que nos pide le problema
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] == 0) {// contamos los ceros que encontramos
            curr++;
        }
        // lo nuevo es que el tamaño de
        while(curr > k){ //condicion invalida para hacer avanzar j,

            if(arr[j] == 0){
                curr--;
            }
            j++;
        }
        ans = Math.max(ans, i -j +1);
    }
    return ans;

}

console.log(maximunConsecutiveOnes([1,1,1,0,0,0,1,1,1,1,0],2))
