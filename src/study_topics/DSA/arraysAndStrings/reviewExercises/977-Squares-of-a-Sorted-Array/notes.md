# 977 Squares of a sorted Array

Companies
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]

## Análisis previo

### 1. ¿Qué me están pidiendo exactamente?

Respuesta: que regrese un array de numeros en orden no decreciente

### 2. ¿Cuál es el input?

Respuesta: array de numeros en orden no decreciente

### 3. ¿Cuál es el output?

Respuesta: un array de numeros en orden no decreciente

### 4. ¿Qué pasa en un ejemplo pequeño?

Respuesta: se obtiene el cuadrado de los numeros y despues se ordena

### 5. ¿Cuál sería una solución brute force?

Respuesta: sacar el cuadrado de cada numero y luego ordenarlo 

### 6. ¿Qué información necesito recordar?

Respuesta: si el numero es positivo o no, ya que el cuadrado de un numero negativo siempre es positivo y al ordenar el array este numero puede ser mayor al un numero positivo original

### 7. ¿Qué recorrido o estructura necesito?

- ¿Necesito recorrer todo? no
- ¿Necesito dos posiciones? si
- ¿Necesito recordar valores anteriores? no
- ¿Necesito una ventana? no
- ¿Necesito una estructura adicional? no

Respuesta:

### 8. ¿Qué patrón parece encajar?

Respuesta: two pointers

---

## Antes de programar

### Responsabilidad de las variables

- Variable: i
- Representa: indice izquierdo
- ¿Cuándo cambia? cuando es menor que el valor de j
- Variable: j
- Representa: indice derecho
- ¿Cuándo cambia? cuando es menor que el valor de i
- Variable: square
- Representa: array de numeros
- ¿Cuándo cambia? cuando se comparan los valores de i y j

### Regla principal del algoritmo

Respuesta: el valor de i o de j se almacena en un nuevo array cumpliendo la regla del orden no decreciente

---

## Resultado del intento

- Fecha: 04-08-2026
- Tiempo efectivo: 40 minutos
- Estado: Resuelto con ayuda
- Ayuda utilizada: Pista 
- Tests completados:
- Complejidad temporal: O(n)
- Complejidad espacial: O(n)

## Bloqueo principal

Respuesta: por algun motivo (quiza no estaba concentrado del todo) en vez de poner nums[i] puse solo i y j

## Error encontrado

Respuesta: no usar el valor del array y usar el indice, j lo tenia que disminuir y lo aumente, no concidere el caso de i == j

## Aprendizaje principal

Respuesta: estar enfocado en el objetivo que me piden y como escribo las variables

## Próximo reintento

- Fecha:
- Objetivo: