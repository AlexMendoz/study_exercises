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

function numberOfIslands(grid: string[][]): number {
    let ans: number = 0;
    let currPosition;

    //recorremos cada elemento del grid
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            //cuando vemos un uno, nos detenemos, obtenemos los indices y buscamos
            if (grid[i][j] === "1") {

                currPosition = [i,j]
                j++;
                // determinar como se puede ver el siguiente uno
                if (grid[i][j] === "1") {
                    
                }

                //al final, hay que cambiar el 1 por un cero para que el proximo elemento no lo vea
                return ans;
            }
            
        }
        
    }

    console.log(position)

    return ans;
}

console.log(numberOfIslands([
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]))

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