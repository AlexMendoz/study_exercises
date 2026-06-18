

function sum_max() {

    // console.log("max_sum:", main([5,4,3,2,1]));
    // console.log("max_sum:", main([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
    console.log("max_sum:", main([9, 47, -38, -25, 41, -21, 27, -48, 8, -39, -46, 46, 43, -30, -36, 27, 27, 26, 7, 20, -17, 5, 11, -43, -48, 28, -18, 31, -40, 7, -15, 15, -13, 33, -40, 21, 36, -12, -50, -34, 38, 40, -10, -6, -19, -22]));
    console.log("max_sum:", main([-11, -27, -9, -6, 47, -43, 22, -39, -34, -28]));
    console.log("max_sum: ", main([-50,49,3,-18,-43,27,8,-36,26]));
    console.log("random_array: ", main(generateRandomIntArray(10, -100, 100)));

}

function generateRandomIntArray(length: number, min: number, max: number): number[] {
    if (length < 0) {
        throw new Error("Array length cannot be negative.");
    }
    if (min > max) {
        throw new Error("Minimum value cannot be greater than maximum value.");
    }

    return Array.from({ length }, () => Math.floor(Math.random() * (max - min + 1)) + min);
}

// Example usage:
// const randomNumbers = generateRandomIntArray(10, -100, 100);

function main(v: Array<number>): number {
    let max_sum: number = 0;
    let best_subarray: Array<number> = [];
    if (v.reduce((a, c) => a + c, 0) < 0) {
        return 0
    } else {
        for (let i = 0; i < v.length; i++) {
            for (let j = 0; j < v.length - i; j++) {
                let sub_array = v.slice(i, i + j + 1);
                let sum = sub_array.reduce((a, c) => a + c, 0);
                // console.log("sub_array", sub_array);
                if (sum > max_sum) {
                    max_sum = sum;
                    best_subarray = sub_array;
                }
            }
        }
    }
    return max_sum;
}
sum_max();


