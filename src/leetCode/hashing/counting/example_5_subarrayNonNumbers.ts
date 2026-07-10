/**
 * Example 5: 1248. Count Number of Nice Subarrays

Given an array of positive integers nums and an integer k. Find the number of subarrays with exactly k odd numbers in them.

For example, given nums = [1, 1, 2, 1, 1], k = 3, the answer is 2. The subarrays with 3 odd numbers in them are [1, 1, 2, 1, 1] and [1, 1, 2, 1, 1].

 */

function subArrayOfNonNums(nums: number[], k: number): number{
    // NOMTA IMPORTANTE -> recordar que el el prefixSum tiene subArrays por defecto

    let counts = new Map(); // de moento no me queda claro por que necesito un map ni tampoco con esa estructura
    counts.set(0, 1);
    let curr = 0; // variable que lleva el conteo de los numeros impares en el sub array

    for (let i = 0; i < nums.length; i++) {
        if (nums[i]%2 === 0) { //aqui se aumenta el contador cuando se detecta un numero impar
            curr++;
        }
        
    }

    let ans = 0;
    return ans;
}

/**
 * NOTAS
 * 
 * Dado un arreglo de enteros positivos nums y un entero k, encuentra cuántos subarrays tienen exactamente k números impares.
 * 
 * El problema es muy similar al anterior, ahora hayq ue validar que los sub arrays tengan k numeros impares en el array, por ejemplo:
 * Para el array [1, 1, 2, 1, 1] existen dos sub arrays
 *  - [1, 1, 2, 1] por que tiene el 1 k veces (3)
 *  - [1, 2, 1, 1] por que tiene el 1 k veces (3)
 * 
 * 
 * PSEUDOCODIGO
 * 
 * crear un Hash Map llamado counts

    guardar en counts:
        0 → 1

    curr = 0
    ans = 0

    recorrer cada número num en nums:

        si num es impar:
            curr = curr + 1

        si num es par:
            curr se queda igual

        needed = curr - k

        si needed existe en counts:
            ans = ans + counts[needed]

        aumentar la frecuencia de curr en counts:
            si curr ya existe:
                counts[curr] = counts[curr] + 1
            si curr no existe:
                counts[curr] = 1

    regresar ans
 */

/**
 *Claro. Sin darte la solución, vamos a entender **qué te está pidiendo** y **cómo debes pensar el problema**.

El problema dice:

> Dado un arreglo de enteros positivos `nums` y un entero `k`, encuentra cuántos subarrays tienen exactamente `k` números impares.

---

## 1. ¿Qué es un “nice subarray”?

En este problema, un **nice subarray** es un subarray que contiene exactamente `k` números impares.

Recuerda:

```txt
subarray = parte continua del arreglo
```

Por ejemplo, si tienes:

```ts
nums = [1, 1, 2, 1, 1]
k = 3
```

Buscas partes continuas que tengan exactamente `3` números impares.

---

## 2. Primero identifica impares y pares

En el arreglo:

```txt
[1, 1, 2, 1, 1]
```

Los números impares son:

```txt
1, 1, 1, 1
```

El número par es:

```txt
2
```

Podrías verlo así:

```txt
[1, 1, 2, 1, 1]
 I  I  P  I  I
```

Donde:

```txt
I = impar
P = par
```

El valor exacto del número no importa tanto. Lo importante es si es **impar** o **par**.

---

## 3. ¿Qué subarrays tienen exactamente 3 impares?

Veamos algunos subarrays:

```txt
[1, 1, 2]
```

Tiene 2 impares, no sirve.

```txt
[1, 1, 2, 1]
```

Tiene 3 impares, sí sirve.

```txt
[1, 2, 1, 1]
```

Tiene 3 impares, sí sirve.

```txt
[1, 1, 2, 1, 1]
```

Tiene 4 impares, no sirve.

Por eso la respuesta es:

```txt
2
```

Los dos subarrays válidos son:

```txt
[1, 1, 2, 1]
[1, 2, 1, 1]
```

Ojo: en el texto que pegaste parece que el ejemplo repite mal el arreglo completo dos veces. Lo correcto es que los subarrays válidos son los dos anteriores.

---

## 4. ¿Cuál es la condición “exacta”?

La condición es:

```txt
exactamente k impares
```

No dice:

```txt
máximo k impares
```

ni:

```txt
mínimo k impares
```

Dice exactamente.

Eso es importante porque cambia el tipo de razonamiento.

Por ejemplo, si `k = 3`:

```txt
2 impares → no sirve
3 impares → sí sirve
4 impares → no sirve
```

---

## 5. ¿Qué debes contar realmente?

No estás contando la suma del subarray.

Estás contando cuántos elementos impares hay dentro del subarray.

Entonces cada número se puede transformar mentalmente así:

```txt
impar → 1
par   → 0
```

Para:

```ts
nums = [1, 1, 2, 1, 1]
```

Puedes pensarlo como:

```txt
[1, 1, 0, 1, 1]
```

Porque:

```txt
1 es impar → 1
1 es impar → 1
2 es par   → 0
1 es impar → 1
1 es impar → 1
```

Ahora el problema se parece a:

> ¿Cuántos subarrays tienen suma exactamente `k`?

Porque contar impares es equivalente a sumar esos `1` y `0`.

---

## 6. Conexión con el problema anterior

El problema anterior decía:

> Encuentra cuántos subarrays tienen suma igual a `k`.

Este problema dice:

> Encuentra cuántos subarrays tienen exactamente `k` impares.

La conexión es esta:

```txt
número impar = aporta 1
número par   = aporta 0
```

Entonces “tener exactamente `k` impares” se puede pensar como:

```txt
tener suma exactamente k en una versión transformada del arreglo
```

Ejemplo:

```txt
nums original:     [1, 1, 2, 1, 1]
versión mental:    [1, 1, 0, 1, 1]
k = 3
```

Ahora buscas subarrays cuya suma sea `3`.

---

## 7. ¿Qué significa `curr` aquí?

En el problema de suma igual a `k`, `curr` era:

```txt
suma acumulada
```

En este problema, `curr` puede representar:

```txt
cantidad acumulada de impares vistos hasta ahora
```

Por ejemplo:

```txt
nums = [1, 1, 2, 1, 1]
```

Recorriendo:

```txt
índice 0: vimos 1 impar  → curr = 1
índice 1: vimos 2 impares → curr = 2
índice 2: sigue 2, porque 2 es par → curr = 2
índice 3: vimos 3 impares → curr = 3
índice 4: vimos 4 impares → curr = 4
```

Entonces `curr` no está sumando los valores reales del arreglo.

No está haciendo:

```txt
1 + 1 + 2 + 1 + 1 = 6
```

Está contando impares:

```txt
1 + 1 + 0 + 1 + 1 = 4
```

---

## 8. Pregunta clave en cada posición

En cada índice te puedes preguntar:

> ¿Cuántos subarrays terminan aquí y tienen exactamente `k` impares?

Para saber eso, necesitas saber cuántos impares llevas acumulados hasta este punto.

Si hasta este índice llevas `curr` impares, y quieres un subarray con `k` impares, entonces necesitas quitar una parte anterior que tuviera:

```txt
curr - k
```

impares acumulados.

Es la misma lógica de:

```txt
actual - anterior = k
```

Solo que ahora:

```txt
actual = impares acumulados hasta aquí
anterior = impares acumulados antes del inicio del subarray
k = impares que quiero dentro del subarray
```

---

## 9. Ejemplo intuitivo

Con:

```txt
nums = [1, 1, 2, 1, 1]
k = 3
```

Piensa en impares acumulados:

```txt
índice:       0  1  2  3  4
nums:        [1, 1, 2, 1, 1]
impar/par:    1  1  0  1  1
curr:         1  2  2  3  4
```

Cuando estás en el índice `3`, `curr = 3`.

Quieres exactamente `3` impares.

Entonces necesitas saber si antes apareció:

```txt
curr - k = 3 - 3 = 0
```

Eso representa el prefijo vacío. Si quitas 0 impares antes, el subarray desde el inicio hasta índice 3 tiene 3 impares:

```txt
[1, 1, 2, 1]
```

Cuando estás en el índice `4`, `curr = 4`.

Quieres exactamente 3 impares.

Buscas:

```txt
curr - k = 4 - 3 = 1
```

Eso significa:

> necesito quitar una parte anterior que tuviera 1 impar acumulado.

Si quitas el primer `1`, te queda:

```txt
[1, 2, 1, 1]
```

que tiene 3 impares.

---

## 10. Lo que debes entender antes de programar

Este problema no se trata de sumar números normales.

Se trata de transformar mentalmente cada número:

```txt
si es impar → cuenta como 1
si es par   → cuenta como 0
```

Y luego contar subarrays cuya suma sea exactamente `k`.

---

## 11. Pistas sin darte la solución

Antes de escribir código, piensa estas variables:

```txt
curr = cantidad de impares acumulados hasta el índice actual
ans = cantidad de subarrays válidos encontrados
counts = cuántas veces ha aparecido cada valor de curr
```

Y en cada número pregúntate:

```txt
¿Este número es impar?
    sí → curr aumenta en 1
    no → curr se queda igual
```

Luego pregúntate:

```txt
¿Cuántas veces apareció antes curr - k?
```

Porque cada aparición representa un subarray que termina en la posición actual y tiene exactamente `k` impares.

---

## 12. Cómo reconocer este patrón

Cuando veas frases como:

```txt
number of subarrays
exactly k
count of odd numbers
```

debes pensar:

```txt
Prefix count + Hash Map
```

No estás buscando el subarray más largo.

No estás buscando una suma máxima.

Estás contando cuántos subarrays cumplen una condición exacta.

 */