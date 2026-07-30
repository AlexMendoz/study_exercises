export {};
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

/**
 * 
 * @param row renglon del grid
 * @param col columna del grid
 * @param grid array 2D a evaluar
 * @returns true if valuesits into limits, false other case
 */
function isValid3(row: number, col: number, grid: number[][]): boolean {
    return (row >= 0 && row < grid.length && col >= 0 && col < grid[0].length);
}

function orangesRotting(grid: number[][]): number{
    let minutes: number = 0; //levels
    let queue: [number, number][] = []; // queue
    let fresh = 0;
    //realizamos el primer recorrido para obtner los valores iniciales de fresh y queue
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] == 1) { //contamos naranjas frescas
                fresh++;
            }
            if(grid[i][j] == 2){//contamos naranjas podridas
                queue.push([i,j]);
            }   
        }
    }
    //realiamos la validacion para saber si continuamos con el procesos o no
    if (fresh === 0) {
        return 0; // no hay fresas, no hay nada que hacer
    }

    //si hay naranjas frescas y naranjas podridas se continua con el proceso
    while (fresh > 0 && queue.length > 0) {
        let size = queue.length; // cuantas naranjas podridas hay (las veces que se hara el proceso)
        // cada qe se termina de procesar este for es un nivel/minuto
        for (let i = 0; i < size; i++) {
            const [row, col] = queue.shift()!// obtenemos la ubicacion de la naranja contagiada
            // top, right, bottom, left
            const directions = [[0,-1], [1,0], [0,1], [-1,0]];
            //evaluamos cada ubicacion adyacente valida
            for (const [dRow, dCol] of directions) {
                const newRow = row + dRow;
                const newCol = col + dCol;
                //validamos que este en una posicion valida
                if (!isValid3(newRow,newCol, grid)) {
                    continue; //salimos del bucle y pasamos al sigueinte elemento
                };
                // el valor el valido, verificamos que sea una naranja fresa y si es, la contagiamos
                if (grid[newRow][newCol] == 1) {
                    grid[newRow][newCol] = 2; // se contagia
                    // ahora hay una naranja fresca menos
                    fresh--;
                    //ahora hay una podrida mas
                    queue.push([newRow, newCol]);
                }
            }
        }
        minutes++; // cuando se termina de hacer todo el proceso para el tamaño de la cola, se aumenta el minuto
    }

    // si queda una naranja fresca devolvemos -1, asi lo dice el problema
    return fresh > 0 ? -1 : minutes;
}

console.log(orangesRotting([
    [2,1,1],
    [1,1,0],
    [0,1,1]]
))

// Recueda que, en la queue, pueden entrar varios valores, 1, 2, etc, pero cada uno de esos valores estan agrupados, o sea, si entran dos valores, se tiene que procesar esos valores y cuenta como un nivel, luego entran otros 4 valores, se procesan y cuentan como otro nievel

/**
 * NOTAS
 * 
 *  - Para este problema se usara el BFS (busqueda en anchura)
 *      - Entonces se necesita una cola para almacenar los elementos que se van evaluar; queue
 *      - una variable para guardar lo niveles/ minutos; minutes
 *      - Se necesita un bucle para iterar los niveles (while); while (queue.length > 0);
 *      - Una variable para indicar si aun quedan elementos por recorrer
 *  - Se necesita una funcion para verificar que mis valores esten dentro de los limites de mi matriz
 *  - Se necesita un array de direcciones para saber a donde mirar (top, right, bottom ans left)
 *     
 * IDEA PRINCIPAL
 * 
 * Nos dan el array 2D.
 * Declaramos las variables: queue, minutes, fresh, directions
 * 
 * Realizamos un primer recorrido para saber cuales son las condiciones de nuestra matriz: Si hay naranjas frescas, si hay prodridas o no hay nada, si hay naranjas fresas las almancenamos para saber cuantas hay, si hay naranjas podridas obtnemos su ubicacion para saber hacia donde mirar con las direcciones
 * 
 * Si no hya naranjas fresacas, no hay nada que hacer (fresh == 0)
 * 
 * Mientras haya naranjas frescas y hayan naranjas podridas se puede continuar con el contagio, para esto vamos a necesitar un bucle while.
 * dentro el while, declaramos una variable size que nos indicará cuantas naranjas podridas hay en cada minuto. (inicialmente, 1)
 * 
 * Realizamos un for para hacer las iteraciones por cada naranja podrida, dentro del for, obtenermos la ubicacion de la primer naranja y la quitamos de la cola (queue), luego, validamos la ubiciones adyacentes, si son validas evaluamos los puntos para saber si es una naranja fresa, si lo es, la contagiamos.
 * 
 * Quitamos una naranja fresca (fresh--)
 * 
 * Agregamos las nuevas ubicaiones de podridas a la cola (queue)
 * 
 * cuando terminamos de hacer las evaluaciones de las naranjas, aumentamos los minutos (minutes)
 * 
 * Si quedan naranjas frescas, regresamos -1 y no, regresamos los minutos;
 */