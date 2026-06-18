/**
 * dado un array nums. Nosotros definimos como running sum (suma acumulada) como un array de runningSum[i] = sum(sum[0]... nums[i])
 * Regresa la runnung Sum(suma acumulada)
 */
function runningSum(nums: Array<number>){
    let prefixSum = [nums[0]];
    for (let i = 1; i < nums.length; i++) {
        prefixSum[i] = prefixSum[i-1] + nums[i]
        
    }

    return prefixSum;
}
console.log(runningSum([1,2,3,4]))