export {};
/**
 * El promedio de radio k para un subconjunto nums centrado en algún índice icon radio k k es el promedio de todos los elementos entre numslos índices i - ky * i + k( inclusive ). Si hay menos de kelementos antes o después del índice k i, entonces el promedio de radio k es k -1.

 * Construye y devuelve una matriz avgsde longitud ndonde avgs[i]es el promedio del radio k para la submatriz centrada en el índicei .

 * El promedio de xlos elementos es la suma de los xelementos dividida por x, utilizando la división entera . La división entera trunca hacia cero, lo que significa que se pierde su parte fraccionaria.

 * Por ejemplo, el promedio de cuatro elementos 2, 3, 1, y 5 es (2 + 3 + 1 + 5) / 4 = 11 / 4 = 2.75, que se trunca a 2.
 */
function kRadiusAverageSubArrays(nums: Array<number>, k: number){
    /**
     * NOTAS
     * como primera observacion es un sliding window estatico.
     * Se tiene que verificar el tamaño del subarray para calcular el promedio: if currSubArry.length < k -> -1
     * la divicion sera entera, sin decimales.
     * recordar que el radio es la mitad del diametro, por lo que con un radio 2, el tamaño del sub array sera 2*2 + 1 = 5; k = 3, 3*2 + 1 = 7
     */

    let curr = 0;
    let d = k*2 +1; // radio es la mitad del diametro, para este caso usamos k*2 +1
    for (let i = 0; i < d; i++) {
        curr = curr + nums[i]; // esto es suma de mi primer ventana, tengo la suma de 0 al indice d.
    };
    let avg = Math.trunc(curr/d); // recordar que el problema dice que se trunca el numero entero
    let avgs = [];
    let count = 0;
    //ahora se realiza el slinding window static y se calcula el promedio 
    for (let i = d; i < nums.length; i++) {
        // recuerda que el slinding window se usa con una condicion contraria 
        while(avgs.length < nums.length ) {
            if (count == Math.trunc(i/2)) {
                avgs.push(avg) // aqui se puede agregar al array junto con los -1
                count++;
                break;
            } else{
                avgs.push(-1);
                count++;
            }
        }
        curr = curr - nums[i-d] + nums[i];
        // valor actual =  valor actual - valor viejo[0] + nuevo valor[donde empieza el array]
        avg = Math.trunc(curr/d);
        
        
    };
    avgs.push(avg)
    while( avgs.length < nums.length){
        avgs.push(-1)
    }
    return avgs; 
}

// console.log(kRadiusAverageSubArrays([7,4,3,9,1,8,5,2,6], 3))

function kRadiusAverageSubArrays2(nums: Array<number>, k: number){

    let curr = 0; // primer suma de sliding window statico
    let d = k*2 +1; // diametro
    let avgs = new Array(nums.length).fill(-1); //creamos el array lleno de -1 y reemplazamos -1 segun la condicion
    if (d > nums.length) {
        return avgs
    }


    for (let i = 0; i < d; i++) {
        curr = curr + nums[i];
    }

    let avg  = Math.trunc(curr/d); // primer promedio
    avgs[k] = avg;

    for (let i = d; i < nums.length; i++) {
        //recuerda que ya tenemos la suma de la prier ventana, ahora, tenemos que quitarle el numero anterior y sumarle el nuevo numero
        curr = curr - nums[i-d] + nums[i];
        avg = Math.trunc(curr/d)
        avgs[i-k] = avg;
                
    }
    return avgs;
}

console.log(kRadiusAverageSubArrays2([7,4,3,9,1,8,5,2,6], 3))
console.log(kRadiusAverageSubArrays2([8], 10000))