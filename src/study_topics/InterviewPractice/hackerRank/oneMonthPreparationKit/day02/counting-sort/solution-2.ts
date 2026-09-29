export {};

function countingSort(arr: number[]): number[]{

    let counting = Array(100).fill(0); // se crea el array de 100 elementos llenos de ceros

    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        sum+= counting[arr[i]] + 1;
        counting[arr[i]] = sum;
    }

    return counting;
}

console.log(countingSort([1,1,3,2,1]))

/**
 * vmaos a contar la frecuecia de aparicion de cada elemento y cada elemetno va a estar representado por la posicion del indice en el array
 * 
 * [0,3,0,1,2,...]
 * 
 * el cero sale cero veces
 * el 1 sale 3 veces
 * el 2 sale 0 veces
 * el 3 sale 1 vez
 * 
 * 
 */