Tomando como inicio **hoy, miércoles 15 de julio de 2026, a partir de las 13:00**, te propongo concentrarte en aproximadamente **18 problemas Easy y Medium**. La meta no será terminar la lista, sino llegar a la evaluación dominando los patrones con mayor probabilidad de aparecer.

## Distribución semanal

Tu disponibilidad base quedaría así:

* **Entre semana:** 2–2.5 horas después del trabajo.
* **Durante el trabajo:** bloques opcionales de 20–40 minutos. No contaremos con ellos para que el plan no dependa de que tengas tiempo libre.
* **Sábado:** descanso por tu evento; solo repaso breve opcional.
* **Domingo:** sesión principal de 4–5 horas.
* **Total estimado:** 18–21 horas de preparación.

Cuando tengas disponible la evaluación, procura realizarla dentro de los **primeros 3–5 días**, pero no la comiences inmediatamente después de recibirla. Primero identifica la duración, prepara tu entorno y elige un bloque sin interrupciones.

# Problemas prioritarios

## Prioridad máxima

Estos son los que deberías resolver y posteriormente repetir:

1. 49. Group Anagrams
2. 200. Number of Islands
3. 994. Rotting Oranges
4. 207. Course Schedule
5. 973. K Closest Points to Origin
6. 253. Meeting Rooms II
7. 138. Copy List with Random Pointer
8. 146. LRU Cache
9. 2055. Plates Between Candles
10. 863. All Nodes Distance K in Binary Tree

## Prioridad media

Debes resolverlos una vez y entender su patrón:

11. 2357. Make Array Zero
12. 1603. Design Parking System
13. 1710. Maximum Units on a Truck
14. 937. Reorder Data in Log Files
15. 2222. Number of Ways to Select Buildings
16. 2100. Find Good Days to Rob the Bank
17. 767. Reorganize String
18. 348. Design Tic-Tac-Toe
19. 1268. Search Suggestions System
20. 1567. Maximum Length of Subarray With Positive Product

Durante esta semana dejaría fuera los Hard, incluyendo:

* Sliding Window Maximum
* Trapping Rain Water
* Find Median from Data Stream
* Word Ladder
* Maximum Number of Robots Within Budget
* Word Break II
* Integer to English Words

Puedes revisar su patrón posteriormente, pero no deberían consumir el tiempo principal de esta preparación.

---

# Miércoles 15 de julio: diagnóstico, arrays y hash maps

## Bloque opcional durante el trabajo

**13:00–13:40**

Prepara tu espacio de práctica:

* Crea un archivo o proyecto de TypeScript.
* Configura una función para ejecutar casos de prueba.
* Prepara plantillas para `Map`, `Set`, matrices y colas.
* Lee rápidamente los primeros cuatro problemas, sin resolverlos todavía.

No necesitas estudiar de manera continua desde las 13:00. Este primer bloque es para organizarte y reducir fricción en la noche.

## Bloque principal

**19:00–21:30**

### Problemas

1. 2357. Make Array Zero
2. 1603. Design Parking System
3. 1710. Maximum Units on a Truck
4. 49. Group Anagrams

### Distribución

* Make Array Zero: 20 minutos
* Parking System: 20 minutos
* Maximum Units: 30 minutos
* Group Anagrams: 45 minutos
* Repaso y notas: 25 minutos

### Qué debes aprender

**Make Array Zero**

No simules inmediatamente. Pregúntate:

> ¿Cuántas operaciones diferentes son realmente necesarias?

Busca si el resultado depende de los valores exactos o únicamente de cuántos valores positivos distintos existen.

**Parking System**

Practica diseño básico de clases:

```ts
class ParkingSystem {
  constructor(
    private big: number,
    private medium: number,
    private small: number
  ) {}

  addCar(carType: number): boolean {
    return false;
  }
}
```

Debes pensar qué estado necesita conservar el objeto entre llamadas.

**Maximum Units**

Identifica la decisión greedy:

> Si tengo espacio limitado, ¿qué cajas debería seleccionar primero?

Ordenar por unidades por caja permite tomar primero la opción más beneficiosa.

**Group Anagrams**

Este es el problema central del día. Debes reconocer:

* Agrupación.
* Hash map.
* Construcción de una llave común.

Explica antes de programar:

> Dos palabras pertenecen al mismo grupo si, después de transformarlas a una representación común, generan la misma llave.

---

# Jueves 16 de julio: strings, ordenamiento y decisiones locales

## Bloque opcional

**13:30–14:00**

Sin programar, escribe en papel o notas:

* Cómo resolviste Group Anagrams.
* Complejidad temporal.
* Diferencia entre `Map` y `Set`.
* Un caso límite de cada problema del miércoles.

## Bloque principal

**19:00–21:30**

### Problemas

1. 937. Reorder Data in Log Files
2. 2214. Minimum Health to Beat Game
3. 2268. Minimum Number of Keypresses
4. 2340. Minimum Adjacent Swaps to Make a Valid Array

### Cómo pensar

**Reorder Data in Log Files**

Divide el problema:

1. ¿Cómo reconozco un log de letras?
2. ¿Cómo reconozco uno de números?
3. ¿Qué grupo debe ordenarse?
4. ¿Qué grupo conserva su orden original?

Antes de escribir el comparador, separa identificador y contenido.

**Minimum Health to Beat Game**

Busca una interpretación matemática. En lugar de simular la vida después de cada ataque, calcula:

* Daño total.
* Mayor ataque que puedes bloquear.
* Salud mínima necesaria para sobrevivir.

**Minimum Keypresses**

Piensa como un problema greedy:

> Las letras más frecuentes deben usar las posiciones que requieren menos pulsaciones.

Necesitas contar frecuencias, ordenarlas y asignar costos.

**Minimum Adjacent Swaps**

Observa que solo necesitas mover:

* El valor mínimo hacia el inicio.
* El valor máximo hacia el final.

Presta atención al caso en el que mover uno cambia la posición del otro.

---

# Viernes 17 de julio: prefix sum y conteo de combinaciones

## Bloque opcional

**13:30–14:00**

Repasa:

```ts
const prefix = new Array(nums.length + 1).fill(0);

for (let i = 0; i < nums.length; i++) {
  prefix[i + 1] = prefix[i] + nums[i];
}
```

Recuerda que una suma entre `left` y `right` puede calcularse como:

```ts
prefix[right + 1] - prefix[left]
```

## Bloque principal

**19:00–21:45**

### Problemas

1. 2222. Number of Ways to Select Buildings
2. 2055. Plates Between Candles
3. 2100. Find Good Days to Rob the Bank

### Cómo pensar

**Number of Ways to Select Buildings**

No generes todos los tríos.

Para cada posición, piensa:

> Si este edificio fuera el centro, ¿cuántos edificios compatibles hay antes y después?

Si el centro es `0`, necesitas unos a ambos lados.
Si el centro es `1`, necesitas ceros a ambos lados.

**Plates Between Candles**

Divide la solución en tres precálculos:

1. Cantidad acumulada de platos.
2. Vela más cercana a la izquierda.
3. Vela más cercana a la derecha.

Después cada consulta se responde sin volver a recorrer el substring.

**Good Days to Rob the Bank**

Para cada posición necesitas saber:

* Cuántos días consecutivos no aumentaron antes.
* Cuántos días consecutivos no disminuyeron después.

Define claramente qué significa cada arreglo auxiliar antes de programar.

---

# Sábado 18 de julio: evento y descanso

No programes problemas nuevos.

Tu preparación no se verá afectada por descansar un día. De hecho, te ayudará a consolidar lo aprendido.

## Repaso opcional

**20–30 minutos en cualquier momento disponible**

Elige solo una actividad:

* Leer tus notas.
* Explicar Group Anagrams en voz alta.
* Dibujar el funcionamiento de prefix sum.
* Revisar los errores que cometiste.
* Reescribir de memoria una función BFS básica.

No abras un problema nuevo ni intentes recuperar todas las horas del día.

---

# Domingo 19 de julio: matrices, BFS, DFS y grafos

Este será el día más importante.

## Primera sesión

**10:00–12:30**

### Problemas

1. 200. Number of Islands
2. 994. Rotting Oranges

### Number of Islands

Antes de programar, responde:

* ¿Qué representa cada nodo?
* ¿Cuáles son sus vecinos?
* ¿Cuándo comienza una nueva isla?
* ¿Cómo evito contar una celda dos veces?

Tu proceso debería ser:

```text
Recorrer todas las celdas.
Si encuentro tierra no visitada:
    aumentar respuesta
    recorrer toda esa isla con DFS o BFS
```

### Rotting Oranges

La diferencia principal es que aquí necesitas BFS por niveles.

Pregúntate:

> ¿Cuáles son todos los puntos desde donde comienza la expansión?

Todos los elementos podridos deben agregarse inicialmente a la cola. Esto se conoce como **BFS con múltiples fuentes**.

## Descanso

**12:30–14:00**

## Segunda sesión

**14:00–16:30**

### Problemas

3. 207. Course Schedule
4. 863. All Nodes Distance K in Binary Tree

### Course Schedule

Convierte el enunciado en un grafo:

* Curso: nodo.
* Prerrequisito: arista.
* Imposibilidad de terminar: ciclo.

Puedes estudiarlo con indegree y BFS:

```text
Agregar a la cola los cursos sin prerrequisitos.
Procesarlos y eliminar conceptualmente sus conexiones.
Si procesas todos, no existe ciclo.
```

### All Nodes Distance K

El obstáculo es que el árbol solo proporciona referencias hacia los hijos.

Necesitas poder desplazarte:

* Al hijo izquierdo.
* Al hijo derecho.
* Al padre.

Primero construye una relación `nodo → padre`. Después ejecuta BFS desde el nodo objetivo.

## Tercera sesión

**18:00–19:00**

Repite **Number of Islands** sin consultar la primera solución.

No necesitas hacer una segunda sesión completa. El objetivo es comprobar si el patrón ya quedó en tu memoria.

---

# Lunes 20 de julio: heaps, intervalos y selección

## Bloque opcional

**13:30–14:00**

Investiga cómo estará disponible una priority queue en el entorno de la evaluación.

En algunos entornos de LeetCode para TypeScript puedes utilizar clases proporcionadas por la plataforma; en otros ejercicios tendrás que implementar o simular la estructura. Para la entrevista, lo más importante es explicar correctamente por qué necesitas un heap.

## Bloque principal

**19:00–21:45**

### Problemas

1. 973. K Closest Points to Origin
2. 253. Meeting Rooms II
3. 767. Reorganize String

### K Closest Points

Primero entiende la distancia:

```ts
const distance = x * x + y * y;
```

No necesitas calcular la raíz cuadrada porque no cambia el orden de las distancias.

Solución inicial aceptable:

1. Calcular distancia.
2. Ordenar.
3. Tomar los primeros `k`.

Después identifica cómo un heap podría evitar ordenar todos los elementos.

### Meeting Rooms II

Dibuja una línea de tiempo.

Cuando una reunión comienza:

```text
salas ocupadas + 1
```

Cuando termina:

```text
salas ocupadas - 1
```

También puedes usar un min-heap con los horarios de finalización. Si la siguiente reunión comienza después de que termina la más próxima, puedes reutilizar esa sala.

### Reorganize String

Cuenta frecuencias y pregúntate:

> ¿Qué carácter tiene mayor riesgo de quedarse acumulado al final?

Selecciona prioritariamente los caracteres más frecuentes, pero evita colocar dos iguales consecutivos.

---

# Martes 21 de julio: estructuras enlazadas y diseño

## Bloque opcional

**13:30–14:00**

Dibuja una lista doblemente enlazada:

```text
head ⇄ node1 ⇄ node2 ⇄ tail
```

Repasa qué cambian estas operaciones:

* Eliminar un nodo.
* Agregarlo al frente.
* Eliminar el último.
* Consultar un nodo por llave.

## Bloque principal

**19:00–22:00**

### Problemas

1. 138. Copy List with Random Pointer
2. 146. LRU Cache

Esta sesión requiere más tiempo porque LRU Cache no es un problema normal: es un problema de diseño.

### Copy List with Random Pointer

Usa dos recorridos.

Primer recorrido:

```text
nodo original → nuevo nodo
```

Segundo recorrido:

```text
copia.next = mapa.get(original.next)
copia.random = mapa.get(original.random)
```

Explica por qué no puedes conectar correctamente el puntero `random` si todavía no has creado todos los nodos.

### LRU Cache

Debes entender la combinación:

```text
Map + lista doblemente enlazada
```

El `Map` permite localizar un nodo en O(1).
La lista permite mantener el orden de uso en O(1).

Define funciones auxiliares antes de implementar:

```ts
remove(node)
addToFront(node)
moveToFront(node)
removeLeastRecent()
```

No intentes escribir todo directamente dentro de `get` y `put`, porque será más difícil de corregir.

---

# Miércoles 22: simulación previa a la evaluación

Aunque técnicamente ya habrás completado los siete días, recomiendo utilizar este bloque antes de comenzar la evaluación.

**19:00–21:00**

## Simulación

Elige al azar:

* Un problema de hash map.
* Uno de BFS/DFS.
* Uno de diseño, intervalos o heap.

Una buena combinación sería:

1. Group Anagrams
2. Rotting Oranges
3. Meeting Rooms II

Límite por ejercicio:

* Easy: 20 minutos.
* Medium: 35–40 minutos.

No consultes notas durante el primer intento.

---

# Método que debes seguir en cada problema

## Minutos 0–5: entender

Escribe:

```text
Entrada:
Salida:
Restricciones:
Qué significa una respuesta válida:
```

Reformula el problema con tus propias palabras.

## Minutos 5–10: ejemplos

Haz un ejemplo pequeño manualmente.

Busca:

* Un elemento.
* Duplicados.
* Entrada ya ordenada.
* Ausencia de solución.
* Resultado al inicio o al final.

## Minutos 10–15: solución directa

Describe primero la solución ingenua.

Ejemplo:

> Podría comparar cada elemento con todos los demás, pero eso tomaría O(n²).

Esto te permite justificar la optimización.

## Minutos 15–25: patrón

Pregúntate qué trabajo estás repitiendo:

| Necesidad                        | Patrón            |
| -------------------------------- | ----------------- |
| Buscar o contar rápidamente      | Hash map          |
| Sumas de rangos                  | Prefix sum        |
| Recorrer componentes             | DFS/BFS           |
| Distancia mínima por niveles     | BFS               |
| Procesar el menor o mayor        | Heap              |
| Mantener una sección consecutiva | Sliding window    |
| Dependencias entre elementos     | Grafo             |
| Mantener orden de uso            | Lista doble + Map |
| Ordenar decisiones por beneficio | Greedy            |

## Antes de programar

Define qué representa cada variable.

Por ejemplo:

```text
left: inicio de la ventana actual
right: final de la ventana actual
count: cantidad de elementos válidos dentro de la ventana
answer: mejor resultado encontrado
```

## Después de programar

Prueba manualmente el código con al menos dos entradas. Después explica:

```text
Tiempo: O(...)
Espacio: O(...)
```

---

# Cuándo dejar un problema

Para no perder horas:

## Easy

* Intenta durante 15 minutos.
* Consulta una pista si no identificas el patrón.
* Implementa sin copiar la solución completa.

## Medium

* Intenta durante 25–30 minutos.
* Si tienes una solución ingenua, escríbela o explíquela.
* Consulta solo el patrón o la idea principal.
* Cierra la explicación.
* Reimplementa desde cero.

Un problema se considera aprendido cuando puedes:

1. Explicar el enfoque.
2. Justificar la estructura elegida.
3. Programarlo nuevamente sin copiar.
4. Indicar su complejidad.
5. Mencionar al menos dos casos límite.

---

# Objetivo mínimo antes de comenzar la evaluación

Deberías poder resolver sin apoyo:

* Group Anagrams
* Number of Islands
* Rotting Oranges
* K Closest Points
* Meeting Rooms II
* Copy List with Random Pointer

Y deberías poder explicar, aunque tardes más en programar:

* Course Schedule
* All Nodes Distance K
* Reorganize String
* LRU Cache
* Plates Between Candles

El mejor momento para realizar la evaluación será cuando puedas resolver **dos Medium consecutivos en aproximadamente 70–80 minutos**, incluyendo pruebas y explicación de complejidad. No necesitas sentir que dominas los 50 problemas para estar preparado.
