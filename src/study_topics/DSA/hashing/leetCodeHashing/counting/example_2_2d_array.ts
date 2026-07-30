export {};
/**
 * Example 2: 2248. Intersection of Multiple Arrays

Given a 2D array nums that contains n arrays of distinct integers, return a sorted array containing all the numbers that appear in all n arrays.

For example, given nums = [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]], return [3, 4]. 3 and 4 are the only numbers that are in all arrays.
 */

function intersectionOfMultiplesArrays(nums: number[][]): number[]{
    let intersection = new Map();
    let ans = [];

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i].length; j++) {
            intersection.set(nums[i][j], (intersection.get(nums[i][j]) ?? 0) + 1);
        };
    };
    // console.log(intersection) // HashMap con los numeros unicos y las veces que paracen en cada array
    
    for (const [key, val] of intersection) {
        if (val === nums.length) {
            ans.push(key);
        }
    }
    ans.sort((a, b) => a-b);

    return ans;
}

console.log(intersectionOfMultiplesArrays([[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]));
//el assert es para que se muestre en caso de que algo falle (pensé que era en caso de que se cumpliera la condicion)
console.assert(JSON.stringify(intersectionOfMultiplesArrays([[3,1,2,4,5],[1,2,3,4],[3,4,5,6]])) === JSON.stringify([3,4]), "Algo fallo");


/**
 * NOTAS
 * 
 * -    recorrer la matriz para crear el map con los elementos: {numero: veces que aparece el numero}
 * -    Iterar sobre el mapa para encontrar los numeros que tiene una longitud igual a nums
 * 
 * VARIABLES
 * 
 * -    HashMap
 * -    contador -> este no es necesario por la sintaxis espacial de HashMap par acontar
 * -    resultado
 */