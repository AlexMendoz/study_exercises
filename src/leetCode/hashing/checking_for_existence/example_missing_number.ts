/**
 * Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
 * 
 * Example 1:

Input: nums = [3,0,1]

Output: 2

Explanation:

n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

Example 2:

Input: nums = [0,1]

Output: 2

Explanation:

n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.

Example 3:

Input: nums = [9,6,4,2,3,5,7,0,1]

Output: 8

Explanation:

n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.
 */

function missingNumber(nums: number[]): number{

    let finds = new Set(nums);
    let missing;

    for (let i = 0; i < nums.length +1; i++) {
        if(!finds.has(i)){
            return i
            // finds.add(nums[i]);
        }
        
    }
    return -1;
}
console.log(missingNumber([0,1,3]));
console.log(missingNumber([9,6,4,2,3,5,7,0,1]));

/**
 * NOTAS
 * 
 * encontrar el numero que falta en el array, y regresar ese numero
 * si el array tiene 3 numero, tengo que recorrer esa distancia,
 *  0, 1, 3 -> len 3 entonces tengo que ver que los numeros que esten en el rango de 0 a 3 esten completos
 *  o sea, 0, 1, 2, 3, como el dos es el que falta, la erspuesta es dos
 * 
 *  entonces, tengo que ver la longitud del array y recorrer hasta array.len + 1 y verificar si el indice esta en el set
 *  0, 1, 2, 3 ->
 * 
 */