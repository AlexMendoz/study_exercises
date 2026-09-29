export {};

function lonelyInteger(a: number[]): number {
    /**
     * Creamos un mapa de los numeros, la llave es numero y el valor es el numero de veces que aparece
    */
    let frecuencies = new Map();
    // const uniqueValues = new Set(arr);
    for (const value of a) {
        //verificamos que el elemento este en el map, si esta agregamos un mas 1 y si no esta lo agregmos
        frecuencies.set(value, (frecuencies.get(value) ?? 0) + 1);        
    }

    for (const [key,value] of frecuencies) {
        if ( value == 1 ) {
            return key;
        }
    }
    return 0;
}

console.log(lonelyInteger([1,2,3,4,3,2,1]));

/**
 * a mi solo me interesa saber que numero tiene un solo valor, entonces puedo tener un mapa que tenga una llave de frecuencias 
 * {
 *  1: [array de numeros],
 *  2: [array de numeros]
 * }
 * asi cuando termine de recorrer todo. solo hago un get(1)
 * 
 * esto se ve complicado por el tema de array dentro del map, mejor usaremos un set
 */