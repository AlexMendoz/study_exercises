# 🧠 Ejercicios de Programación Funcional — Subarray Máximo

Este documento contiene **10 ejercicios progresivos** para aprender a resolver el **problema del subarray máximo** usando **programación funcional** en JavaScript o TypeScript.

---

## 🧩 Ejercicio 1: Suma total
Dado un array de números, devuelve la suma de todos los elementos usando `reduce`.

**Ejemplo:**
```ts
// Input: [1, 2, 3, 4]
// Output: 10
```

---

## 🧩 Ejercicio 2: Suma máxima de un subarray de longitud fija
Dado un array y un número `k`, encuentra la suma máxima de cualquier subarray de tamaño `k` usando `slice` y `reduce`.

**Ejemplo:**
```ts
// Input: [2, 1, 5, 1, 3, 2], k = 3
// Output: 9 (porque [5,1,3] = 9)
```

---

## 🧩 Ejercicio 3: Todos los subarrays posibles
Genera todos los subarrays posibles de un array usando métodos funcionales (sin `for` o `while`).

**Pista:** combina `flatMap` con `slice`.

**Ejemplo:**
```ts
// Input: [1,2,3]
// Output: [[1], [1,2], [1,2,3], [2], [2,3], [3]]


```

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

---

## 🧩 Ejercicio 4: Suma de cada subarray
Usando el resultado del ejercicio anterior, obtén un array con las sumas de cada subarray.

**Ejemplo:**
```ts
// Input: [1,2,3]
// Output: [1,3,6,2,5,3]
```

---

## 🧩 Ejercicio 5: Suma máxima de subarrays
A partir del ejercicio anterior, obtén la suma máxima de todos los subarrays.

**Ejemplo:**
```ts
// Input: [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
```

---

## 🧩 Ejercicio 6: Kadane funcional
Implementa el algoritmo de Kadane **sin usar bucles**, solo con `reduce`.

**Ejemplo:**
```ts
// Input: [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
```

**Pista:**
```ts
v.reduce(([maxEndingHere, maxSoFar], x) => {
  const next = Math.max(0, maxEndingHere + x);
  return [next, Math.max(maxSoFar, next)];
}, [0, 0])[1]
```

---

## 🧩 Ejercicio 7: Devolver el subarray máximo
Modifica el Kadane funcional para que no solo devuelva la suma, sino también el subarray correspondiente.

**Ejemplo:**
```ts
// Output: { sum: 6, subarray: [4, -1, 2, 1] }
```

---

## 🧩 Ejercicio 8: Subarray máximo con condición
Devuelve el subarray con suma máxima **solo si contiene al menos un número positivo**.

**Ejemplo:**
```ts
// Input: [-1, -2, -3, 4, -1]
// Output: [4, -1]
```

---

## 🧩 Ejercicio 9: Subarray máximo de valores absolutos
Transforma cada número en su valor absoluto y luego aplica Kadane.

**Ejemplo:**
```ts
// Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
// Output: 22 (porque |v| = [2,1,3,4,1,2,1,5,4])
```

---

## 🧩 Ejercicio 10: Composición funcional
Usa funciones puras pequeñas (`sum`, `maxSumSubarray`, `toSubarrays`) y compónlas para obtener la suma máxima.  
No uses bucles ni mutaciones.

**Ejemplo:**
```ts
const sum = (a: number[]) => a.reduce((x, y) => x + y, 0);
const subarrays = (v: number[]) => v.flatMap((_, i) => v.slice(i).map((_, j) => v.slice(i, i + j + 1)));
const maxSum = (v: number[]) => Math.max(...subarrays(v).map(sum));
```

---

🎯 **Consejo:**  
Empieza resolviendo los primeros tres ejercicios sin usar bucles, y luego intenta reescribir Kadane en estilo funcional.  
Cuando lo consigas, habrás dado un salto enorme en pensamiento funcional.
