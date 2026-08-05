# 167. Two Sum II - Input Array Is Sorted

Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers index1 and index2, each incremented by one, as an integer array [index1, index2] of length 2.

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

## Análisis previo

### 1. ¿Qué me están pidiendo exactamente?

Respuesta: devolver un array con los indices de los numeros que sumen tarjet

### 2. ¿Cuál es el input?

Respuesta: el array de numero y un numero

### 3. ¿Cuál es el output?

Respuesta: un array de dos numeros que tienen el indice de los numeros que suman target

### 4. ¿Qué pasa en un ejemplo pequeño?

Respuesta: para el array [1,2,4,6] y con t = 5, serian 1 y 4, y los indices son 1 y 3, la respuesta seria [1,3]

### 5. ¿Cuál sería una solución brute force?

Respuesta: recorrer todo el array buscando los elementos que sumen el target y luego obtener lo indices

### 6. ¿Qué información necesito recordar?

Respuesta: el indice de los numeros que suman tarjet

### 7. ¿Qué recorrido o estructura necesito?

- ¿Necesito recorrer todo? si
- ¿Necesito dos posiciones? si
- ¿Necesito recordar valores anteriores? si
- ¿Necesito una ventana? no
- ¿Necesito una estructura adicional? no

Respuesta:

### 8. ¿Qué patrón parece encajar?

Respuesta: two pointers

---

## Antes de programar

### Responsabilidad de las variables

- Variable: i
- Representa: indice izquiendo
- ¿Cuándo cambia? cuando la suma de nums[i] + nums[j] < target
- Variable: j
- Representa: indice derecho
- ¿Cuándo cambia? cuando la suma de nums[i] + nums[j] > target

### Regla principal del algoritmo

Respuesta: verificar la suma de los elementos respecto a target y aumentar i o disminuir j

---

## Resultado del intento

- Fecha: 04-08-2026
- Tiempo efectivo: 40 minutos
- Estado: Resuelto independientemente
- Ayuda utilizada: Ninguna 
- Tests completados:
- Complejidad temporal: O(n)
- Complejidad espacial: O(n)

## Bloqueo principal

Respuesta: condicion del while

## Error encontrado

Respuesta: otra vez olvide poner a j como la longitud del array menos 1

## Aprendizaje principal

Respuesta: trabajar con indices y valores de los array, tambien identificar el tipo de condicion que va en el while

## Próximo reintento

- Fecha:
- Objetivo: