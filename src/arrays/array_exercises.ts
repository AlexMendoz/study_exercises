/**
 * 3 Dado un array de números, devuelve la suma de todos los elementos usando reduce.
 */
function total_sum(array: Array<number>): number {
    return array.reduce((a, c) => a + c, 0);
}

/**
 * 2 Suma maxima de cualquier subarray de longitud fija
 */
function max_sum_of_subArray(array: Array<number>, l: number): number {
    let i: number = 0;
    let ans: number = 0;


    while (l + i < array.length) {

        let aux_sum: number = array.slice(i, l + i).reduce((a, c) => a + c, 0);
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
    function reforce_slice(): void {
        let array: Array<number> = [1, 2, 3, 9, 3, 2, 3, 4, 2];
        console.log("array: ", array);
        // si solo se entrega un valor, se corta hasta el elemento ingresado
        console.log("slice de 0: ", array.slice(0))
        console.log("slice de 0 a 0:", array.slice(0, 0));
        console.log("slice de 0 a 2:", array.slice(0, 2));
        console.log("slice de 2 a 2:", array.slice(2, 2));
        console.log("slice de 3 a 5:", array.slice(3, 5));
        // slice no hace el corte de atras hacia delante
        console.log("slice de 5 a 1:", array.slice(5, 1));

    }

    /**
     * Comprender map
     */
    function reforce_map() {
        let array = [10, 20, 30];
        console.log("respuesta de map sin []: ", array.map((_,i) => i));
        console.log("respuesta de map con [x,i]: ", array.map((x, i) => [x, i]))
        console.log("respuesta de map con manipulacion: ", array.map(x => x * 2));
        console.log("respuesta de map con manipulacion: ", array.map((x, i) => [i, { x }]).flat());
        // map anidado

        let map_anidado = array.map((_, i) =>
            array.map((_, j) => [i, j])
        );
        console.log("map_anidado:", map_anidado);
    }
    /**
     * Funcion flatmap
     */
    function understand_flatmap() {
        let array = [10, 20, 30];
        let res = array.flatMap((_, i) =>
            array.map((_, j) => [i, j])
        );
        console.log("respuesta de flatMap: ", array)
        console.log("\n Como se ve en el ejercicio anterior de map, acomparacion de de este ejercicio, el map devuelve [[],[],[]] mientras que flatMap [ , , ]\n");
    }

    /**
     *  5. Combina flatMap y slice
     */
    function flatMap_map(){
        let array = [10,20,30];
        // el primer flatMap recorre cada elemento del array pero solo en sus indices, i= 0, i = 1, i = 2
        let res = array.flatMap((_,i) => 
            //luego, se eliminan los elemtos del array con slice para hacer arrays mas pequeños, para el i = 0, se toma todo el array y el map devuelve un array de indices (esto va cambiando por que el tamaño va cambiando)
            // {
                // console.log("i: ", i);
                array.slice(i).map((_,j) => 
                    // luego, se hace un slice por rango, este rango varia por cada elemtento que se elimina del primer slice 
                    array.slice(i,i+j+1))
            // }
        )

        /**
         * Iter 1 [10,20,30]
         * array de indices [0,1,2], i = 0
         * slice 0 del array = [0,1,2] y luego se toma el indice del array j = 0 [0,1,2]
         * slice de rango, de i = 0, j + 1= 1 => [10]
         * 
         * Iter 2 [10,20,30]
         * array de indices [0,1,2], i = 1
         * slice 1 del array = [1,2] y luego se toma el indice del array j = 0 [0,1]
         * slice de rango, de i = 0, j + 1= 1 => [20]
         * Iter 3 [10,20,30]
         * array de indices [0,1,2], i = 2
         * slice 1 del array = [2] y luego se toma el indice del array j = 0 [0]
         * slice de rango, de i = 0, j + 1= 1 => [30]
         */

        console.log("\n Combinacion de flatmap y map: ", res);
    }

    /**
     * 6. Visualiza paso a paso
     */
    function flatMap_map_visualizacion(){
        let array: Array<number> =[10,20,30];

        const result = array.flatMap((_,i) => {
            console.log("i = ", i);
            return array.slice(i).map((_,j) => {
                console.log("slice ",i, " ",i + j +1, "array",array.slice(i, i + j + 1));
                return array.slice(i, i + j + 1);
            });
        });
        // para este ejercicio se juega con los indices de los arreglos utitlizando las funciones map o flatmap, y con esos mismos indices nos apoyamos de la funcion slice para obtener los elementos

        console.log("result = ", result);
    }

    /**
     * 7. Predice la salida
     */
    function predecir_salida() {
        
    }

    reforce_slice();
    reforce_map();
    understand_flatmap();
    flatMap_map();
    flatMap_map_visualizacion();

    return ("ejercicios previos para entender el ejercio 3:");
}

/**
 * Funcion principal que llamara a todos los ejercicios.
 */
function main() {

    console.log("suma total de una array:", total_sum([1, 1, 1, 1, 11]));
    console.log("Suma maxima de todos los subarrays posibles de longitud constante: ", max_sum_of_subArray([9, 2, 3, 4, 5], 3));

    console.log(preview_exercise_3());
}

main()

