# Notas sobre el ejemplo 5

### ¿cómo lo resolveria?

recibo mi array [1, 1, 2, 1, 1] y k = 3 

> ¿Cómo sé si un número es impar?
condicion para saber si un numero es impar -> if (num%2 == 1) entonces num es impar.

> ¿Como puedo encontrar subArrays?

- Con sliding window o con prefix sum

    - Con sliding window necesito dos variables para moverlos indices
    - Con prefixSum calculo el subarray por medio de la resta de los indices

> Este es un problema de hashsing, ¿Cómo puedes usar un Map o Set para resolverlo?

- Recuerdo unos de los conceptos que mencionaron antes, puedo usar un map y agregar como valor inicial (0: 1) pero no recuerdo cual era la idea de hacer esto.
- Sé como se usa el map pero no logro entender como puedo relacionar uno con otro, mi primer solucion seria usar sliding window pero si uso sliding window creo que no seria neceario usar el map

> ¿Qué condiciones tiene?

- El subarray peude tener otros numeros, por ejemplo: [*1, 1, 2, 1*, 1], ese subarray tiene 3 numeros impares.
                                                       

 /**
         * pasamos con los casos:
         * 1) nonNums == k  
         * 2) nonNums < k
         * 3) default nonNums > k
         */
        // caso 1)
        if(nonNums === k){
            //el SubArray es valido
            numOfValidSubArray++;
        }
        // caso 2)
        if (nonNums < k) {
            //se tienen que mover el subarray, si es menor tengo que aumentar j
            j++;
        }
        //caso 3) default
        if (nums[j]%2 == 1) {
            nonNums++;
        }
        i++;