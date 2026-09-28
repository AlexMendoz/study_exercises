export {};

function minMaxSum(arr: number[]): void {

    //validaciones
    if (arr.length === 0) {
        console.log(0)
    } else if (arr.length === 1) {
        console.log(arr[0])
    }

    //ordenar el array
    let sortArr = arr.sort((a,b) => a-b)// a-b es para ordenar de mayor a menor

    /**
     * esto se resuelve con una prefiz sum
     * el ultimo valor es la suma total de los valores del array, entonces tengo que restar el primero al ultimo para tener la suma maxima
     * el ultimo valor es la suma total de los valores del array y el penultimo elemento es la suma de todos los elementos menos el ultimo
     */

    let prefixSum = [sortArr[0]];

    for (let i = 1; i < sortArr.length; i++) {
        prefixSum.push(sortArr[i] + prefixSum[i-1])      
    }

    const maxSum = prefixSum[prefixSum.length - 1] - prefixSum[0];
    const minSum = prefixSum[prefixSum.length -2];
    console.log(minSum, maxSum);
    
}

console.log(minMaxSum([2,6,1,8,9]))//[1,2,6,8,9] 1,3,9,17,26