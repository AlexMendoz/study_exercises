# 11. Container With Most Water

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
Example 2:

Input: height = [1,1]
Output: 1

## Análisis previo

### 1. ¿Qué me están pidiendo exactamente?

Respuesta: devolver la maxima cantidad de agua que cabe entre dos lineas

### 2. ¿Cuál es el input?

Respuesta: un arreglo de numeros onde cada numero representa una altura distinta

### 3. ¿Cuál es el output?

Respuesta: la maxima cantidad de agua

### 4. ¿Qué pasa en un ejemplo pequeño?

Respuesta: tengo mis limites 8 y 3, entonces la altura maxima seria 3, apartir de ahi se calcula el area

### 5. ¿Cuál sería una solución brute force?

Respuesta: recorrer todo el array en busqueda de los limites validos y luego calcular el maximo numero de agua

### 6. ¿Qué información necesito recordar?

Respuesta: los limites, las paredes intermedias

### 7. ¿Qué recorrido o estructura necesito?

- ¿Necesito recorrer todo? no
- ¿Necesito dos posiciones? si
- ¿Necesito recordar valores anteriores? si, los limites actuales
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
- ¿Cuándo cambia? cuando no se encuentra un limite izquierdo valido
- Variable: j
- Representa: indice derecho
- ¿Cuándo cambia? cuando no se encuentra un limite derecho valido
- Variable:area
- Representa: cantidad de agua acumulada entre los limites validos
- ¿Cuándo cambia? solo se calcula una vez cuando se encuentran limites validos


### Regla principal del algoritmo

Respuesta: encintrar los limtes validos ara despues calcular el area correcta


---

## Resultado del intento

- Fecha: 06-08-2026 16:34
- Tiempo efectivo:40 minutos
- Estado: Resuelto independientemente
- Ayuda utilizada: Explicación
- Tests completados:
- Complejidad temporal: O(n)
- Complejidad espacial: O(n)

## Bloqueo principal

Respuesta: no entendi bien las instrucciones del problema, esto a que esta en ingles. Entender como iba a avanzar i y j

## Error encontrado

Respuesta: 

## Aprendizaje principal

Respuesta: comprender mejor como avanzar los punteros, usar determinadas condiciones para resolver el problema, apoyarme de metodos como Math.min o Math.max

## Próximo reintento

- Fecha:
- Objetivo: