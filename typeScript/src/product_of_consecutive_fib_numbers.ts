function productFib(prod: number): [number, number, boolean] {
    /* 
        - Para este problema se tiene que realizar la serie de fibonacci
        - Se ingresa un numero y se tiene que descomponer en dos elementos que sean consecutivos de la serie de 
            fibonacci que su producto sea el numero
        - Se tiene que determinar una forma para descomponer el input y luego realizar la seria de finocci

    */



    return [1,2, false];
    
}
/** n:  */
function fibonacci(n: number) {
    
    /**
     * generar la serie de fibonacci, luego vemos que procede
     */

    let fib: Array<number> = [0];
    let count: number = 0;
    let sum = 0;

    if (fib.length == n) {
        return fib;
    } else {
        while (fib.length < n){
            if (fib.length == 0 ){
                fib.push(0);
            } else if (fib.length == 1) {
                fib.push(1);
            } else {
                sum = fib[count-1] + fib[count];
                fib.push(sum);
            }
            count+=1;
        }
    }
    return fib;
}

console.log("fibonacci: ",fibonacci(10));

console.log(productFib(1));