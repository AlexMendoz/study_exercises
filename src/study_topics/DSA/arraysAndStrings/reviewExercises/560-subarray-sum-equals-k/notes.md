# 560. subarray sum equals 

Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.

Example 1:

Input: nums = [1,1,1], k = 2
Output: 2
Example 2:

Input: nums = [1,2,3], k = 3
Output: 2

## 1. Análisis previo

### ¿Qué me están pidiendo?
Respuesta: Encontrar el numero de subarrays que la suma sea igual a k

### Input / Output
- Input: arreglo de enteros y un numero k
- Output: numero de sub array que sumen k

### Ejemplo pequeño
Respuesta: para [1,1,1] y k = 2, la respuesta seria 2, por los 1s con indice 0 y 1, y los 1s de indice 1 y 2

### ¿Qué información necesito conservar?
Respuesta: la prefix sum de los elementos

### Patrón o estructura que parece encajar
Respuesta: slidind windows

### Brute force (opcional)
Respuesta:

---

## 2. Antes de programar

### Regla principal del algoritmo
Respuesta:

### Variables / estructuras importantes
- `variable`:
  - Representa:
  - Cambia cuando:

---

## 3. Resultado

- Fecha: 01 09 2026
- Tiempo efectivo: 90 minutos
- Estado: `Resuelto con ayuda`
- Ayuda utilizada: `Explicación`
- Complejidad temporal:
- Complejidad espacial:

---

## 4. Revisión

### Bloqueo principal
Respuesta: se necesito entender mejor como utlizar prefix sum y map para encontrar la solucion, no es tan intuitivo que se deben de contar las frecuencias de aparicion de un numero,

### Error encontrado
Respuesta: obtener un valor que no era en el map y luego aumentar ese valor

### Aprendizaje principal
Respuesta:tener un mejor entendimiento de como se puedne aplicar los conceptos de prefix sum y map para resolver problemas

### Qué haría diferente la próxima vez
Respuesta: anotar mis ideas ya que la primera vez que intente resolver este problema si pende que seria mejor con un prefix sum pero no lograba comprender por que necesitaba un map

## Notas extras

Este ejercicio no fue comprendido bien desde el inicio, esto por cansancio mental o flojera, sea cual sea el caso, hoy lo vamos a resolver bien.

El día de ayer se inteneto este ejercicio sin exito, al parecer, si lo quiero hacer solo con sliding window, se debe conciderar un caso especial que es el cero, numeros positivos y negativos.

El problema siguiere que se tiene que usar algun map o set y yo entiendo que se tiene que usar el prefix sum, y que es prefix sum? prefix es un array que guarda todas la suma de cada elemento del array, por ejemplo:
[1,1,1] = [1,2,3]

ahora, par aun ejemplo de como va a funcionar

