#!/usr/bin/env bash

set -euo pipefail

if [[ $# -ne 2 ]]; then
    echo "Uso: npm run create:hackerrank -- <día: 1-30> <nombre-del-ejercicio>" >&2
    exit 1
fi

DAY="${1#day}"
EXERCISE_NAME="$2"

if [[ ! "$DAY" =~ ^(0?[1-9]|[12][0-9]|30)$ ]]; then
    echo "Error: el día debe estar entre 1 y 30 (ejemplos: 1, 01, day01)." >&2
    exit 1
fi

if [[ ! "$EXERCISE_NAME" =~ ^[a-z0-9]+(-[a-z0-9]+)*$ ]]; then
    echo "Error: usa un nombre en kebab-case, por ejemplo: plus-minus o 01-plus-minus." >&2
    exit 1
fi

PROJECT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)"
TEMPLATE="$PROJECT_DIR/templates/exercise-notes-template.md"
printf -v DAY_DIR 'day%02d' "$((10#$DAY))"
EXERCISE_DIR="$PROJECT_DIR/src/study_topics/InterviewPractice/hackerRank/oneMonthPreparationKit/$DAY_DIR/$EXERCISE_NAME"

if [[ ! -f "$TEMPLATE" ]]; then
    echo "Error: no se encontró la plantilla: $TEMPLATE" >&2
    exit 1
fi

mkdir -p "$(dirname -- "$EXERCISE_DIR")"
if ! mkdir -- "$EXERCISE_DIR"; then
    echo "Error: no se pudo crear el ejercicio; comprueba si ya existe: $EXERCISE_DIR" >&2
    exit 1
fi

EXERCISE_TITLE="${EXERCISE_NAME//-/ }"
if [[ "$EXERCISE_NAME" =~ ^([0-9]+)-(.+)$ ]]; then
    EXERCISE_TITLE="${BASH_REMATCH[1]}. ${BASH_REMATCH[2]//-/ }"
fi

awk -v title="$EXERCISE_TITLE" \
    'NR == 1 { $0 = "# " title } { print }' \
    "$TEMPLATE" > "$EXERCISE_DIR/notes.md"
printf 'export {};\n' > "$EXERCISE_DIR/solution.ts"

echo "Ejercicio creado: $EXERCISE_DIR"
