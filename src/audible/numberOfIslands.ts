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

// funciona para verificar es tamos dentro de los limites FIX, se tienen ue recibir los dos limites por separado, no ausmir que la mitrz simre sera cuadrada
function isValid(position: [number,number], limitRow: number, limitColumn: number){
    return (position[0] >= 0 && position[0] < limitRow && position[1] >= 0 && position[1] < limitColumn);
}

//funcion para iterar cuando se encuentre un valor adyacente 
//FIX recueda que los array empizan desde el cero, por lo que si top aumenta, no estoy viendo hacia arriba en ela matriz, estoy viendo hacia abajo
//FIX lo mismo para la iquierda y derecha, se tiene que aumentar o disminuir el indice 1 ya que ese represneta la columna
function viewAdjacent(curr:[number,number], grid: string[][]){
    

    //antes de buscar vecinos, me tengo que asegurar de que los pueda buscar, o sea, puedo trabajar con la posicion curr? y la posicion curr tiene un 1?
    let limitRow = grid.length;
    let limitColumn = grid[0].length;
    let row = curr[0];
    let column = curr[1];
    // valimos que la posicion sea valida y sea 1
    if (!isValid(curr, limitRow, limitColumn)) {
        return ;
    } 
    
    if(grid[row][column] !== "1") {
        return;
    }

    //piensalo como puntos cardinales, aqui acutlaizamos las posiciones para buscar en los adyacentes
    let top: [number,number] = [curr[0] - 1, curr[1]];//[1,0]
    let rigth: [number,number] = [curr[0], curr[1] + 1]; //[0,1]
    let bottom: [number,number] = [curr[0]+1, curr[1]]//[0,-1];
    let left: [number,number] = [curr[0], curr[1] -1]//[-1,0];
    // NOTA: mi valor actual esta en curr, ahora puedo cambiar el valor en grid a 0 para no contarlo otra vez
    grid[row][column] = "0";

    viewAdjacent(top, grid);
    viewAdjacent(rigth,grid);
    viewAdjacent(bottom, grid);
    viewAdjacent(left,grid);

}

function numberOfIslands(grid: string[][]): number {
    let ans: number = 0;
    //recorremos cada elemento del grid
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === "1") {
                ans++;
                viewAdjacent([i,j],grid);
            }
        }
    }
    return ans;
}

// const grid = [
//     ["1", "1", "0"],
//     ["1", "0", "0"],
//     ["0", "0", "1"]
// ];

// viewAdjacent([0, 0], grid);

// console.log(grid);

console.log(numberOfIslands([
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]))



// console.log(numberOfIslands([
//   [[    ],[1, 0],[   ],"0","0"],
//   [[-1,0],[0, 0],[1,0],"0","0"],
//   [[    ],[0,-1],[   ],"0","0"],
//   ["0","0","0","1","1"]
// ]))

/**
 * CONCIDERACIONES
 * -    los 1 es una isla
 * -    cada 1 adyacente a otro, significa que es una isla
 * -    Como determinamos que un 1 es adyacente a otro? por su posicion, esto es una array 2D, por lo que la posicion anterior tiene que tener un elemento de anterior o posterior, es decir: curr = [0,1], antes = [0,0], despues = [0,2], siendo que el curr con [i,j] debe coincider con antes en i y con despues en i, esto para el eje horizontal, para el posterior debe coincidir en j
 * 
 * TIPS
 * -    no es necesario ver un elemento anterior, solo ver hacia delante
 * -    Recordar que la matriz tiene limites, esto es por si buscamos elementos anterios o posteriores nos salgamos de los limites
 * -    
 */



/**
 * NOTAS    
 * Este ejercicio ya lo hice con arturo pero no lo logre replicar del todo pero ya entiendo mas como va el problema
 * -    Recuerda que que hay un eje para ver las islas
 * -    No es necesario que se guarden cosas porque podemos ver los 1 cuando vamos recorriendo el array
 */