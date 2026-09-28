export {};

function diagonalDiference(arr: number[][]): number {

    if(arr.length == 0){
        return 0;
    }

    let diag1 = 0;
    let diag2 = 0;
    let len = arr.length -1;

    for (let i = 0; i < arr.length; i++) {
        diag1 = diag1 + arr[i][i];
        diag2 = diag2 + arr[len-i][i];
    }

    return Math.abs(diag1-diag2);
}

console.log(diagonalDiference([[1,2,3],[4,5,6],[9,8,9]]))
console.log(diagonalDiference([[1,3],[4,5]]))


/**
 * para tomar la diagonal de la matriz tendria que bajar un renglon y avanzar una columna, eso se traduce en pasos ah:
 * [0,0], [1,1], [2,2] -> diagonal 1
 * [3,0], [1,1], [0,2]
 * 
 */