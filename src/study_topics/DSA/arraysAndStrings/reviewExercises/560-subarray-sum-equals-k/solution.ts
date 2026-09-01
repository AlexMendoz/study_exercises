export {};


function subarraySumEqualsToK(nums: number[], k: number) {

    let ans = 0;
    let curr = 0;

    let frecuency = new Map();

    frecuency.set(0,1); // el numero cero aparecio una vez, esto siempre es de manera implicita en la prefix sum pero ahora lo poner particularmente
    let tmp = [0]; //valor unicamente para representar en el console.log

    for (let i = 0; i < nums.length; i++) {
        
        curr = curr + nums[i]; // aqui se hace la prefix sum
        tmp.push(curr)
        //con curr - k, nos estamos preguntando ¿ya viste una suma anterior que de curr -k?
        //recuerda que el prefix sum, tienen agrupado implicitamente los subarrays y los podemos determinar apartir de cierta condicion
        console.log(tmp,`¿hay alguna valor (${curr} - ${k})${curr-k} en tmp?`, tmp.includes(curr-k)); // ese tmp se ve reflejado en el map para contar frecuencias
        if (frecuency.has(curr - k)) { //cuando si existe en el map, actualizamos a respuesta con base en la contidad de apariciones de ese valor
            ans = ans + frecuency.get(curr-k);
        }
        //aqui simplemente actulalizamos los valores al map de frecuencias
        frecuency.set(curr, (frecuency.get(curr) || 0)+1);
    }
    console.log(frecuency)
    return ans
    
}

console.log(subarraySumEqualsToK([1,2,1], 3))
console.log(subarraySumEqualsToK([1,1,1], 2))

// como el problema dice que tenemos que recordar la frecuencia de aparaiciones tenemos que declarar un map y tomar en cuenta que el numero 0 ah aparecido una vez, esto es implicito


/***
 * 
 * [1,2,1] y k = 3
 * se agrega el cero inicial al array de prefix [0] -> [0,1,3,4]
 * 
 * curr = 0 + 1 = 1; i = 0;
 * prefix[0,1]
 * existe un 1 -3 = -2 en prefix? no
 * 
 * curr = 1 + 2 = 3;  i = 1 -> (0 - 1)
 * prefix[0,1,3]
 * existe un 3 - 3 = 0 en prefix? si: aumenta ans , tomamos el indice del elemento donde esta el 0 que es 0
 * subarrayIndex[0,1]
 * 
 * curr = 3 + 1 = 4 i = 2 
 * prefix[0,1,3,4]
 * existe un 4 - 3 = 1 en prefix? si, aumenta ans, tomamento el indice del elemento 1 que es 1
 * subarrayIndex[1,2]
 * 
 * 
 * respuesta = 0
sumaActual = 0

guardar que la suma 0 ha aparecido 1 vez

para cada número del arreglo:

    sumar el número a sumaActual

    buscar:
        sumaActual - k

    si esa suma ya apareció antes:
        agregar a respuesta la cantidad de veces que apareció

    registrar que sumaActual apareció una vez más

devolver respuesta
 */