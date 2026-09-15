export {};

function miniMaxSum(arr: number[]): void {

    let sortedArray = arr.sort();
    if (sortedArray.length == 0) {
        console.log(0, 0);
        return;
    } else if (sortedArray.length == 1){
        console.log(sortedArray[0], sortedArray[0]);
        return;
    }

    //el sortedArrayay solo tiene cinco 
    let prefixSum = (sortedArray: number[]) => {
        let prefix = [sortedArray[0]];
        for (let i = 1; i < sortedArray.length; i++) {
            prefix.push(prefix[i-1] + sortedArray[i])
        }
        return prefix;
    }
    console.log(prefixSum(sortedArray))

    let min = prefixSum(sortedArray)[sortedArray.length -2];
    let first = prefixSum(sortedArray)[0];
    let last = prefixSum(sortedArray)[sortedArray.length -1]

    console.log(min, last - first);
    
}

miniMaxSum([1,2,3,4,5]);
miniMaxSum([1,3,5,7,9]);
miniMaxSum([12]);
miniMaxSum([]);

miniMaxSum([7,69,2,221,8974]) //9271
// 2,7