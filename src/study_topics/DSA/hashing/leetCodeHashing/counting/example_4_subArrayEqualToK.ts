/**
 * Example 4: 560. Subarray Sum Equals K

Given an integer array nums and an integer k, find the number of subarrays whose sum is equal to k.
 */

function subarrayEqualsToK(nums: number[], k: number): number {


    let countPrefixs = new  Map();
    let ans = 0;
    let curr = 0;

    countPrefixs.set(0,1);

    for (let i = 0; i < nums.length; i++) {
        curr = curr + nums[i];  // guarado del prefix en ela variable
        
        ans = ans + (countPrefixs.get(curr -k) ?? 0); // se verifica si existe un
        //aqui es donde se hace la condicion para determinar si existe o no un prefix sum que cumpla la condicion curr - k = prefixSumAnt
        // si existe, se aumenta el contador por que eso indica que hay un subarray que cumple con la condicion de que su prefixSum = k

        countPrefixs.set(curr, (countPrefixs.get(curr) ?? 0) +1); //guardado de cada valor del prefix sum en el Map

        //este if es solo para el console.log
        if((curr -k ) >= 0){

            console.log(curr, " - ", (curr - k), " = ", k);
            //recuerda que el prefixSum tiene que empezar desde 1 por que necesita un primer valor
            //entonces, para el primer array, tiene que ser i + 1
            // para el segundo array tiene que ser i -1, esto es por que es la PrefixSum
            console.log(nums.slice(0,i+1), " - ", nums.slice(0,i-1), " = ",nums.slice(i-1,i+1))
        }
        
        
        // console.log(nums.slice(0,i), " - ",nums.slice(0,curr-k))

    }

    // console.log(countPrefixs)


    return ans;
}

// console.log(subarrayEqualsToK([1, 2, 1, 2, 1], 3)) //esto es igual a 4
console.log(subarrayEqualsToK([3,4,7,2], 9))


/**
 * NOTAS
 * 
 *  - Nos piden encontrar subarrays y eso se puede realizar con Prefix Sum
 *  - En ejercicios anterios no pedian cumplir la condicicion de menor o igual pero ahora es igual.
 *  - El ejemplo nos dice que debeos de usar map y setear un valor inincial a 0: 1 ya que si no nos estaria faltando un valor
 *  - Recuerda que el prefix Sum guarda distancias y se pueden calcular los subarrays haciendo operaciones
 * 
 * IDEA
 * 
 *  -   La idea es que el prefixSum se haga el el mismo for que se reliza la validacion, esto es prefixSum[i] = prefixSum[i] + nums[i]
 *  -   recordando lo que dice el problema es que tenemos que necontrar un subArray que nos de K
 *  -   Tenemos que regresar el total de cada subArray
 * 
 * PSEUDO CODIGO
 * -    declaramos las variables e inicializamos el map con el {0: 1}
 * -    recorremos el array nums
 * -    vamos guardando la prefixsumm en una variable
 * -    guardamos el prefixSum en el map
 * -    Verificamos si existe un prefix sum menos el k, si existe aumentamos el contador y si no, no aumentamos
 * -    guardamos el prefixsum actual (curr)
 */