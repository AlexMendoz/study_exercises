/**
    La serie de Fibonacci es una sucesión de números en la cual cada número es la suma de los dos números anteriores.

    La sucesión comienza normalmente con 0 y 1, y a partir de ahí cada término se obtiene sumando los dos anteriores.

    Se define de la siguiente manera:

    F(0) = 0

    F(1) = 1

    F(n) = F(n−1) + F(n−2) para n ≥ 2

    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

    El ejercicio se tiene que hacer utlizando recusion.
 */
/**
 * 
 * @param n numero de elementos a calcular
 */
function fibonacci(n: number) {

/**
 * 
 * 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
 * 
 * el primer elemento siempre es cero
 * el segundo elemento siempre es 1; Esto implica la suma de 1 al valor anterior; 0 + 1 = 1,
 * el 1 de la suma anterior es el elemento numero 3 con indice dos.
 * siempre vamos a tener dos casos defaul, el caso de 1 elemento [0] y el caso de 2 elementos [0,1]
 * 
 * n = longitud
 * 
 * if n = 1; [0]
 * if n = 2; [0,1]
 * para cualquier otro caso
 * 
 * para cada e en elementos
 * tomamos el ultimo y le sumamos el penultimo
 * 
 */
    if (n == 0) return []
    if (n == 1) return [0]

    while (fib.length < n) {
        
        if(fib.length == 0){
            //con esto ya tenemos los dos elementos iniciales
            fib.push(0);
            fib.push(1);
        }

        let newFib = 0;
            
        newFib = fib[fib.length-1] + fib[fib.length-2]; // 0 +1 = 1
        fib.push(newFib) //[0,1,1]

        // fibonacci(n)
    }
    console.log(fib);

}

let fib: Array<number> = [];
let tam: Number = 0;

fibonacci(10);

/**
 * Hay que tener bien claro el input y el output del problema
 */
