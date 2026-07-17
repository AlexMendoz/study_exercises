/**
 * 994. Rotting Oranges
Medium
Topics
premium lock icon
Companies
You are given an m x n grid where each cell can have one of three values:

0 representing an empty cell,
1 representing a fresh orange, or
2 representing a rotten orange.
Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

Example 1:

Input: grid = [[2,1,1],[1,1,0],[0,1,1]]
Output: 4
Example 2:

Input: grid = [[2,1,1],[0,1,1],[1,0,1]]
Output: -1
Explanation: The orange in the bottom left corner (row 2, column 0) is never rotten, because rotting only happens 4-directionally.
Example 3:

Input: grid = [[0,2]]
Output: 0
Explanation: Since there are already no fresh oranges at minute 0, the answer is just 0.

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 10
grid[i][j] is 0, 1, or 2.
 */

//funcion para validar si el valor est adentor de los limites de mi matriz
function isValid(row:number, col: number, grid: number[][]):boolean{
    return (row >= 0 && row < grid.length && col >= 0 && col < grid[0].length);
}

//funcion para determinar si una naranja esta podrida
function contagio(row: number, col: number, grid: number[][]): number {
    //antes de hacer cualquier operacion se tiene que validar que cumpla las condiciones del problema
    // revisar que este dentro de los limites
    if (!isValid(row, col, grid)) {
        return 0;
    }
    // solo me interesa hacer algo si mi valor es 2
    if (grid[row][col] != 2) {
        return 0;
    }

    let ans = 0;
    //recuerda: arriba, derecha, abajo, izquierda
    const directions = [[-1,0], [0,1], [1,0], [0,-1]];
    for (const direction of directions) {
        //aqui es donde voy a revisar si mi elemento adyacente es 1 o 0
        // si es 1, lo combierto en 2; si es 0 no hago nada
        const newRow = row + direction[0];
        const newCol = col + direction[1];
        //se tienen que validar los nuevos limites, por eso en el sigueinte if salia undefined
        if (!isValid(newRow, newCol, grid)) {
            continue;
        }
        //aqui voy a ver si mi valor adyacente es 1, si es 1, lo cambio a 2
        if (grid[newRow][newCol] == 1) {
            grid[newRow][newCol] = 2;
            ans++;
            contagio(newRow, newCol, grid)
            console.log(grid)
            
        }
    }

    return ans;

}

function rottingOranges(grid: number[][]): number{
    let minutes: number = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            minutes = minutes + contagio(i,j,grid);
            // console.log(grid)
        }
        
    }
    console.log(grid)
    return minutes;
}

console.log(rottingOranges([
    [2,1,1],
    [1,1,0],
    [0,1,1]]
))


/**
 * IDEA
 * 
 * - Se debe de poner una contador que evalue cada iteracion, ya que cada iteracion mostrada un avance de las naranjas que estaran podridas
 * - Se usa parte del codigo del ejercicio anterior por que tenemos que tener direcciones a donde mirar
 * - Tambien se usa una funcion para validar si estamos dentro de los limites de la matriz
 * - Se tienen tres casos, 2 para una naranja podrida (contagia), 1 para una naranja y 0 para un ligar vacio, la funcion tiene que veriricar si esta en un 2 y si el adyacente es 1 o 0 
 *      - Si es 2: tengo que revisar mis adyacentes, si es 1 la contagio, si es 0 no hago nada
 *      - Si es 1: no hago nada
 *      - Si es 0: no hago nada
 * 
 */