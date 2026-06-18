/**
 * Example 1: 1. Two Sum

Given an array of integers nums and an integer target, return indices of two numbers such that they add up to target. You cannot use the same index twice.

 */

function twoSum(nums: number[], target: number) {
    // find tow numbers in array without repit number
    // hint: number has a key

    let hash = new Map();

    for (let i = 0; i < nums.length; i++) {
        let comp = target - nums[i]; // el complemento
        //agregamos los elementos a Map
        hash.set(nums[i], i) // ingresamos el numero como clave y el indice como valor, asi no tenemos numeros que se repitan
        if (hash.has(comp)) {
            
            return [hash.get(comp), nums[i]]
        }
        
        
    }

}

/**
 * NOTAS
 * 
 * num1 + num2 = target; esto se puede traducir a 
 * i + j = target; donde i seria un ciclo y j seria otro, pero la idea es hacerlo con un MAP
 * 
 * ¿Porqué con un Map? 
 *      porque me piden encontrar dos numero que no tengan el mismo indice, con Map puedo tomar cada numero como una clave (asi me aseguro que no se repite) y como clave tomo su indice (es lo que me piden)
 * 
 * ¿Como encuentro esos numeros?
 * 
 * tomando la formula anterior i + j = tarjet, despejando
 * 
 * tarjet - i = j;
 * 
 * de esta forma buscamos el complemento (otro numero) para tener la condicion satisfecha
 * 
 
 * 
 * 
 */