# mock max sum matrix

## 1. Análisis previo
este problema me pide encontrar la suma maxima del sector superior ozquierdo de una matirz, esto es posible cuando se reaizan rotaciones de las collumnas y los renglones.

### ¿Qué me están pidiendo?
Respuesta: obtener la suma maxima del sector superior izquierdo

### Input / Output
- Input: matriz 2nx2n
- Output: suma maxima

### Ejemplo pequeño
Respuesta:

### ¿Qué información necesito conservar?
Respuesta:

### Patrón o estructura que parece encajar
Respuesta:

### Brute force (opcional)
Respuesta:

---

## 2. Antes de programar

### Regla principal del algoritmo
Respuesta: los elementos solo pueden estar en ciertos lugares del sector1, y no se necesita rotar esos elementos
para la posicion [0,0] -> pueden estar estos valores [0,0], [0,n], [n,0], [n,n] y esto se reduce a encontrar el elemento mas grande que puede ocupar esos lugares: n -> n/2 nl
[0,0]       ->  [0,0], [0,n], [n,0], [n,n]
[n/2, n/2]  ->  [n/2, n/2 ], [(n/2), (n/2) + 1], [(n/2) +1, n/2], [(n/2) + 1, (n/2)+1 ]

una matriz siempre tiene 4 esquinas, no importa el tamaño, siempre las tiene

Esto de aqui se aplica para una matriz de 2nx2n

## Nuevo acercamiento para resolver este problema

Para obtener la longitud del primer cuadrante siempre se con n/2, dado que la matriz siempre es de tamaño 2n x 2n, esto sera (2n)/n -> n, en otras palabras, para m.length = 4; 2n = 4; 4/2 = n; 2 = n. [Esto siempre sale de las indicaiones del problema][No obies las cosas Alex, por algo te lo ponen]
Variable: nl -> tamaño de los valores del nuevo; entonces nl -> matriz 4x4; 4 = 2n; n = 2, [recueda que se le tiene que restar 1]
nl = 2n - 1

ahora, ya sabemos que necesitamos ciertos valores de la matriz, cada valor de la matriz tiene un lemento i,j, para el elemento del primer cuadrante [0,0] le corresponden los elementos [0,0], [0,len], [len,0], [len,len]; en temrinos de i,j -> [i,j], [i,nl-j], [nl-i,j], [ln-i,ln-j]
Para una matriz de 4x4, los elementos correspondietes para el primeor elemento del sector: [0,0],[0,3],[3,0],[3,3], al sustituir los valores tenemos que llegar a esos valores, entonces: n =2; nl = 2*2 -1; nl = 3; con i = 0 y j = 0; 1er elemento [0,0,], 2do elemento: [0,3-0] -> [0,3], 3er elemento: nl = 3, [3-0,0] -> [3,0], ultimo: [3-0,3-0] -> [3,3],

De esta manera obtenemos los elementos para la primer posicion y asi podemos encontrar le maximo elemento


### Variables / estructuras importantes
- `variable`:
  - Representa:
  - Cambia cuando:

---

## 3. Resultado

- Fecha: YYYY-MM-DD
- Tiempo efectivo: ___ minutos
- Estado: `No terminado | Resuelto con ayuda | Resuelto independientemente`
- Ayuda utilizada: `Ninguna | Pista | Explicación | Solución`
- Complejidad temporal:
- Complejidad espacial:

---

## 4. Revisión

### Bloqueo principal
Respuesta:

### Error encontrado
Respuesta:

### Aprendizaje principal
Respuesta:

### Qué haría diferente la próxima vez
Respuesta:
