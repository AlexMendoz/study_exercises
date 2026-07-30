export {};
/**
 * Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
Example 2:

Input: nums = [0]
Output: [0]
 */

function moveZeros(nums: number[]){

    let i = 0, j = 0;

    while(i < nums.length && j < nums.length){
        // el puntero i va revisar los elementos
        if (nums[i] != 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]]
            j++;
        }
        i++;
    }
}
moveZeros([0,1,0,3,12])

/**
 * IMPORTANTE
 * el puntero i nos sive para recorrer todo el array y el j para saber donde tenermos que mover los no-ceros elements                                               
 * 
 * [0,1,0,3,12] i++
 *  i           i no-cero F -> 
 *  j    
 * [0,1,0,3,12] i++
 *    i         i no-cero T -> swap [i,j] = [j,i]       |
 *  j                                     = [0,1] -> [1,0,0,3,12] j++
 * [1,0,0,3,12] i++
 *      i       i no-cero F -> 
 *    j  
 * [1,0,0,3,12] i++
 *        i     i no-cero T -> swap [i,j] = [j,i]           |
 *    j                                   = [0,3] -> [1,3,0,0,12] j++
 * [1,3,0,0,12] i++
 *          i   i no-cero T -> swap [i,j] = [j,i]              |
 *      j                                 = [0,12]-> [1,3,12,0,0]
 * FINISH
 */