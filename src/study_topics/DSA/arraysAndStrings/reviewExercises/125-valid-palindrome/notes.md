# 125. Valid Palindrome

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.

## Análisis previo

### 1. ¿Qué me están pidiendo exactamente?

Respuesta: Determinar si una palabra es palindromo o no, primero se normaliza y luego se evalua

### 2. ¿Cuál es el input?

Respuesta: string

### 3. ¿Cuál es el output?

Respuesta: boleano para determinar si es palindromo o no

### 4. ¿Qué pasa en un ejemplo pequeño?

Respuesta: es obtiene el string, se normaliza, y se analiza para determinar si es o no palindromo. "hola" -> "aloh", no es palindromo

### 5. ¿Cuál sería una solución brute force?

Respuesta: crear una nueva variable con las letras al rever y verificar letra de por letra de cada string

### 6. ¿Qué información necesito recordar?

Respuesta: ninguna, solo verifica la letra actual

### 7. ¿Qué recorrido o estructura necesito?

- ¿Necesito recorrer todo? Si
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
- Representa: indice derecho
- ¿Cuándo cambia? cuendo avanza j, simpre
- Variable: j
- Representa: indice derecho
- ¿Cuándo cambia? cuando avanza i, siembre
- Variable: ans
- Representa: si el string es palindromo
- ¿Cuándo cambia? cuando hay una diferencia entre el valor i y j

### Regla principal del algoritmo

Respuesta: Identificar cuando una letra es distinta de otra, si eso no se cumple no es palindromo, si se cumple se continua con el analisis

---

## Resultado del intento

- Fecha: 05-08-2026 12:41
- Tiempo efectivo: 21 minutos
- Estado: Resuelto independientemente
- Ayuda utilizada: Ninguna (se consulto el regex para conservar solo letras y numeros)
- Tests completados:3
- Complejidad temporal: O(n)
- Complejidad espacial: O(n)

## Bloqueo principal

Respuesta: que pasaba cuando i y j eran iguales? se terminaba el ciclo

## Error encontrado

Respuesta:al hacer la normalizacion, la variable j se quedo con la longitud original del string y j tenia que tener la longitud del nuevo string

## Aprendizaje principal

Respuesta: identificar que el indice derecho tenia que tener la longitud actualizada

## Próximo reintento

- Fecha:
- Objetivo: