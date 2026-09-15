# HackerRank — Kit de preparación de un mes

Organización personal en 30 días de práctica: `day01` a `day30`.
Cada día puede contener varios ejercicios, cada uno en su propia carpeta.

## Estructura de cada ejercicio

```text
day01/
└── nombre-del-ejercicio/
    ├── notes.md
    └── solution.ts
```

- Usa el nombre del ejercicio en `kebab-case`.
- El comando copia `templates/exercise-notes-template.md` a `notes.md` y ajusta el título. Agrega el enlace del problema a tus notas.
- Escribe la solución en `solution.ts`, incluyendo `export {};` para evitar conflictos entre ejercicios.
- Repite esta estructura para cada ejercicio del día. Las carpetas diarias comienzan vacías, conservadas en Git mediante `.gitkeep`.

## Crear ejercicios desde la raíz del proyecto

```bash
npm run create:hackerrank -- 1 plus-minus
npm run create:hackerrank -- 1 mini-max-sum
npm run create:hackerrank -- 2 01-time-conversion
```

Acepta días del 1 al 30 (`1`, `01` o `day01`) y crea una carpeta por ejercicio con `notes.md` y `solution.ts`. Si el ejercicio ya existe, termina sin sobrescribir archivos.

## Ejecución desde la raíz del proyecto

```bash
npx ts-node src/study_topics/InterviewPractice/hackerRank/oneMonthPreparationKit/day01/nombre-del-ejercicio/solution.ts
```
