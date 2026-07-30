export {};
// dado un array de numeros y un entero k encuentra el array de continuo de longitud k que tenga el maximo promedio y regresa ese valor.

function bestAverageStaticSubArray(arr: Array<number>, k: number): number{

    let ans = 0;
    let curr = 0;
    for (let i = 0; i < k; i++) {
        curr += arr[i]
    }

    ans = curr/k;
    for (let i = k; i < arr.length; i++) {
        curr = curr - arr[i-k] +arr[i] 
        let average = curr/k;
        if(average > ans){
            ans = average;
        }
    }

    return ans;
}

console.log(bestAverageStaticSubArray([1,12,-5,-6,50,3],4));
console.log(bestAverageStaticSubArray([5],1));
console.log(bestAverageStaticSubArray([7,4,5,8,8,3,9,8,7,6],7));