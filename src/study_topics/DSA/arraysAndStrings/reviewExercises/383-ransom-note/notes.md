# 383 ransom note

Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
 

Constraints:

1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.

## Análisis previo

### 1. ¿Qué me están pidiendo exactamente?

Respuesta: validar que las letras que contiene magazine puedan contruir ransomNote, donde cada letra sola se pueda usar una vez

### 2. ¿Cuál es el input?

Respuesta: dos strings

### 3. ¿Cuál es el output?

Respuesta: true o false

### 4. ¿Qué pasa en un ejemplo pequeño?

Respuesta: 

### 5. ¿Cuál sería una solución brute force?

Respuesta: ransomNote = "aa", magazine = "aab", como magazine tiene "aab" si puede formar "aa"

### 6. ¿Qué información necesito recordar?

Respuesta: las letras y la cantididad de veces que aparece cada letra

### 7. ¿Qué recorrido o estructura necesito?

- ¿Necesito recorrer todo? si
- ¿Necesito dos posiciones? no
- ¿Necesito recordar valores anteriores? si, las letras y su recurrencia
- ¿Necesito una ventana? no
- ¿Necesito una estructura adicional? si, Map

Respuesta:

### 8. ¿Qué patrón parece encajar?

Respuesta: uso de HashMap

---

## Antes de programar

### Responsabilidad de las variables

- Variable: countChars
- Representa: mapeo de la aparicion de letras
- ¿Cuándo cambia? cuando se encuentra una nueva letra o cuando se aumenta el contador de cada letra

### Regla principal del algoritmo

Respuesta: verificar que las letras de magazine sean sufucientes para formar ransomNote

---

## Resultado del intento

- Fecha:
- Tiempo efectivo: 16 minutos
- Estado: No terminado / Resuelto con ayuda / Resuelto independientemente
- Ayuda utilizada: Ninguna / Pista / Explicación / Solución
- Tests completados:
- Complejidad temporal: O(n+m)
- Complejidad espacial: O(n+m)

## Bloqueo principal

Respuesta: determinar como se iban a aumentar o disminuir los valores de cada llave en el map

## Error encontrado

Respuesta: ninguno, salvo que faltaba el caso de cuando una letra de ransomNote no la tuviera magazine

## Aprendizaje principal

Respuesta: como aumentar o disminuir los valores de un map

## Próximo reintento

- Fecha:
- Objetivo: