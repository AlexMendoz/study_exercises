export {};

function maxSumMatrix(m: number[][]): number {
    //hacer validaciones por que sto necesita una matriz con elemtnos

    /**
     * m[0]     -> iteramos sobre un un reglon de longitud n
     * map(_,ci)-> obtenemos lo indices (0,1,2,3)
     * m.map(r) -> aqui iteremos para cada renglon [1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]
     * row[ci]  -> obtener los elementos de indice i para cada renglon -> [1,5,9,13]
     *
     */
    let trans = m[0].map((_, colIndex) => m.map(row => row[colIndex]));

    const sumLeftUp = (m: number[][]) => {
        let len = (m[0].length -1)/2;
        let sum = 0;
        for (let i = 0; i < len; i++) {
            for (let j = 0; j < len; j++) {
                console.log(m[i][j]);
                
                sum +=m[i][j]
            }
        }

        return sum;
    }

    console.log("up left: ", sumLeftUp(m))

    console.log("\n ", m)

    return 0;
}



console.log(maxSumMatrix([[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]]));


/**
 * IDEAS PARA RESOLVERLO
 * 
 * - Usar dos matrices, una normal y una transpuesta
 * para esto tenemos qu obtener la matriz transpuesta, una forma de hacer es con map
 * 
 * - funcion para hacer la suma del sector izquierod superior
 * 
 * cuantas combinaciones posibles se pueden hacer para encontrar la maxima suma en cada sector??
 * 
 * NOTA se puede calcula la suma de cada sector en paralelo y solo ir comparando cada respuesta actual en funcion del numero de movimientos posibles
 * algo similar a maxSum = Math.max(c1,c2,c3,c4) y cualquiera de esos seria valido
 * 
 * OTRA NOTA
 * al pensar en como se mueven los elementos, es similar a un cubo de rubik, los elementos de los extremos siemore se moven dentro de los extremos, y este comportamiento se replica para los elementos internos.
 * Revisando mas a detalles las constricciones del problema, cada celda dentro de primer cuadrante siempre tendr un vlaor maximo, entonces solo necesitamos saber somo podemos encontrar ese valor maximo, y esto nos quita la "sobre complicaicon " de determinar cuantas combinaciones posbibles podemos tener.
 * 
 * Esto de arriba es una gran simplificacion de la idea de calcular la suma de cada sector ne paralelo
 * 
 * Ahora, como determino que numeros pueden ir en cada lugar?
 * tiene que ser una array de numeros para las posicicones [0,0] a [n/2,n/2]
 * entonces tendria un array de longitud n donde estaria guardando los numeros para cada posicion.
 * 
 * [1,2,3,4], 
 * [5,6,7,8], 
 * [9,10,11,12], 
 * [13,14,15,16]
 * 
 * [0,0]    -> 1,4,13,16 [0,0], [0,n], [n,0], [n,n]
 * [0,1]    -> 2,3,14,15 
 * [1,0]    -> 5,9,8,12
 * [1,1]    -> 6,7,10,11
 * 
 * cada array se puede guardar en un map 0 -> []
 * 
 * la longitud del array seria de n*n y luego solo sumamos esos elementos, 
 * 
 * PSEUDOCODIGO 
 * 
 * 
 */