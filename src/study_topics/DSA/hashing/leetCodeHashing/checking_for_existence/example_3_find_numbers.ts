export {};
/**
 * Example 3: Given an integer array nums, find all the numbers x in nums that satisfy the following: x + 1 is not in nums, and x - 1 is not in nums.

    If a valid number x appears multiple times, you only need to include it in the answer once.

 */

function find_numbers(nums: number[]): number[] {

    let ans: number[] = [];
    let uniqueNums = new Set(nums);

    for (let i = 0; i < nums.length; i++) {
        if (!uniqueNums.has(nums[i] + 1) && !uniqueNums.has(nums[i] - 1)) {
            ans.push(nums[i]);
        }
    }
    return ans;
};

console.log(find_numbers([1,2,4,7,8,9,10]));

/**
 * NOTAS 
 * 
 * find all the numbers x that satisfy the following: x + 1 and x - 1 is not in nums.
 * O sea que los numeros que cumplan esa condicion no esten en el set
 * 
 * How I only need unqui number, I have use a SET
 * 
 */