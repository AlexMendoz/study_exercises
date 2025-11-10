/**
 * 3 Dado un array de números, devuelve la suma de todos los elementos usando reduce.
 */
function total_sum(array: Array<number>): number {
    return array.reduce((a,c) => a+c, 0 );
}

/**
 * 2 Suma maxima de cualquier subarray de longitud fija
 */
function max_sum_of_subArray(array: Array<number>, l: number): number {
    let i: number = 0;
    let ans: number = 0;
    
    
    while (l+i < array.length){

        let aux_sum: number = array.slice(i,l+i).reduce((a,c) => a+c, 0);
        if (aux_sum > ans) {
            ans = aux_sum;
        }
        i++;
    }
    return ans;
}

/**
 * 3.1 Ejercicio para entender mejor el ejercicio 3
 */
function preview_exercise_3(): string {

    /**
     * 1 Reforzamiento slice
     * se hace un "corte" al arreglo con el ultimo no incluido
     */
    function reforce_slice(): void{
        let array: Array<number> = [1,2,3,9,3,2,3,4,2];
        console.log("array: ", array);
        console.log("slice de 0 a 0:", array.slice(0,0));
        console.log("slice de 0 a 2:", array.slice(0,2));
        console.log("slice de 3 a 5:", array.slice(3,5));
        // slice no hace el corte de atras hacia delante
        console.log("slice de 5 a 1:", array.slice(5,1));

    }

    /**
     * Comprender map
     */
    function reforce_map(){
        let array = [10,20,30];
        console.log("respuesta de map sin []: ", array.map((x) => x));
        console.log("respuesta de map con [x,i]: ", array.map((x,i) => [x,i]))
        console.log("respuesta de map con manipulacion: ", array.map(x => x*2));
        console.log("respuesta de map con manipulacion: ", array.map((x, i) => [i, {x}]).flat());
        // map anidado
        
    }

    reforce_slice()
    reforce_map()
    return("ejercicios previos para entender el ejercio 3:");
}

/**
 * Funcion principal que llamara a todos los ejercicios.
 */
function main() {

    console.log("suma total de una array:", total_sum([1,1,1,1,11]));
    console.log("Suma maxima de todos los subarrays posibles de longitud constante: ",max_sum_of_subArray([9,2,3,4,5], 3));

    console.log(preview_exercise_3());
}

main()

