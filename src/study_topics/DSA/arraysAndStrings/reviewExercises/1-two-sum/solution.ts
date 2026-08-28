export {};

function twoSum(nums: number[], target: number): number[]{

    let numbersMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        let complemento = target - nums[i]; // complemento es la llave, o sea, un numero
        if (numbersMap.has(complemento)) {
            return [i,numbersMap.get(complemento)]
        }
        numbersMap.set(nums[i], i);
        // console.log(complemento)
    }
    // console.log(numbersMap)
    return []
}

console.log(twoSum([2,7,11,15], 9))

// target = i + j
/**
 * al ir llenado el map, ya conocemos un valor, i entonce la formula -> 9 = 1 + j
 * entonces: j = 9 - 1
 *          complemento = target - actual 
 *
 * 
 */