export {};
/**
 * 973. K Closest Points to Origin
    Medium

    Topics
    premium lock icon
    Companies
    Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

    The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

    You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

    Example 1:

    Input: points = [[1,3],[-2,2]], k = 1
    Output: [[-2,2]]
    Explanation:
    The distance between (1, 3) and the origin is sqrt(10).
    The distance between (-2, 2) and the origin is sqrt(8).
    Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
    We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].
    Example 2:

    Input: points = [[3,3],[5,-1],[-2,4]], k = 2
    Output: [[3,3],[-2,4]]
    Explanation: The answer [[-2,4],[3,3]] would also be accepted.

    Constraints:

    1 <= k <= points.length <= 104
    -104 <= xi, yi <= 104
 */

function distance(x1: number,y1: number,x2: number,y2: number): number {
    return (Math.sqrt(Math.pow((x1 - x2),2) +  Math.pow((y1 - y2),2)));
}

function kClosets(points: [number, number][], k: number): [number,number][]{
    const [x2,y2]: [number,number] = [0,0];
    let pointsDistance = new Map();
    
    // for (let i = 0; i < points.length; i++) {
    //     let x1 = points[i][0];
    //     let y1 = points[i][1];
    //     //guardamos el indice del punto y su distancia, esto nos servira para devolver el punto [x,y]
    //     pointsDistance.set(i,distance(x1,y1,x2,y2))
        
    // }
    let count = 0;
    for (const [x1,y1] of points) {
        pointsDistance.set(count,distance(x1,y1,x2,y2))
        count++;
    }
    
    // let sortMap = Array.from(new Map([...pointsDistance.entries()].sort((a,b) => a[1] - b[1])).keys())
    // map {indice, distancia} entries => [indice, distancia], sort => a[1] distancia1 y b[1] distancia2 a comparar, map quita el [] de [distancia] y deja solo distancia 
    let sortIndex = [...pointsDistance.entries()].sort((a,b) => a[1] - b[1]).map(([key]) => key);

    let neartesPoints = [];
    for (let i = 0; i < k; i++) {
        neartesPoints.push(points[sortIndex[i]]);
        
    }
    return neartesPoints;
}

console.log(kClosets([[1,3],[-2,2]], 1))

console.log(kClosets([[3,3],[5,-1],[-2,4]], 2))


/**
 * NOTAS
 * 
 * A simple vista parece un problema de una funcion que recibe un vector de elementos y se tienen que evaluar, se hace un operacion por cada punto, se detemrina cual o cuales cumplen con distacion mas corta al origen y regresalos.
 * 
 * Para lo formula de la distancia, es para calcular la distancia entre dos puntos, pero el problema solo me un punto, ¿Cúal es el otro punto?, el origen (0,0)
 */
