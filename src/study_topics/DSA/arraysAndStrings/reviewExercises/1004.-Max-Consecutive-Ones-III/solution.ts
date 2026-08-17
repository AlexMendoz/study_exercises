function maxConsecutiveOnes(nums: number[], k: number):number {
    let i = 0;
    let ans = 0;
    let len = 0;
    let change = 0;

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != 1) {
            change++;
        }
        //condicion contraria para que se pueda mover i
        while (change > k) {
            if (nums[i] == 0) {
                change--;
            }
            i++;
        }
        len = j+1 -i;
        ans = Math.max(len,ans);
    }
    return ans;
}

console.log(maxConsecutiveOnes([1,1,1,0,0,0,1,1,1,1,0], 2));
console.log(maxConsecutiveOnes([0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], 3));

/**
 * NOTAS
 * 
 * recuerda que sliding window requiere un condicion contraria para que pueda avanzar
 */