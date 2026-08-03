# 392-is- subsequence

Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a sequence of characters that can be obtained by deleting some (or none) of the characters from the original string, while maintaining the relative order of the remaining characters. For example, "ace" is a subsequence of "abcde" while "aec" is not.

## Análisis previo

### 1. ¿Qué me están pidiendo exactamente?

Respuesta: Determinar si 's' es una subsecuencia de 't'

### 2. ¿Cuál es el input?

Respuesta: s y t

### 3. ¿Cuál es el output?

Respuesta: treu or false

### 4. ¿Qué pasa en un ejemplo pequeño?

Respuesta: s = 'ace' y t = 'abcde' da como resultado true porque 'ace' si mantiene el orden relativo

### 5. ¿Cuál sería una solución brute force?

Respuesta: Iterar para cada string, revisando elemento por elemento y verificando que el indice del c sea menor o igual que al indice de c de t

### 6. ¿Qué información necesito recordar?

Respuesta: el indice del caracter del string s

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
- Representa: indice de string s
- ¿Cuándo cambia? cuando se encuentra la misma letra en t

### Regla principal del algoritmo

Respuesta: recorrer t para buscar coincidencian en s, si existe alguna coincidencia en t, se avanza s, si no hay se termina

---

## Resultado del intento

- Fecha: 03-08-2026 
- Tiempo efectivo: 35 minutos
- Estado: Resuelto independientemente
- Ayuda utilizada: Ninguna 
- Tests completados: todos
- Complejidad temporal: O(n)
- Complejidad espacial: O(n)

## Bloqueo principal

Respuesta: Entender el avance de los indices respecto a la condicion, entender como interpretar la respuesta para regresar el true o false

## Error encontrado

Respuesta: olvidar que despues de iterar con un while, se realiza una ultima actualizacion a las varianbles y se quedan con un valor mas

## Aprendizaje principal

Respuesta: iterar sobre el string recordando que el orden se mantiene, que puedo usar solo una variable para avanzar siempre y otro que avanza bajo cierto condicion

## Próximo reintento

- Fecha:
- Objetivo: