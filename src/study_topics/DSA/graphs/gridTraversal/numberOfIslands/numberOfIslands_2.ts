export {};
/**
 * 200. Number of Islands
Medium
Topics
premium lock icon
Companies
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'.
 */



/**
 * NOTAS 
 *  - Para trabajar con matrices siempre tienes que tomar en cuenta los limites, no queremos buscar en una posicion que no existe
 *      - Para esto tenemos que tener una funcion que detenermi si nuestro valor es valido o no
 *  - Necesito moverme entre las islas para ver si hay islas adyacentes o no, por lo que necesitare una funcion que me permita ver si es una isla
 *      - Que es una isla?, es cuando hay 1s adyacentes o almenos un 1
 *      - El problema no me pide que recuerde algun valor, asi que se puede simplicar el problema si voy "eliminando" los 1s que ya vi
 *      - Cuando estoy parado en una isla necesito ver a mi alrededor, por lo que tendre que tener un manera de ver en mis dos ejes (arriba y abajo, derecha e izquierda)
 *  - Al ser una array doble se necesitaran dos for para recorrelos
 */

/**
 * 
 * @param limitRow limite de cada renglon
 * @param limitColumn limite de cada columna
 * @param row renglon actual
 * @param col columna actual
 * @returns true or false is currrent value is into array limits
 */
function isValid2(limitRow: number, limitColumn: number, row: number, col: number): boolean{
    //los array comienzan por cero, recuerdalo, por lo que el limite 4 (por ejemplo), no va a estar en el array 0..3)
    return (row >= 0 && row < limitRow && col >= 0 && col < limitColumn );
}

function visitIsland(row: number, col: number, grid: string[][]){

    const limitRow = grid.length;
    const limitCol = grid[0].length; // aqui deberiamos el limite de las columnas en caso de que tengas una matriz irregular
    //en est aparte se valida si el valor actual esta dentro de los limites
    if (!isValid2(limitRow,limitCol,row,col)) {
        return;
    }
    //se verifica si el valores actual es "1"
    if (grid[row][col] != "1") {
        return;
    }
    // se modifica el valor actual para que no busque ahi   
    grid[row][col] = "0";
    // creamos el array de direcciones que puedo visitar arriba, derecha, izquierda, abajo
    const directions = [[-1,0], [0,1], [1,0],[0,-1]];
    //aqui se ejecuta cada operacion y solo hacemos una llamada a la funcion
    for (const direction of directions) {
        const newRow = row + direction[0];
        const newCol = col + direction[1];
        visitIsland(newRow,newCol, grid);
    }
}

function numberOfIslands2(grid: string[][]): number {
    let islandCount = 0;

    if (grid.length === 0) { // validacion en caso de que el array este vacio, asi on tenemos indefinidos
        return 0;
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            // para ejecutar lo siguiente tengo que validar que mi elemento actual es un uno, si no, no puedo seguir
            if (grid[i][j] === "1") {
                islandCount++;
                //se ejecuta visitIsland
                visitIsland(i,j, grid);
            }
        }
    }
    return islandCount;
}

console.log( numberOfIslands2(
    [["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]]
));

console.log(numberOfIslands2(
    [["1","0","0","0","1"],
    ["0","0","0","0","0"],
    ["0","0","0","0","0"],
    ["1","0","0","1","1"]]
));

console.log(numberOfIslands2(
    [["1","1","1"],
    ["0","1","0"],
    ["1","1","1"]]
))

/**
 * NOTAS RAPIDAS
 * 
 * - Tiene tres reglones y dos columnas
 * [[,],[,],[,]]
 * 
 * - Hay que validar si el array esta vacio, si esta vacio el tamaño del limite de la columna no será valido
 * - Anteriomente hice una variable para cada tipo de movimeinto, pero esto se puede simplificar con un un array de esos movientos [arriba, derecha, abajo, izquierda], de esta manera puedo ir actualizando cada posicion ocn ayuda de un ciclo for
 */