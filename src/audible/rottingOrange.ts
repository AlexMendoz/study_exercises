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


function rottingOranges(grid: number[][]): number{

    const queue: [number, number][] = []; //naranjas podridas pedeintes de procesar
    let fresh = 0;  //naranjas frescas que quedan
    let minutes: number = 0; //minutos 

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            
            if (grid[i][j] == 1) { //naranjas frescas que quedan
                fresh++;
            };
            
            if (grid[i][j] == 2) { //naranjas podridas
                queue.push([i,j])
            }

        }
        
    }
    if (fresh == 0) { //no hay naranjas frescas, no se puede hacer un contagio
        return 0;
    }

    //este while es el que va a procesar cada minuto
    while (fresh > 0 && queue.length > 0) { //se valida que existan naranjas frescas y que haya prodridas
        const size = queue.length; // esto nos dira cuentas naranjas podridas hay al inicio de cada minuto
        
        for (let i = 0; i < size; i++) {
            const [row, col] = queue.shift()!; // shift elimina el primer elemtno del arreglo y lo devuelve como variable, 
            
        }
    }


    console.log(queue, fresh);
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
 * NOTAS RAPIDAS
 *  - Ten en cuenta todas las validades antes de comenzar a procesar o hacer laguna operacion
 */