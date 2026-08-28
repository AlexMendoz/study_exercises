# 290-word-pattern

Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s. Specifically:

Each letter in pattern maps to exactly one unique word in s.
Each unique word in s maps to exactly one letter in pattern.
No two letters map to the same word, and no two words map to the same letter.
 

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"

Output: true

Explanation:

The bijection can be established as:

'a' maps to "dog".
'b' maps to "cat".
Example 2:

Input: pattern = "abba", s = "dog cat cat fish"

Output: false

Example 3:

Input: pattern = "aaaa", s = "dog cat cat dog"

Output: false

Constraints:

1 <= pattern.length <= 300
pattern contains only lower-case English letters.
1 <= s.length <= 3000
s contains only lowercase English letters and spaces ' '.
s does not contain any leading or trailing spaces.
All the words in s are separated by a single space.
## Análisis previo

### 1. ¿Qué me están pidiendo exactamente?

Respuesta: devolver true o false si para cada letra de patter le corresponde una palabra de s

### 2. ¿Cuál es el input?

Respuesta: string patter y string s

### 3. ¿Cuál es el output?

Respuesta: boleano

### 4. ¿Qué pasa en un ejemplo pequeño?

Respuesta: Para patter = "abba" y s = "dog cat cat dog" es true, por que a -> dog y b -> cat

### 5. ¿Cuál sería una solución brute force?

Respuesta:

### 6. ¿Qué información necesito recordar?

Respuesta: las letras de pattern

### 7. ¿Qué recorrido o estructura necesito?

- ¿Necesito recorrer todo? si
- ¿Necesito dos posiciones? no
- ¿Necesito recordar valores anteriores? si, las letras y palabras
- ¿Necesito una ventana? no
- ¿Necesito una estructura adicional? si, un map

Respuesta:

### 8. ¿Qué patrón parece encajar?

Respuesta: hashing

---

## Antes de programar

### Responsabilidad de las variables

- Variable: words
- Representa: split de las palabras de s
- ¿Cuándo cambia? cuando se hace el slip de s
- Variable: OnebyOne
- Representa: mapeo de las letras de patter a s
- ¿Cuándo cambia? cada que se agrega una nueva clave al map
- Variable: unique
- Representa: Set de palabras de s, debe tener la misma longitud de las llaves del map
- ¿Cuándo cambia? cuando se hace el split de s

### Regla principal del algoritmo

Respuesta:

---

## Resultado del intento

- Fecha: 27 de agosto
- Tiempo efectivo: 1hr 20 min
- Estado: No terminado / Resuelto con ayuda
- Ayuda utilizada: Explicación
- Tests completados:
- Complejidad temporal:O(n)
- Complejidad espacial: (n+m)

## Bloqueo principal

Respuesta: entender el problema completamente, identificar los casos implicitos en las instrucciones, por ejemplo, que si es una relacion 1 a 1, tienen que tener la misma longitud patter y s.split

## Error encontrado

Respuesta: en la logica no contemplaba que la relacion tenia que se uno a uno y realizaba mapeos erroneos

## Aprendizaje principal

Respuesta: trabajo con maps y set, lo tengo que mejorar

## Próximo reintento

- Fecha:
- Objetivo:
