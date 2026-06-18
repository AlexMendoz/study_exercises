
/**
 * // metodo para resolver ejercicios sobre recorrer arrays pero con mayor eficiencia que usando un for normal
 */


function two_pointer_1(arr: any){
    /**
     * ejercicio de palindormo con two pointers
     */

}

two_pointer_1(["h","a","n","a","h"])

function two_pointer_2(arr: Array<String>){
    let init = 0;
    let final = arr.length;

    while (init > final){
        
        let new_final = arr[final];
        arr[init] = arr[final];
        arr[final] = new_final;
        
        if (new_final == arr[init]){
            init =+1;
        } else {
            break;
        }
        
    }
}

two_pointer_2(["5","a","n","a","1"])


two_pointer_2