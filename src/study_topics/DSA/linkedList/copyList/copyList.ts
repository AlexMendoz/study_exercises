export {};
/**
 * 138. Copiar una lista enlazada con puntero aleatorio

    Se te proporciona una lista enlazada de longitud n.

    Cada nodo contiene:

    un valor val;
    un puntero next, que apunta al siguiente nodo;
    un puntero adicional llamado random, que puede apuntar:
    a cualquier nodo de la lista;
    o a null.

    Debes construir una copia profunda de la lista.

    La nueva lista debe contener exactamente n nodos completamente nuevos. Cada nodo nuevo debe tener el mismo valor que su nodo correspondiente en la lista original.

    Además:

    Los punteros next de los nodos nuevos deben apuntar a nodos de la lista nueva.
    Los punteros random de los nodos nuevos deben apuntar a nodos de la lista nueva.
    Ningún puntero de la copia puede apuntar a un nodo de la lista original.

    Por ejemplo, si en la lista original existen dos nodos X y Y y:

    X.random → Y

    entonces, en la lista copiada, los nodos correspondientes x y y deben cumplir:

    x.random → y

    Debes devolver la cabeza de la nueva lista.
    Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
    Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]
 */
class _Node {
    val: number
    next: _Node | null
    random: _Node | null
        constructor(val?: number, next?: _Node, random?: _Node) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
        this.random = (random===undefined ? null : random)
    }
}

function copyRandomList(head: _Node | null): _Node | null {
    if (head === null) {
        return null;
    }

    // primera pasada: crear copias.
    const copies = new Map<_Node, _Node>();
    let current: _Node | null = head; // que ironico;

    // este while se ejecuta mientras sea distinto de null, ya que se encuentra un null es que ya llego al final
    while (current !== null) {
        // console.log(new _Node(current.val));
        const copiedNode = new _Node(current.val);
        copies.set(current, copiedNode);
        current = current.next; // de esta forma vamos recorriendo la lista, y como el ultimo nodo apunta a nada, es undefined y regresamos un null
    }

    //segunda pasada, se deben reiniar las valores como current, ya que se queda en el ultimo valor
    current = head;
    // segunda pasada, se conectan los valores next y random

    while (current !== null) {
        // ya no tengo que crear un nodo por que ya lo tengo en mi map copies
        const copiedNode = copies.get(current)!; // le ponemos el ! para decir que confie en nosostros y no habra undefined
        // para next
        copiedNode.next = current.next !== null ? copies.get(current.next)! : null;
        // copiedNode.next = copies.get(current.next)!; hacerlo asi produce undefined

        // para random
        // copiedNode.random = current.random !== null ? copies.get(current.random)! : null;
        // copiedNode.random = copies.get(current.random)!;
        current = current.next;
    }

    return copies.get(head)!;

    // console.log(copies);
}

//Esta prueba esta compleja 
// Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
// COntruccion de cada nodo
const node0 = new _Node(7);
const node1 = new _Node(13);
const node2 = new _Node(11);
const node3 = new _Node(10);
const node4 = new _Node(1);
// ahora cada nodo esta enlazado con el siguiente (next)
node0.next = node1;
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = null; // por que es el ultimo nodo
//ahora los nodos random
node0.random = null;
node1.random = node0;
node2.random = node4;
node3.random = node2;
node4.random = node0;
// todo lo de arriba es la lista enlazada, para que el funcion la entienda basta con pasarle nodo0, ya que esta enlazada
console.log(copyRandomList(node0));

/**
 * 
 * El problema se va a resolver en dos pasadas, una para crear las copias y otro para asignar los valores.
 */

/**
 * 
 * NOTAS
 * 
 * Este problema (esta algo aburrido) usa el concepto de copia profunda,
 * 
 * ¿Qué es es esto de copia profunda?
 * Como sabemos en la programacion, no solo es almacenar valores en variables y ya, para hacer esto se tiene toda una logica detras, cuando declaramos una variable, por ejemplo let original = 2, esta mos diciendo que original vale 2, ahora si yo creo una variable que se llame copia = original, ahora copia vale 2, lo mismo que original, tenemos algo así:
 * copia -> original -> 2 , esto es original -> 2 <- copia
 * si yo modifico, el valor de original, a 3, al valor de copia tambien se ve afectado, y ahora copia, tambien vale 3.
 * Esta situacion no es la que yo quiero, realmnente quiero, quiero conservar el valor de 2 en copia, podria crear una nueva variable con el valor de 2 pero esto solo funcionaria con el valor de 2
 * 
 * Dada esta situacion, nos piden crear una copia profunda de un arreglo de nodos con ciertas restricciones, estas retricciones realmente no son tan relevantes en la copia profrunda
 * 
 * El problema pide que los nodos sean los mismos, es decir, 
 * Original A -> copia A
 * Original B -> copia B
 * Original C -> copia C
 * 
 * ¿Esta relacion no te recuerda a cierta estructura?
 * A los hashMaps!, estos guardan las relacion de llave -> valor
 * Entonces, podemos usar algo asi:
 * original = {
        nodoOriginal: nodoCopia,
    }
 *
 * y con las restricciones: 
 * Todos los punteros de la lsita nueva deben apuntar a la lista nueva
 * Los punteros ramdomn de la lista nueva debe apuntar a la lista nueva
 * Ningun ´puntero de la lista nueva debe apuntar a la lista original
 * 
 * 
 * OBSERVACIONES
 * 
 * El problema todo el tiempo menciona que lo que nos dan y lo que debemos devolver es la cabeza (el head) de una lista nueva. O sea, quiero replicar cierto comportamiento pero apartir de cierto punto ya tiene que ser distintos.
 * 
 */
