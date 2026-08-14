# 3. Longest Substring Without Repeating Characters

Given a string s, find the length of the longest substring without duplicate characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

## Análisis previo

### 1. ¿Qué me están pidiendo exactamente?

Respuesta: obtener la longitud del substring mas largo con caracteres unicos

### 2. ¿Cuál es el input?

Respuesta: un string

### 3. ¿Cuál es el output?

Respuesta: longitud de un substring

### 4. ¿Qué pasa en un ejemplo pequeño?

Respuesta: "abcabcbb" la respuesta seria "abc"  con longitud 3

### 5. ¿Cuál sería una solución brute force?

Respuesta: recorrer todo el string dos veces para ir comparando elemento por elemento y luego guardarlos que sean distintos en otra variable

### 6. ¿Qué información necesito recordar?

Respuesta: las letras de mi substring

### 7. ¿Qué recorrido o estructura necesito?

- ¿Necesito recorrer todo? si
- ¿Necesito dos posiciones? no
- ¿Necesito recordar valores anteriores? si
- ¿Necesito una ventana? si
- ¿Necesito una estructura adicional? no

Respuesta:

### 8. ¿Qué patrón parece encajar?

Respuesta: sliding window

---

## Antes de programar

### Responsabilidad de las variables

- Variable: i
- Representa: indice izquierdo de la ventana
- ¿Cuándo cambia? cuando j se encuentra con una letra repetida en la pocision de i
- Variable: j 
- Representa: indice derecho de la ventana
- ¿Cuándo cambia? con cada iteracion menos cuando i se mueve
- Variable: 
- Representa:
- ¿Cuándo cambia?

### Regla principal del algoritmo

Respuesta: identificar las letras repetidas en el substring

---

## Resultado del intento

- Fecha: 10-08-2026
- Tiempo efectivo: 1hr 40 minutos
- Estado: Resuelto independientemente
- Ayuda utilizada: Ninguna
- Tests completados:
- Complejidad temporal: O(n)
- Complejidad espacial: O(n)

## Bloqueo principal

Respuesta: identificar bajo que caso se tenia que detener j y avanzar i

## Error encontrado

Respuesta: no saltar una iteracion cuando i tenia que avanzar

## Aprendizaje principal

Respuesta:identificar los casos donde tiene que avanzar i y j

## Próximo reintento

- Fecha:
- Objetivo: