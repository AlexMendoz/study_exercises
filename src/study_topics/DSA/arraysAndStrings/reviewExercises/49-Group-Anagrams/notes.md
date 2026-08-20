# 49. Group Anagrams

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
Example 2:

Input: strs = [""]

Output: [[""]]

Example 3:

Input: strs = ["a"]

Output: [["a"]]

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.

## Análisis previo

### 1. ¿Qué me están pidiendo exactamente?

Respuesta: Crear una array que contenga arrays, y estos contengan los anagramas por grupo

### 2. ¿Cuál es el input?

Respuesta: array de string

### 3. ¿Cuál es el output?

Respuesta: un array de arrays de string

### 4. ¿Qué pasa en un ejemplo pequeño?

Respuesta: para ["tan","ate"] se crearian estos grupos ["tan"] y ["ate"] y la respuesta seria [["tan"],["ate"]]

### 5. ¿Cuál sería una solución brute force?

Respuesta: con un bucle for, tomar el primer elemento y compararlo con todos lo demas, luego ir agrupandolo y repetir el mismo proceso para los demas elementos

### 6. ¿Qué información necesito recordar?

Respuesta: las letras que contiene cada string

### 7. ¿Qué recorrido o estructura necesito?

- ¿Necesito recorrer todo? si
- ¿Necesito dos posiciones? si
- ¿Necesito recordar valores anteriores? si, las letras
- ¿Necesito una ventana? no
- ¿Necesito una estructura adicional? si, un set

Respuesta:

### 8. ¿Qué patrón parece encajar?

Respuesta: actualemente no se que patron puede encajar, two pointers que avanzan con independencia

---

## Antes de programar

### Responsabilidad de las variables

- Variable: sets
- Representa: conjutno de letras de cada string
- ¿Cuándo cambia? cuando se detecta un nuevo conjunto de letras
- Variable: i
- Representa: indice izquierdo
- ¿Cuándo cambia? siempre
- Variable: j
- Representa: indice derecho
- ¿Cuándo cambia? siemre

### Regla principal del algoritmo

Respuesta: consaultar el valor actual con el set precargado

---

## Resultado del intento

- Fecha:
- Tiempo efectivo: 17:25 -17:50
- Estado: No terminado / Resuelto con ayuda / Resuelto independientemente
- Ayuda utilizada: Ninguna / Pista / Explicación / Solución
- Tests completados:
- Complejidad temporal:
- Complejidad espacial:

## Bloqueo principal

Respuesta:

## Error encontrado

Respuesta: la solucion paso pero tiene TimeOut en inputs grandes

## Aprendizaje principal

Respuesta:

## Próximo reintento

- Fecha:
- Objetivo: