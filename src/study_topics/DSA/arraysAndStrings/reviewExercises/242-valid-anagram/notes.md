# 242 valid anagrams
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

Example 1:

Input: s = "anagram", t = "nagaram"

Output: true

Example 2:

Input: s = "rat", t = "car"

Output: false

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

## Análisis previo

### 1. ¿Qué me están pidiendo exactamente?

Respuesta: determinar si dos palabras son anagramaas o no

### 2. ¿Cuál es el input?

Respuesta: dos string

### 3. ¿Cuál es el output?

Respuesta: boleano true si es anagrama, false en otro caso

### 4. ¿Qué pasa en un ejemplo pequeño?

Respuesta: para "rapido" y "parido" es true ya que tienen las mismas letras 

### 5. ¿Cuál sería una solución brute force?

Respuesta: revisar letra por letra en cada string

### 6. ¿Qué información necesito recordar?

Respuesta: las letras que contiene cada palabra

### 7. ¿Qué recorrido o estructura necesito?

- ¿Necesito recorrer todo? no
- ¿Necesito dos posiciones? no
- ¿Necesito recordar valores anteriores? si, las letras de cada palabra
- ¿Necesito una ventana? np
- ¿Necesito una estructura adicional? si, un set

Respuesta:

### 8. ¿Qué patrón parece encajar?

Respuesta: Hashing

---

## Antes de programar

### Responsabilidad de las variables

- Variable: canonic
- Representa: letras unicas de cada palabra
- ¿Cuándo cambia? cada que se ingresa una nueva palabra

### Regla principal del algoritmo

Respuesta: identificar las pabras con un set

---

## Resultado del intento

- Fecha: 20 agosto
- Tiempo efectivo: 9 min
- Estado: Resuelto independientemente
- Ayuda utilizada: Ninguna
- Tests completados:
- Complejidad temporal: O(2) = O(1)
- Complejidad espacial: O(n) por cada letra en los string

## Bloqueo principal

Respuesta: ninguno

## Error encontrado

Respuesta: ninguno

## Aprendizaje principal

Respuesta: utlizar metodos como Set y metodos de string como split, join, sort

## Próximo reintento

- Fecha:
- Objetivo: