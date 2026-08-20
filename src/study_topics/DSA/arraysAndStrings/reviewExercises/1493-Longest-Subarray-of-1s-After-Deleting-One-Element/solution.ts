export {};

function longestSubArrayAfterDeteletingOneElement(nums: number[]) {
    
    let i = 0;
    let ans = 0;
    let other = 0;

    if (nums.length === 0 || nums.length === 1) {
        return 0;
    }

    for (let j = 0; j < nums.length; j++) {
        
        if (nums[j] != 1) {
            other++;
        }

        while (other > 1) {
            if (nums[i] != 1) {
                other--;
            }
            i++;
        }
        ans = Math.max(ans, j - i)

    }
    return ans;
}


console.log(longestSubArrayAfterDeteletingOneElement([1,1,0,1]))
console.log(longestSubArrayAfterDeteletingOneElement([0,1,1,1,0,1,1,0,1]))
console.log(longestSubArrayAfterDeteletingOneElement([1,1,1]))