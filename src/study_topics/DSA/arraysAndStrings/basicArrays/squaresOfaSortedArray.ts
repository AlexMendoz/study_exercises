export {};
/**
 * Dado un array de números odenados en orden no decreciente, regresa un array de los cuadrados de cada numero en orden no decreciente.
 * Input: nums = [-4,-1,0,3,10]
 * Output: [0,1,9,16,100]
 * Explanation: After squaring, the array becomes [16,1,0,9,100].
 * After sorting, it becomes [0,1,9,16,100].
 */

function sortedSquares(nums: Array<number>){
    /**
     * Dado que el cuadrado de un numero siempre es positivo, se puede obtner el cuadrado y luego ordeneral el array
     * Como los numeros estan ordenados los extremos siempre seran los numeros mas grandes
     */

    let i = 0;
    let j = nums.length -1;
    let sortedNum = [];
    // se obtiene el cuadrado de los numeros
    for(let i = 0; i < nums.length; i++){
        nums[i] = nums[i]*nums[i];
    }
    // se ordena el array
    while(i <= j){
        if(nums[i] < nums[j]){
            sortedNum.push(nums[j]);
            j--;
        }else {
            sortedNum.push(nums[i]);
            i++;
        }
    }
    return sortedNum.reverse();
}

console.log(sortedSquares([-4,-1,0,3,10]));
/**
 * [16,1,0,9,100]
 *  i         j    i < j; si -> push j  -> [100]; j--;
 * [16,1,0,9,100]
 *   i     j       i < j; no -> push i -> [100,16]; i++;
 * [16,1,0,9,100]
 *     i   j       i < j; si -> push j -> [100,16,9]; j++;
 */