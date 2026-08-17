# 1004. Max Consecutive Ones III

Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

Example 1:

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
Example 2:

Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
 
Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.
0 <= k <= nums.length

## Análisis previo

### 1. ¿Qué me están pidiendo exactamente?

Respuesta: devolver el numero mas grande de unos consecutivos que pueda tener el arrays intercambiando k cantidad de 1

### 2. ¿Cuál es el input?

Respuesta: array de unos y ceros y entero k

### 3. ¿Cuál es el output?

Respuesta: el numero del mayor de unos consecutivos

### 4. ¿Qué pasa en un ejemplo pequeño?

Respuesta: para [1,0,1,1,1,0,0,1] y k = 1 la respuesta seria cinco, ya que se cambia el cero de indice 1 y se forma un subarray de longitud 5

### 5. ¿Cuál sería una solución brute force?

Respuesta: usar for bucles for, uno para i o otro para j, e ir probando todas las longitudes

### 6. ¿Qué información necesito recordar?

Respuesta: la cantidad de unos que puedo cambiar 

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
- Representa: limite izquierod de la ventana
- ¿Cuándo cambia? cuando ya no tenga cambios y cuando j sea distinto de 1
- Variable: j
- Representa: limite derecho de la ventana
- ¿Cuándo cambia? todo el tiempo
- Variable: count 
- Representa: longitud de mi subarray de unos
- ¿Cuándo cambia? cuando se mueve la ventana
- Variable: ans
- Representa: la mayor longitud de array de unos
- ¿Cuándo cambia? cuando se detencta una mayor longitud de arrays
- Variable: change
- Representa: el conteo de ceros
- ¿Cuándo cambia? cada que se encuntra un cero en la ventana

### Regla principal del algoritmo

Respuesta: contar los cambios para avanzar i y realizar la asignacion de variables en orden

---

## Resultado del intento

- Fecha: 17-08-2026
- Tiempo efectivo: 40 min
- Estado: Resuelto con ayuda
- Ayuda utilizada: Pista
- Tests completados:
- Complejidad temporal: O(n)
- Complejidad espacial: O(n)

## Bloqueo principal

Respuesta: determinar como se debe avanzar i

## Error encontrado

Respuesta: 

## Aprendizaje principal

Respuesta: identificar en que condidicon se debe aumentar i 

## Próximo reintento

- Fecha:
- Objetivo: