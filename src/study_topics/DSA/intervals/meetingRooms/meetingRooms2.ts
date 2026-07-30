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

type Interval = [number, number];

function minMeetingRooms(intervals: Interval[]): number  {

    // separamos  intervals en una arrays de inicio y fin
    let inits = [];
    let ends = []
    for (const [init, end] of intervals) {
        inits.push(init);
        ends.push(end);
    }
    let startIndex = 0;
    let endIndex = 0;

    //ordenamos los arrays
    inits.sort((a,b) => a-b)
    ends.sort((a,b) => a-b);

    let rooms = 0;
    //ahora tengo que iterar mientras el indice sea menor a la longitud de alguno de mis arrays
    while( startIndex < inits.length &&  endIndex < ends.length ) {
        // console.log(inits[startIndex] , "<=" ,ends[endIndex])
        if (inits[startIndex] <= ends[endIndex]) { // esto es -> 0 < 10 ?
            startIndex++; // startIndex aumenta uno mas
            rooms++;
            // console.log(startIndex, rooms)
        } else {
            rooms--;
            endIndex++;
        }
    }

    return rooms;
}

console.log(minMeetingRooms([[0,40],[5,10],[15,20]]), "res = " +2);
console.log(minMeetingRooms([[0,4],[5,10],[15,20]]), "res = " +1);

console.log(minMeetingRooms([[0,40],[5,10],[5,20]]), "res = " +3);
console.log(minMeetingRooms([[4,9]]), "res = " +1);

/**
 * NOTAS
 * 
 * tenemos un array de horas de inicio y horas de finalizacion de reuiniones
 * Hay que ver si cada una una de las reuniones se puede tomar en un numero minimo de salas
 * Significa que tenemos que ver que no se empalmen las reuniones.
 * 
 * IDEAS
 * 
 * 
 * Revisando el problema, tenemos que comparar cada hora de finalizacion con cada hora de inicio, si la hora de incio es la misma que la hora de finalizacion, esto significa que esas dos reuniones pueden estar en la misma sala
 * 
 * ¿Qué observamos en el array?
 * [inicio1, fin1], [inicio2, fin2] [inicio3, fin3]
 * 
 * Se puede separar en una array de inicios y de finales
 * un fin y un inicio pueden ser iguales
 * siempre vamos a tener un array de dos elementos
 * 
 * ¿Qué pasa si separamos el array en dos array de inicio y fin?
 * 
 * Puedo comparar cada hora de inicio con cada hora de fin, ¿Para que? ¿que significa?
 * 
 * para este ejemplo: [(0,40),(5,10),(15,20)] -> [0,5,15] y [10,20,40] IMPORTANTE estos arrays deben estar ordandos
 * 
 * inicio una reunion a las 0 y veo si esta hora de inicio es menor a una hora de finalizacion, a la primer hora de finalizacion, en otras palabras
 * 
 * inicio1 < fin1 ? Si, esto significa que puedo tener 1 reunion en 1 sala, sala = 1, reviso la siguinte hora de inicio con la misma hora de fin
 * 0 < 10 ? si, sala++; inicio++, sala  = 1
 * 
 * incio2 < fin1 ? Si, significa que puedo tener 2 reuniones en 2 sala, reviso la siguiente hora de inicio
 * 5 < 10 ? Si, sala++, inicio++; sala = 2
 * 
 * inici3 < fin1 ? No, significa que ya no puede tener 3 reuniones en 2 salas, tengo que disminuir la sala y ver la siguiente hora de fin
 * 15 < 10 ? NO, sala--, fin++, inicio no aumenta
 * 
 * inicio3 < fin2 ? Si, significa que puedo tener 1 reunion en 2 salas, aumento sala y revisa el proxima fin
 * 15 < 20 ? SI, sala++, inicio++ sala = 3
 * 
 * Aqui se temrina y ya no puedo continuar por que ya no tengo mas valores por comparar 
 */