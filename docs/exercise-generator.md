# Generador de ejercicios

Este repositorio incluye un comando para crear automáticamente la estructura inicial de un ejercicio de estudio.

Cada ejercicio se crea con:

```text
nombre-del-ejercicio/
├── notes.md
└── solution.ts
```

* `notes.md`: contiene la plantilla de análisis previo, las ocho preguntas, el resultado del intento, bloqueos y aprendizajes.
* `solution.ts`: contiene la implementación del ejercicio en TypeScript.

## Estructura relacionada

```text
study_exercises/
├── package.json
├── scripts/
│   └── create-review-exercise.sh
├── templates/
│   └── exercise-notes-template.md
├── docs/
│   └── exercise-generator.md
└── src/
    └── study_topics/
        └── DSA/
```

## Comando

La sintaxis general es:

```bash
npm run create:exercise -- <tema> <nombre-del-ejercicio>
```

El primer argumento indica la ruta del tema dentro de:

```text
src/study_topics/DSA/
```

El segundo argumento indica el nombre de la carpeta del ejercicio.

## Ejemplos

### Ejercicio de repaso de Arrays and Strings

```bash
npm run create:exercise -- arraysAndStrings/reviewExercises 392-is-subsequence
```

Crea:

```text
src/study_topics/DSA/arraysAndStrings/reviewExercises/
└── 392-is-subsequence/
    ├── notes.md
    └── solution.ts
```

### Ejercicio de Hashing

```bash
npm run create:exercise -- hashing 1-two-sum
```

Crea:

```text
src/study_topics/DSA/hashing/
└── 1-two-sum/
    ├── notes.md
    └── solution.ts
```

### Ejercicio de Linked Lists

```bash
npm run create:exercise -- linkedLists 206-reverse-linked-list
```

Crea:

```text
src/study_topics/DSA/linkedLists/
└── 206-reverse-linked-list/
    ├── notes.md
    └── solution.ts
```

### Ejercicio de BFS

```bash
npm run create:exercise -- graphs/bfs 994-rotting-oranges
```

Crea:

```text
src/study_topics/DSA/graphs/bfs/
└── 994-rotting-oranges/
    ├── notes.md
    └── solution.ts
```

## Convención de nombres

Se recomienda utilizar `camelCase` para los temas existentes del repositorio:

```text
arraysAndStrings
linkedLists
slidingWindow
```

Para las carpetas de ejercicios se recomienda utilizar `kebab-case`:

```text
392-is-subsequence
1-two-sum
206-reverse-linked-list
994-rotting-oranges
```

Cuando el ejercicio pertenece a LeetCode, incluye primero su número.

## Plantilla de notas

El archivo generado `notes.md` se copia desde:

```text
templates/exercise-notes-template.md
```

Si se necesita cambiar la estructura de notas para todos los ejercicios futuros, se debe modificar esa plantilla.

Los ejercicios que ya existen no se actualizan automáticamente cuando cambia la plantilla.

## Validaciones del script

El script comprueba que:

* se haya proporcionado un tema;
* se haya proporcionado el nombre del ejercicio;
* exista la plantilla de notas;
* no exista ya una carpeta con el mismo nombre.

Si la carpeta ya existe, el script termina sin sobrescribir archivos.

## Flujo recomendado

1. Crear el ejercicio:

```bash
npm run create:exercise -- <tema> <ejercicio>
```

2. Responder las ocho preguntas en `notes.md`.

3. Intentar resolver el problema sin consultar una solución durante el tiempo definido.

4. Escribir la implementación en `solution.ts`.

5. Completar en `notes.md`:

   * tiempo efectivo;
   * ayuda utilizada;
   * bloqueo principal;
   * error encontrado;
   * aprendizaje;
   * próximo reintento.

6. Ejecutar y probar el código.

7. Guardar los cambios:

```bash
git add .
git commit -m "study(<tema>): complete <nombre-del-ejercicio>"
git push
```

## Ejemplo completo

```bash
npm run create:exercise -- hashing 1-two-sum

npx ts-node src/study_topics/DSA/hashing/1-two-sum/solution.ts

git add .
git commit -m "study(hashing): complete two sum"
git push
```

## Propósito

Este generador busca mantener una estructura consistente entre ejercicios y separar:

* el razonamiento previo;
* la implementación;
* los errores;
* los aprendizajes;
* los reintentos.

El objetivo no es únicamente acumular soluciones, sino conservar evidencia de cómo evoluciona el proceso para resolver problemas.
