# tower breakers

Es un juego de estrategia de dos jugadores  y tiene estas reglas:

- Hay n torres con altura inicial de m 
- El jugador 1 siempre mueve primero
- En cada turno, un jugador elije una torre de altura x y la reduce su altura a y, donde 1 <= y < x, y 'y' divide exactamente a x (no deja residuo, por lo que se tiene que hacer el modulo)
- Si un jugador no puede hacer un movimiento, pierde.

Ejemplo:
n = 2 y m = 6 -> Hay 2 torres de 6 de altura
Empienza el jugador 1; toma la torre 1; para saber cuanto se tiene que restar se tienen que obtner los valores previos con ayuda de la altura.
para 6 de altura solo pueden ser 5,4,3,2 ya que estos valores cumplen 1 <= y < x, donde x = 6 y y = [5,4,3,2];
[5,4,3,2,1] estos valores tiene que cumplir que x mod y = 0; osea 6 mod [5,4,3,2,1] -> y solo puedo ser 3,2 y 1, y es la cantidad de pisos que deben de quedar, entones el jugador puede quitar 3, 4 o 5 piezas,

## 1. Análisis previo


### ¿Qué me están pidiendo?
Respuesta:

### Input / Output
- Input:
- Output:

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
Respuesta:

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
