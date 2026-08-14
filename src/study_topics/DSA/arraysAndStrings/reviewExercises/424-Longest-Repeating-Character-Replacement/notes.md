# 424. Longest Repeating Character Replacement

You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
There may exists other ways to achieve this answer too.

Constraints:

1 <= s.length <= 105
s consists of only uppercase English letters.
0 <= k <= s.length

## Análisis previo

### 1. ¿Qué me están pidiendo exactamente?

Respuesta: Encontrar el substring mas largo al elegir una letra y cambiarla, este cambio de letra esta determinado por k, si k = 3 y selecciono una letra "A", puedo realizar el cambio tres veces

### 2. ¿Cuál es el input?

Respuesta: string de letras del alfabeto ingles

### 3. ¿Cuál es el output?

Respuesta: longitud del sub string mas largo

### 4. ¿Qué pasa en un ejemplo pequeño?

Respuesta: para s = "ABABAB" y k = 2, si selecciono A y realizo el cambio, s = "AAAAB", la respuesta seria 4, cambio la B con indice 1 y B con indice 3

### 5. ¿Cuál sería una solución brute force?

Respuesta: tener un indice que vaya letra por letra, realizando los k cambios, hasta encontrar el sub string con mayor longitud

### 6. ¿Qué información necesito recordar?

Respuesta: las letras que tiene el string, cuantos cambios ya realice

### 7. ¿Qué recorrido o estructura necesito?

- ¿Necesito recorrer todo? si
- ¿Necesito dos posiciones? no
- ¿Necesito recordar valores anteriores? si
- ¿Necesito una ventana? si
- ¿Necesito una estructura adicional? si, Set para almaceanar la letras

Respuesta:

### 8. ¿Qué patrón parece encajar?

Respuesta: sliding window

---

## Antes de programar

### Responsabilidad de las variables

- Variable: i
- Representa: limite izquiero de mi ventana
- ¿Cuándo cambia? cuando la exista una nuevo longitud mayor
- Variable: j
- Representa: Limite derecho de mi ventana
- ¿Cuándo cambia? cuando la letra s[j] sea igual que s[j-1] o se la misma letra que eligi
- Variable: letters 
- Representa: letras que existen en el string s
- ¿Cuándo cambia? no cambia, solo se ejecuta una vez para almacenar las letras unicas de s
- Variable: len
- Representa: logitud max grande de mi ventana
- ¿Cuándo cambia?

### Regla principal del algoritmo

Respuesta: contar los cambios y detectar cuando se tiene que avanzar i

---

## Resultado del intento

- Fecha: 12-08-2026 20 min aprox + 40 min + 20min +20min
- Tiempo efectivo:
- Estado: Resuelto independientemente
- Ayuda utilizada: Explicación
- Tests completados:
- Complejidad temporal: O(n2)
- Complejidad espacial: O(n)

## Bloqueo principal

Respuesta: Identificar cuando tiene que avanzar i, como detectar los "cambios" para saber cuando tenia cambios disponibles 

## Error encontrado

Respuesta: mala implementacion en las condicionces y en como aumentaba los valores, realizar calculos en el orden incorrecto

## Aprendizaje principal

Respuesta: Pensar en soluciones simples, identifica correctamente como hacer los incrementos de mi limite izquierdo, colocar el codigo en el orden correcto, ya que esto puede producir salidas erroneas

## Próximo reintento

- Fecha:
- Objetivo: