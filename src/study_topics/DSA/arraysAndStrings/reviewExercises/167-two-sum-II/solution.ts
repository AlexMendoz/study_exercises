export {};

function twoSumII(nums: number[], target: number) {
    let i = 0;
    let j = nums.length-1;
    let ans = [0,0];

    while (i < j) {
        const sum = nums[i] + nums[j];
        if (sum > target) {
            j--;
        }
        if (sum < target) {
            i++;
        }
        if (sum === target) {
            ans[0] = i+1;
            ans[1] = j+1;
            break;
        }
    }
    return ans;
}

console.log(twoSumII([1,2,4,6], 5));
console.log(twoSumII([2,7,11,15], 9))