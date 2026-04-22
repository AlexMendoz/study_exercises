/**
 * La suma de prefijos e suna tecnica que se usa en arrays y string para obtener la suma en tiempo constante de un sub array.
 * 
 * arr = [5, 2, 1, 6, 3, 8]
 * prefix = [5,7,8,14,17,25] -> es la suma acumulada de los elementos de arr
 * 
 * para acceder a la suma de un subArray basta con ejecutar esta operacion prefix[j] - prefix[i-1]
 * 
 */

/**
 * Dado un array de numeros, un array de querys tal que querys[i] = [x,y] y un entero limit, regresa un array de boleanos que regrese la respuesta de cada query. Un query es true si la suma de x a y es menor que un limite, o falso en otro caso
 * 
 * Ejemplo: Dado lo siguiente 
 * nums = [1, 6, 3, 2, 7, 2], queries = [[0, 3], [2, 5], [2, 4]], and limit = 13 la respuesta seria [true, false, true] para cada query, la suma de los subarrays es [12, 14, 12]
 * 
 * prefix = [ 1, 7, 10, 12, 19, 21 ]
 */

function answerQuerys(arr: Array<number>, querys: Array<any>, limit: number) {
    let prefix = [arr[0]];
    // se crea un prefix Array
    for (let i = 1; i < arr.length; i++) {
        prefix.push(arr[i] + prefix[i-1]);
    }
    let ans = [];
    //evaluacion de los querys
    for (let i = 0; i < querys.length; i++) {
        if ((prefix[querys[i][1]] - prefix[querys[i][0]] + arr[i]) < limit) {
            ans.push(true);
        } else {
            ans.push(false);
        }
        
    }
    return ans;
}



console.log("\nanswerQuerys")
console.log(answerQuerys([1, 6, 3, 2, 7, 2], [[0, 3], [2, 5], [2, 4]],13))

