# 1493-longest-subarray-of-1s-after-deleting-one-element

Given a binary array nums, you should delete one element from it.

Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

Example 1:

Input: nums = [1,1,0,1]
Output: 3
Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.
Example 2:

Input: nums = [0,1,1,1,0,1,1,0,1]
Output: 5
Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].
Example 3:

Input: nums = [1,1,1]
Output: 2
Explanation: You must delete one element.

## Análisis previo

### 1. ¿Qué me están pidiendo exactamente?

Respuesta: la longitud del substring de unos mas grande despues de eliminar un elemento

### 2. ¿Cuál es el input?

Respuesta: array de numeros

### 3. ¿Cuál es el output?

Respuesta: numero

### 4. ¿Qué pasa en un ejemplo pequeño?

Respuesta: [1,1,1] -> 2, se quita un 1 y la logitud mas grande es 2 [1,0,1] -> 2, se quiera el elemto de indice 1 

### 5. ¿Cuál sería una solución brute force?

Respuesta: probar posicicon por posicion hasta encontrar una longitud valida

### 6. ¿Qué información necesito recordar?

Respuesta: ninguna

### 7. ¿Qué recorrido o estructura necesito?

- ¿Necesito recorrer todo? si
- ¿Necesito dos posiciones? no
- ¿Necesito recordar valores anteriores? no
- ¿Necesito una ventana? si
- ¿Necesito una estructura adicional? no

Respuesta:

### 8. ¿Qué patrón parece encajar?

Respuesta: sliding window

---

## Antes de programar

### Responsabilidad de las variables

- Variable: i
- Representa: limite izquierdo
- ¿Cuándo cambia? cuando la longitud nueva es mayor que la anterior
- Variable: j
- Representa: limite derecho
- ¿Cuándo cambia? siempre que se pueda avanzar
- Variable: ans
- Representa: respuesta
- ¿Cuándo cambia? cuando se encuenta una nueva longuitud mas grande
- Variable: other
- Representa: cualquier otro numero distinto de uno
- ¿Cuándo cambia? cuanod se encuentra otro numero distinto de uno en el array


### Regla principal del algoritmo

Respuesta: identificar cuando avanzar i

---

## Resultado del intento

- Fecha: 18-08-2026
- Tiempo efectivo: 40 min
- Estado: Resuelto independientemente
- Ayuda utilizada: Ninguna
- Tests completados:
- Complejidad temporal: O(n)
- Complejidad espacial: O(n)

## Bloqueo principal

Respuesta: Saber cuando avanzaba i, saber cual era mi condicion para determinar un cambio, es decir, que habia un numero distinto de uno

## Error encontrado

Respuesta: en el bucle while, se tiene que verificar primero si el elemento actual de i es distinto de 1, y. yo aumentaba primero i, lo que hacia que me saltara un elemento

## Aprendizaje principal

Respuesta: identificar el orden para aumentar la variable e identificar como hacer la condicion para avanzar o hacer el bucle while

## Próximo reintento

- Fecha:
- Objetivo: