# 205. Isomorphic Strings

Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

Example 1:

Input: s = "egg", t = "add"

Output: true

Explanation:

The strings s and t can be made identical by:

Mapping 'e' to 'a'.
Mapping 'g' to 'd'.
Example 2:

Input: s = "f11", t = "b23"

Output: false

Explanation:

The strings s and t can not be made identical as '1' needs to be mapped to both '2' and '3'.

Example 3:

Input: s = "paper", t = "title"

Output: true

Constraints:

1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.

## Análisis previo

### 1. ¿Qué me están pidiendo exactamente?

Respuesta: determinar si dos pañabras sonisomorficas, es decir, que de la palabra "s" pueda formar la palabra "t"

### 2. ¿Cuál es el input?

Respuesta: string s y string t

### 3. ¿Cuál es el output?

Respuesta: true or false

### 4. ¿Qué pasa en un ejemplo pequeño?

Respuesta: para "egg" y "add", e ->, g -> d, al resconstruir add, si se puede hacer

### 5. ¿Cuál sería una solución brute force?

Respuesta: guardar cada valor mientras recorro todo el string para determinar si hay otro caracter con ese valor y llevar un contador.

### 6. ¿Qué información necesito recordar?

Respuesta: los caracteres de cada palabra

### 7. ¿Qué recorrido o estructura necesito?

- ¿Necesito recorrer todo? si
- ¿Necesito dos posiciones? no
- ¿Necesito recordar valores anteriores? si
- ¿Necesito una ventana? no
- ¿Necesito una estructura adicional? un Map o Set

Respuesta:

### 8. ¿Qué patrón parece encajar?

Respuesta: Hashing

---

## Antes de programar

### Responsabilidad de las variables

- Variable: ans
- Representa: respuesta true or false
- ¿Cuándo cambia? si es isomorfica
- Variable: charMap
- Representa: mapeo de las letras de s
- ¿Cuándo cambia? cuando se ingresa un string s
- Variable: 
- Representa:
- ¿Cuándo cambia?

### Regla principal del algoritmo

Respuesta:

---

## Resultado del intento

- Fecha: 24 de agosto; 29-08-2026
- Tiempo efectivo: 50 minutos; 46 minutos
- Estado: Resuelto independientemente, independiente
- Ayuda utilizada: Explicación, ninguna
- Tests completados:
- Complejidad temporal: O(n)
- Complejidad espacial: O(n log m)

## Bloqueo principal

Respuesta: identificar correctamente los casos para determinar el mapeo de cada string; considerar las relaciones 1 a 1, si una llave ya existia, se obtenia el valor y se comparaba con el valor nuevo, si eran iguales pasa, sino, termina

## Error encontrado

Respuesta: Que los valores de s apuntaban al mismo valor de t y eso no estaba permitido

## Aprendizaje principal

Respuesta: identificar las fucnionalidades por defecto de Map, mejorar la logico al realizar este tipo de ejercicios; usar un Set de apoyo

## Próximo reintento

- Fecha:
- Objetivo: