export {};

function maxSumMatrix(m: number[][]): number {
    //hacer validaciones por que sto necesita una matriz con elemtnos
    let n = (m.length/2) ; // longitud del primer sector
    let nl = (2*n) -1; // FORMULA matriz 2nx2n -> 2n = 4; n = 2, restar menos uno para que este dentor de los limites de la matriz
    let s1 = []

    for (let i = 0; i < m.length/2; i++) {
        let maxVal = 0;
        for (let j = 0; j < m.length/2; j++) {
            // console.log(m[i][j], m[i][nl-j], m[nl-i][j],m[nl-i][nl-j])
            maxVal = Math.max(m[i][j], m[i][nl-j], m[nl-i][j],m[nl-i][nl-j]);
            s1.push(maxVal);
            // console.log(" ")
        }
    }
    // console.log(m[0][0], m[0][3], m[3][0], m[3][3])
    console.log(s1)
    let answer = s1.reduce((a,b) => a+b );
    return answer;
}


function flippingMatrix(matrix: number[][]): number {
    // Write your code here
    
    let n = matrix.length/2; //longitud de mi primer cuadrante
    let nl = (2*n) -1; // Necestiamos este valor par abtener los elemtos que puedne ir en el primer cuadrante, para matrix = 4, n = 4/2 = 2; 2*2-1 = 3, lo cual corresponde con el indice del ultimo elemento
    let maxValues = [];
    
    for(let i = 0; i < n; i++){
        let maxValue = 0;
        for(let j = 0; j < n; j++){
            //console.log(matrix[i][j], matrix[i][nl-j], matrix[nl-i][j],matrix[nl-i][nl-j]);
            maxValue = Math.max(matrix[i][j], matrix[i][nl-j], matrix[nl-i][j],matrix[nl-i][nl-j])
            maxValues.push(maxValue);
        }
    }
    
    let answer = maxValues.reduce((a,b) => a+b );
    return answer;

}

console.log(flippingMatrix([
    [1,2,3,4], // [0,0], [0,3], [3,0], [3,3]
    [5,6,7,8], 
    [9,10,11,12], 
    [13,14,15,16]]));

console.log(maxSumMatrix([
    [1,2,3,4], // [0,0], [0,3], [3,0], [3,3]
    [5,6,7,8], 
    [9,10,11,12], 
    [13,14,15,16]]));


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
 * [0,0]    -> 1,4,13,16    [0,0], [0,n], [n,0], [n,n]
 * [0,1]    -> 2,3,14,15    [0,1], [0,2], [n,1], [n,2]
 * [1,0]    -> 5,9,8,12     [1,0], [2,0], [1,n], [2,n]
 * [1,1]    -> 6,7,10,11    [1,1], [1,2], [2,1], [2,2]
 * 
 * cada array se puede guardar en un map 0 -> []
 * 
 * la longitud del array seria de n*n y luego solo sumamos esos elementos, 
 * 
 * PSEUDOCODIGO 
 * 
 * INPUT matriz
 * 
 * crear array para los elementos maximos de cada posicion de la matriz
 * let maxNums = [] de tamaño (n/2)² numeros del sector 1; m.len 8 = (8/2)² = 4² = 16: m.len = 4 -> 2
 * 
 * 
 * 
 * 
 */