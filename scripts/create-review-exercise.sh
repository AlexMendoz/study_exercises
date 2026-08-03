#!/usr/bin/env bash

set -e

TOPIC="$1"
EXERCISE_NAME="$2"

BASE_DIR="src/study_topics/DSA"
TEMPLATE="templates/exercise-notes-template.md"

if [[ -z "$TOPIC" || -z "$EXERCISE_NAME" ]]; then
    echo "Uso:"
    echo "npm run create:exercise -- <tema> <ejercicio>"
    echo ""
    echo "Ejemplo:"
    echo "npm run create:exercise -- hashing 1-two-sum"
    exit 1
fi

EXERCISE_DIR="$BASE_DIR/$TOPIC/$EXERCISE_NAME"

if [[ ! -f "$TEMPLATE" ]]; then
    echo "Error: no se encontró la plantilla:"
    echo "$TEMPLATE"
    exit 1
fi

if [[ -d "$EXERCISE_DIR" ]]; then
    echo "Error: el ejercicio ya existe:"
    echo "$EXERCISE_DIR"
    exit 1
fi

mkdir -p "$EXERCISE_DIR"
cp "$TEMPLATE" "$EXERCISE_DIR/notes.md"
touch "$EXERCISE_DIR/solution.ts"

echo "Ejercicio creado:"
echo "$EXERCISE_DIR"