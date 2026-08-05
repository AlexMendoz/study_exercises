# 344. Reverse String

Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
## Análisis previo

### 1. ¿Qué me están pidiendo exactamente?

Respuesta: invertir una cadena pasar de "hola" a "aloh"

### 2. ¿Cuál es el input?

Respuesta: un string

### 3. ¿Cuál es el output?

Respuesta: el string invertido

### 4. ¿Qué pasa en un ejemplo pequeño?

Respuesta: se toma elemento por elemento y se intercambian las pocisiones

### 5. ¿Cuál sería una solución brute force?

Respuesta: recorrer todo el array y cambiar letra por letra en un nuevo string

### 6. ¿Qué información necesito recordar?

Respuesta: ninguna

### 7. ¿Qué recorrido o estructura necesito?

- ¿Necesito recorrer todo? si
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
- Representa: indice izquierdo
- ¿Cuándo cambia? cuando j tenga un elemento
- Variable: j
- Representa: indice derecho
- ¿Cuándo cambia? cuando i tenga un elemento
- Variable: newS
- Representa: string invertido
- ¿Cuándo cambia? cuadno se agrega un elemento string

### Regla principal del algoritmo

Respuesta:

---

## Resultado del intento

- Fecha: 05-08-2026 16:05
- Tiempo efectivo:20 minutos
- Estado:Resuelto independientemente
- Ayuda utilizada: Ninguna
- Tests completados:
- Complejidad temporal:
- Complejidad espacial:

## Bloqueo principal

Respuesta: distraccion en mi area de trabajo, no leer bien las instruciones 

## Error encontrado

Respuesta: ninguno

## Aprendizaje principal

Respuesta: intercambias los valores en el mismo lugar

## Próximo reintento

- Fecha:
- Objetivo: