/**
 * 207. Course Schedule
    Topics
    premium lock icon
    Companies

    Hint
    There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

    For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
    Return true if you can finish all courses. Otherwise, return false.

    Example 1:

    Input: numCourses = 2, prerequisites = [[1,0]]
    Output: true
    Explanation: There are a total of 2 courses to take. 
    To take course 1 you should have finished course 0. So it is possible.
    Example 2:

    Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
    Output: false
    Explanation: There are a total of 2 courses to take. 
    To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.    

    Constraints:

    1 <= numCourses <= 2000
    0 <= prerequisites.length <= 5000
    prerequisites[i].length == 2
    0 <= ai, bi < numCourses
    All the pairs prerequisites[i] are unique.
 */


function hasCycle(course: number, graph: number[][], states: number[]): boolean {
    //Empezando desde este curso, hay ciclo?

    //primer caso, como esto será un funcion recursiva, aqui puede existir un 1, y volver a encontrar un 1, significa que hay un ciclo
    if (states[course] == 1) {
        return true;
    }
    // segundo caso, encontramos un 2, significa que llegamos al final y no hay ciclo
    if (states[course] == 2) {
        return false;
    }
    //tercer caso, marcar el curso como activo, las dos condiciones anteriores es por que la funcion es recursiva y el orden en importante, si marcamos el curso como activo entraremos inmediatamente en el primer caso 
    states[course] = 1; //estoy visitanto este curso para el camino actual
    //ahora, necesito evaluar cada curso
    for (const nextCourse of graph[course]) {
        //Recuerda que esta funcion response la pregunta ¿Hay ciclo?
        if (hasCycle(nextCourse, graph,states)) {
            return true;
        }
    }
    //si se termin¿a todo el proceso y no hay ciclos marcamos que ya termine de visitar el curos y sus dependencias
    states[course] = 2;
    return false; // no hay ciclo
}

function canFinish(numCourses: number, prerequisites: [number,number][]): boolean {
    let posible: boolean = true;
    // creacion de la lista de adyacencia
    const graph: number[][] = []; // matriz de adyacencia
    // creamos la estrucrura que almacenara la matriz de adyacencia
    for (let course = 0; course < numCourses; course++) {
        graph.push([]);
    }
    //llenado de la matriz de adyacencia, en indice corresponde al nodo del que dependen los valores que tiene
    for (const [course, preRe] of prerequisites) {
        graph[preRe].push(course);
    }
    console.log(graph)

    const state = new Array(numCourses).fill(0);
    //ahora tengo que recorrer todos lo cursos
    for (let course = 0; course < numCourses; course++) {
        if (hasCycle(course, graph, state)) { // si hay ciclo, no se pueden cursar todos los cursos
            return false;
        }   
    }
    return posible;
}

console.log(canFinish(6, [[1, 0],[2, 0],[3, 1],[4, 2],[5, 3],[5, 4]]))
console.log(canFinish(2, [[1, 0], [0, 1]]));

/**
 * NOTAS    
 * 
 * Necesito crear una lista de adyancencia, esta lista me permitira conocer que nodos estan conectados hacia que nodo
 * const prerequisites = [[1, 0][2, 0],[3, 1],[4, 2],[5, 3],[5, 4]] 
 * para este ejemplo tengo qie construir una lista 6 elemetos y que me digan que el 0 va hacia el 1 y 2, el 1 hacia el 3 y asi para cada valor de prerequisites
 * const graph = [[1,2], [3]], donde cada indice representa el nodo anterior, el 0 va hacia el 1 y 2, el 1 hacia el 3
 *
 * Para este problema se tienen que tener tres estados:
 *  0 = aun no se visita este curso
 *  1 = estoy visitando este curso por el recorrido actual
 *  2 = ya termine de visitar este curso y sus dependencias
 *  Esto es para cada curso, o sea, tengo 6 cursos, necesito un array para poner esos estados [0,0,0,0,0,0], entonces, cuando este recorriedo un camino, los ire marcando [1,1,1,1,1,2], ya llegue el curso 5 y sus dependencias
 * [1,0,0,0,0,0] -> [1,1,0,0,0,0] -> [1,1,1,0,0,0] -> [1,1,1,1,0,0] -> [1,1,1,1,1,0] -> [1,1,1,1,1,1] -> [1,1,1,1,1,2]
 * 
 * Ahora, uno de los puntos importantes de este problema, es saber si es posible terminar los cursos, y la unica condicion para se termine es que no haya ciclos, por lo tanto, tenemos que buscar ciclos
 *  - Tengo que revisar si en algun punto de la matriz de adyancencia hay un ciclo

 */