export {};

function countigSort(arr: number[]): number[]{

    // if (arr.length != 100) {
    //     return [];
    // }

    let frecuencies = new Map(); // recuerda que el map no mantiene el orden

    for (let i = 0; i < 100; i++) {
        frecuencies.set(i,0);
    }

    for (const v of arr) {
        frecuencies.set(v, frecuencies.get(v)+1);
    }
    console.log(frecuencies)
    return [...frecuencies.values()].flat()

}

console.log(countigSort([1,1,3,2,1]))
