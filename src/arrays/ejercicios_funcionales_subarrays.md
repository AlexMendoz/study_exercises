> # 🧩 Ejercicios para entender la generación de subarrays (Ejercicio 3)
> 
> Estos ejercicios te ayudarán a dominar cómo **generar todos los subarrays posibles** de un arreglo usando **programación funcional** (sin `for` ni `while`). Lenguaje recomendado: **TypeScript o JavaScript**.
> 
> ---
> 
> ## 📘 1. Reforzamiento de `slice()`
> 
> Crea ejemplos para entender cómo funciona `slice`:
> 
> ```ts
> const arr = [1, 2, 3, 4];
> 
> console.log(arr.slice(0, 2)); // [1, 2]
> console.log(arr.slice(1, 3)); // [2, 3]
> console.log(arr.slice(2));    // [3, 4]
> ```
> 
> **Ejercicio:** predice los resultados antes de ejecutarlos.
> 
> ---
> 
> ## 📘 2. Comprende `map()`
> 
> Crea un arreglo con `map()` y transforma sus elementos:
> 
> ```ts
> const arr = [10, 20, 30];
> 
> const result = arr.map((x, i) => [x, i]);
> console.log(result);
> ```
> 
> **Ejercicio:** ¿Qué devuelve `map()` exactamente?
> 
> ---
> 
> ## 📘 3. Usa `map()` anidado
> 
> Anida dos `map()` para simular un doble bucle:
> 
> ```ts
> const arr = [1, 2, 3];
> 
> const result = arr.map((_, i) =>
>   arr.map((_, j) => [i, j])
> );
> 
> console.log(result);
> ```
> 
> **Ejercicio:** observa cómo se genera un arreglo 2D.
> 
> ---
> 
> ## 📘 4. Aplica `flatMap()`
> 
> Cambia el código anterior por `flatMap()`:
> 
> ```ts
> const arr = [1, 2, 3];
> 
> const result = arr.flatMap((_, i) =>
>   arr.map((_, j) => [i, j])
> );
> 
> console.log(result);
> ```
> 
> **Ejercicio:** ¿qué diferencia hay entre `map()` y `flatMap()`?
> 
> ---
> 
> ## 📘 5. Combina `flatMap` y `slice`
> 
> Empieza a formar subarrays dinámicos:
> 
> ```ts
> const arr = [1, 2, 3];
> 
> const result = arr.flatMap((_, i) =>
>   arr.slice(i).map((_, j) => arr.slice(i, i + j + 1))
> );
> 
> console.log(result);
> ```
> 
> **Ejercicio:** identifica cuántas veces se ejecuta `slice()`.
> 
> ---
> 
> ## 📘 6. Visualiza paso a paso
> 
> Agrega logs para entender el flujo:
> 
> ```ts
> const arr = [1, 2, 3];
> 
> const result = arr.flatMap((_, i) => {
>   console.log("i =", i);
>   return arr.slice(i).map((_, j) => {
>     console.log("  j =", j, "→", arr.slice(i, i + j + 1));
>     return arr.slice(i, i + j + 1);
>   });
> });
> 
> console.log(result);
> ```
> 
> ---
> 
> ## 📘 7. Predice la salida
> 
> Dado este código:
> 
> ```ts
> const arr = [1, 2];
> const res = arr.flatMap((_, i) =>
>   arr.slice(i).map((_, j) => arr.slice(i, i + j + 1))
> );
> ```
> 
> **Ejercicio:** predice `res` sin ejecutar el código.
> 
> ---
> 
> ## 📘 8. Visualiza la estructura
> 
> Dibuja cómo se generan los subarrays en cada iteración.  
> Ejemplo con `[1, 2, 3]`:
> 
> ```
> i = 0 → [1], [1,2], [1,2,3]
> i = 1 → [2], [2,3]
> i = 2 → [3]
> ```
> 
> ---
> 
> ## 📘 9. Reto de comprensión
> 
> Modifica la función para **excluir subarrays de longitud 1**.
> 
> ---
> 
> ## 📘 10. Mini proyecto
> 
> Crea una función que reciba un array y devuelva un objeto con:
> 
> ```ts
> {
>   count: número total de subarrays,
>   subarrays: lista de subarrays
> }
> ```
> 
> Usa solo métodos funcionales (`map`, `flatMap`, `slice`, `reduce`).
> 