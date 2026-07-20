Sí. La modificación principal es esta:

> Tu función `contagio()` ya no debe ser recursiva.
> Ahora debes usar una **queue** para procesar las naranjas por niveles/minutos.

Tu código actual tiene esta idea:

```ts
contagio(newRow, newCol, grid);
```

Eso es DFS: contagia inmediatamente y sigue profundo. Para este problema necesitas BFS: primero contagias todos los vecinos del minuto actual, luego los del siguiente minuto.

---

# Paso 1: conserva `isValid`

Tu función `isValid` está bien:

```ts
function isValid(row: number, col: number, grid: number[][]): boolean {
    return row >= 0 && row < grid.length && col >= 0 && col < grid[0].length;
}
```

Esta función la vas a seguir usando para validar vecinos.

---

# Paso 2: elimina o deja de usar `contagio`

Tu función `contagio()` ya no debe encargarse de propagar recursivamente.

En BFS no haces esto:

```ts
contagio(newRow, newCol, grid);
```

Porque eso contagia en cadena en el mismo minuto.

En vez de eso, cuando una naranja fresca se vuelve podrida, la metes a la `queue` para que contagie en el siguiente minuto.

---

# Paso 3: en `rottingOranges`, crea una queue

Dentro de `rottingOranges`, agrega:

```ts
const queue: [number, number][] = [];
let fresh = 0;
let minutes = 0;
```

Qué representa cada cosa:

```txt
queue   = naranjas podridas pendientes de procesar
fresh   = cantidad de naranjas frescas que quedan
minutes = minutos transcurridos
```

---

# Paso 4: recorre todo el grid una vez

Antes de empezar el contagio, necesitas saber:

1. Cuántas naranjas frescas hay.
2. Dónde están las naranjas podridas iniciales.

```ts
for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[row].length; col++) {
        if (grid[row][col] === 1) {
            fresh++;
        }

        if (grid[row][col] === 2) {
            queue.push([row, col]);
        }
    }
}
```

Con esto preparas el BFS.

Ejemplo:

```ts
[
  [2,1,1],
  [1,1,0],
  [0,1,1]
]
```

Después del recorrido inicial:

```txt
fresh = 6
queue = [[0, 0]]
```

---

# Paso 5: si no hay frescas, regresa 0

Este caso es importante:

```ts
if (fresh === 0) {
    return 0;
}
```

Ejemplo:

```ts
grid = [[0, 2]]
```

No hay naranjas frescas, entonces no necesitas minutos.

---

# Paso 6: procesa la queue mientras haya naranjas frescas

La estructura principal del BFS será:

```ts
while (queue.length > 0 && fresh > 0) {
    // procesar un minuto completo
}
```

¿Por qué `fresh > 0`?

Porque si ya no quedan frescas, ya no necesitas seguir contando minutos.

---

# Paso 7: procesa por niveles

Este es el punto más importante.

Al inicio de cada minuto, tomas cuántas naranjas podridas hay actualmente en la queue:

```ts
const size = queue.length;
```

Ese `size` representa las naranjas que van a contagiar **en este minuto**.

Luego haces:

```ts
for (let i = 0; i < size; i++) {
    const [row, col] = queue.shift()!;
}
```

Esto evita que las naranjas recién contagiadas contagien en el mismo minuto.

---

# Paso 8: revisa los 4 vecinos

Dentro del `for`, usas tus direcciones:

```ts
const directions = [
    [-1, 0], // arriba
    [0, 1],  // derecha
    [1, 0],  // abajo
    [0, -1]  // izquierda
];
```

Por cada naranja podrida actual, revisas sus vecinos:

```ts
for (const [dRow, dCol] of directions) {
    const newRow = row + dRow;
    const newCol = col + dCol;

    if (!isValid(newRow, newCol, grid)) {
        continue;
    }

    if (grid[newRow][newCol] === 1) {
        grid[newRow][newCol] = 2;
        fresh--;
        queue.push([newRow, newCol]);
    }
}
```

Aquí pasa el contagio real:

```ts
grid[newRow][newCol] = 2;
```

Y esta nueva naranja se agrega a la queue para procesarse después:

```ts
queue.push([newRow, newCol]);
```

---

# Paso 9: al terminar el nivel, aumenta minutos

Después de procesar todas las naranjas de ese minuto, haces:

```ts
minutes++;
```

Importante: esto va después del `for`, no dentro.

```ts
while (queue.length > 0 && fresh > 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
        // procesar naranjas de este minuto
    }

    minutes++;
}
```

---

# Paso 10: al final, revisa si quedaron frescas

Cuando termina el BFS, puede pasar una de dos cosas:

## Caso 1: `fresh === 0`

Todas se pudrieron.

```ts
return minutes;
```

## Caso 2: `fresh > 0`

Quedaron naranjas frescas aisladas.

```ts
return -1;
```

---

# Código completo usando tu estilo

```ts
function isValid(row: number, col: number, grid: number[][]): boolean {
    return row >= 0 && row < grid.length && col >= 0 && col < grid[0].length;
}

function rottingOranges(grid: number[][]): number {
    let minutes = 0;
    let fresh = 0;
    const queue: [number, number][] = [];

    const directions = [
        [-1, 0], // arriba
        [0, 1],  // derecha
        [1, 0],  // abajo
        [0, -1]  // izquierda
    ];

    // 1. Recorrido inicial
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
            if (grid[row][col] === 1) {
                fresh++;
            }

            if (grid[row][col] === 2) {
                queue.push([row, col]);
            }
        }
    }

    // 2. Si no hay naranjas frescas, no pasan minutos
    if (fresh === 0) {
        return 0;
    }

    // 3. BFS por niveles/minutos
    while (queue.length > 0 && fresh > 0) {
        const size = queue.length;

        for (let i = 0; i < size; i++) {
            const [row, col] = queue.shift()!;

            for (const [dRow, dCol] of directions) {
                const newRow = row + dRow;
                const newCol = col + dCol;

                if (!isValid(newRow, newCol, grid)) {
                    continue;
                }

                if (grid[newRow][newCol] === 1) {
                    grid[newRow][newCol] = 2;
                    fresh--;
                    queue.push([newRow, newCol]);
                }
            }
        }

        minutes++;
    }

    // 4. Si todavía hay frescas, fue imposible
    if (fresh > 0) {
        return -1;
    }

    return minutes;
}
```

---

# Cambio mental importante

Antes tu lógica era:

```txt
Encuentro un 2.
Contagio a un 1.
Ese 1 contagia inmediatamente a otro.
Sigo hasta donde pueda.
```

Eso es DFS.

Ahora debe ser:

```txt
Minuto 0:
    Tengo las podridas iniciales.

Minuto 1:
    Solo sus vecinos se pudren.

Minuto 2:
    Los nuevos podridos contagian a sus vecinos.

Minuto 3:
    Se repite el proceso.
```

Eso es BFS.

---

# Frase para recordarlo

```txt
En Rotting Oranges, cada nivel de BFS representa un minuto.
```

Por eso usamos:

```ts
const size = queue.length;
```

Porque ese `size` congela las naranjas que pertenecen al minuto actual. Las nuevas naranjas que agregas a la queue se procesan en el siguiente minuto.
