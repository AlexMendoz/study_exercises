export {};

function diagonalDiff(arr: number[][]): number {

    let diag1 = 0;
    let diag2 = 0;
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        diag1 = diag1 + arr[i][i];
        diag2 = diag2 + arr[len-1-i][i];
    }

    return Math.abs(diag1-diag2);
}

console.log(diagonalDiff([[1,2,3],[4,5,6],[9,8,9]]))
/**
 * los elementos daigonas de una matriz estan dados por los indices [0,0],[1,1],..., en otras palabras por [n,n]
 * los elementos de la otra diagonal siguen otro patron [n,0], [n-1, n],..., [0,n]
 */