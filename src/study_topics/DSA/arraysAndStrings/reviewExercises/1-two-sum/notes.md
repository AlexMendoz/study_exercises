# 1 two sum

You are given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

## 1. Análisis previo

### ¿Qué me están pidiendo?
Respuesta: encontrar la suma de dos numeros en el array que den como resultado tarjet

### Input / Output
- Input: array number, target number
- Output: array number con el indice de los numeros

### Ejemplo pequeño
Respuesta: [2,7,11,15] los numeros son 2 y 7, que tiene indice 0 y 1

### ¿Qué información necesito conservar?
Respuesta: los indices de los numeros que cumplen la condicion

### Patrón o estructura que parece encajar
Respuesta: two pointers pero el objetiv es usar Map

### Brute force (opcional)
Respuesta:

---

## 2. Antes de programar

### Regla principal del algoritmo
Respuesta: 

### Variables / estructuras importantes
- `variable`: numbersMap
  - Representa: mapeo de los numeros por indice
  - Cambia cuando:

---

## 3. Resultado

- Fecha: 28 de agosto 2026
- Tiempo efectivo: 37 minutos
- Estado: `Resuelto con ayuda`
- Ayuda utilizada: `Explicación`
- Complejidad temporal: O(n)
- Complejidad espacial: O(n)

---

## 4. Revisión

### Bloqueo principal
Respuesta: identificar la manera en que se tenia que usar el Map

### Error encontrado
Respuesta: usar get en lugar de has, ya que estaba buscando un indice con un valor de nums y eso no era posible

### Aprendizaje principal
Respuesta: mejorar en identificar como usar los Map, hay que seguir mejorando

### Qué haría diferente la próxima vez
Respuesta: tener mas presente la verdadera utlidad de los mapas. verificar las formulas que pueda llegar a usar, ya que estas tiene mucho informacion implicita
