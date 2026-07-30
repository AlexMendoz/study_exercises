export {};
/**
 * Meeting Rooms II
Medium
Topics
Company Tags

Hints
Given an array of meeting time interval objects consisting of start and end times [[start_1,end_1],[start_2,end_2],...] (start_i < end_i), find the minimum number of rooms required to schedule all meetings without any conflicts.

Note: (0,8),(8,10) is NOT considered a conflict at 8.

Example 1:

Input: intervals = [(0,40),(5,10),(15,20)]

Output: 2
Explanation:
room1: (0,40)
room2: (5,10),(15,20)

Example 2:

Input: intervals = [(4,9)]

Output: 1
Constraints:

0 <= intervals.length <= 500
0 <= intervals[i].start < intervals[i].end <= 1,000,000
 */
type Intervals = [number,number]

function viewLimits(final: number, intervals: Intervals[]) {
    let roomCount = 0;
    while(intervals.length > 0){
        // console.log("funcion")
        for (const [init, final] of intervals) {
            console.log(final, "<", init);
            //validacion por si no pasa lo esperado
            if (!(final < init)) {
                break;
            }
            if ((final < init)) {
                let newFinal = init;
                intervals = intervals.slice(1);
                
                viewLimits(newFinal,intervals);
            }
        }
        roomCount++;
    }

    console.log(roomCount);
}


console.log(viewLimits(0, [[0,40],[5,10],[15,20]]))


/**
 * 
 * NOTAS
 * 
 * El problema me pide encontrar la cantidad de salas necesarias para que las reuniones se tengan sin ningun conflicto,
 * Me dan un array de horarios [(0,40),(5,10),(15,20)] y de aqui puedo deducir que se necesitan dos salas, una para la reunion de (0,40) y otra sala para las reuniones de (5,10) y (15,20) ya que no se empalman
 * 
 * 
 * 
 * IDEAS
 * 
 * Como primer idea, se puede hacer una funcion. para comparar los intervalos, verificamos cuales son los valores extremos, el mas pequeño y el mas grande.
 * Con estos limites, voy comparando los valores de cada reunion,
 * 
 * 
 * Tomamos un horario como pivote y lo vamos comparando con los demas, por ejemplo, tomamos (0,40) y evaluamos con los otros limites (5,10) y (15,20), 40 < 5 ? no, siguiente, 40 < 15 ? no, ya terminamos de comparar todos los valores, entonces quitamos (0,40) y aumentamos el contador de salas, ahora tomamoms el (5,10) y validamos 10 < 15 ? si, hemos terminado, y aumentamos el contador de salas
 */
