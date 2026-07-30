export {};
/**
 * 146. LRU Cache
    Medium

    Topics
    premium lock icon
    Companies
    Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

    Implement the LRUCache class:

    LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
    int get(int key) Return the value of the key if the key exists, otherwise return -1.
    void put(int key, int value) Update the value of the key if the key exists. Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity from this operation, evict the least recently used key.
    The functions get and put must each run in O(1) average time complexity.

    

    Example 1:

    Input
    ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
    [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
    Output
    [null, null, null, 1, null, -1, null, -1, 3, 4]

    Explanation
    LRUCache lRUCache = new LRUCache(2);
    lRUCache.put(1, 1); // cache is {1=1}
    lRUCache.put(2, 2); // cache is {1=1, 2=2}
    lRUCache.get(1);    // return 1
    lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
    lRUCache.get(2);    // returns -1 (not found)
    lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
    lRUCache.get(1);    // return -1 (not found)
    lRUCache.get(3);    // return 3
    lRUCache.get(4);    // return 4
 */

class CacheNode {
    key: number; // clave para almacenar en el map
    value: number; // valor de la clave
    prev: CacheNode | null; // nodo previo al que esta enlazada
    next: CacheNode | null; // nodo siguiente al que estara enlazada
    constructor (key: number, value: number){
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    private capacity: number; // numero de elementos maximos que puede guardar le cache
    // guardara clave -> nodo
    private cache: Map<number, CacheNode>; // como manejamos le cache para mantener el get y put en O(1)
    private head: CacheNode; //nodo ficticio inicial, sera el menos reciente
    private tail: CacheNode; // nodo ficticio final, sera el mas reciente

    constructor(capacity: number) {
        this.capacity = capacity;
        this.cache = new Map<number, CacheNode>();
        this.head = new CacheNode(0,0);
        this.tail = new CacheNode(0,0);

        //el inicio y el final estan enlazados, esto nos ayuda con validaciones de casos especiales
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    /**
     * agrega un nuevo nodo del lado de tail
     * @param node 
     */
    private addMostRecent(node: CacheNode): void {
        const previousMostrecent = this.tail.prev!;// valor prev de T = H

        previousMostrecent.next = node;// el siguiente de head es node; H -> node
        node.prev = previousMostrecent;// el prev de node es H; y H es el prev de T

        node.next = this.tail;// el next de node es T
        this.tail.prev = node;// el prev de T es node
        // de estamaneara de tener H <-> T pasamos a tener H <-> node <-> T

    }

    private removeNode(node: CacheNode): void {
        // que necesito para quietar un nodo? enlazar los nodos que quedan "sueltos"
        const prevNode = node.prev!;
        const nextNode = node.next!;

        prevNode.next = nextNode;
        nextNode.prev = prevNode;
    }

    //ahora, se tiene que mover el nodo para que sea el mas reciente
    private moveToMostRecent(node: CacheNode): void {
        this.removeNode(node);
        this.addMostRecent(node);
    }

    get(key: number): number {
        const node = this.cache.get(key)!;

        if(node === undefined) {
            return -1; // no existe la clave
        }
        this.moveToMostRecent(node)
        return node.value;
    }

    put(key: number, value: number): void {
        const node = this.cache.get(key)!;
        // si la llave ya existe, la tenemos que actualizar y mover al mas reciente
        if (!(node === undefined)) {
            console.log("la calve ya existe!");
            node.value = value;
            this.moveToMostRecent(node);
            return ;
        }
        const newCacehNode = new CacheNode(key, value); // se crear el nuevo nodo a la lista
        this.cache.set(key,newCacehNode); //aqui es donde se agrega el nuevo nodo a la lista
        this.addMostRecent(newCacehNode); // se realiza el movimiento para poner el nuevo nodo como el mas reciente

        //ahora, eso agrega nodos de forma indefinida, pero tenemos que repetar la capacidad
        if (this.cache.size > this.capacity) {
            let lastRecently = this.head.next!;
            // quitamos el menos reciente, como sabemos cual es el nodo menos reciente? el que esta junto a head H <-> N
            this.removeNode(lastRecently);
            // lo eliminamos del Map, recuerda que lo eliminamos por el key
            this.cache.delete(lastRecently.key);
        }
        
    }
}

// TESTING
// new
const cacheNode0 = new CacheNode(0,0);
const cacheNode1 = new CacheNode(1,1);
const cacheNode2 = new CacheNode(2,2);
// linked
cacheNode0.prev = null;
cacheNode0.next = cacheNode1;
cacheNode1.prev = cacheNode0;
cacheNode1.next = cacheNode2;
cacheNode2.prev = cacheNode1;
cacheNode2.next = null;

const cache = new LRUCache(2)

console.log(cacheNode0.next)
console.log(cache.get(2)) // si existe
console.log(cache.get(10)) // no existe

/**
 * 
 * NOTAS
 * 
 * Una lista enlazada o doblemente enlazada, requiere de un inicio y un final "ficticios", esto para que el programa no se pierda con valores que no existen, de esta manera siemprea vamos a tener algo como:
 *          head y tail    o head -> nodo -> tail
 * 
 * Ahora, cada nodo de una lista va tener simpre dos valores para una lista enlazada, el valor y next, hacia donde esta enlazada
 *      nodo 0 = [10, 2]; esto significa, el nodo cero tiene un valor de 10 y apunta al nodo 2
 * Para una lista doblemente enlazada, tenemos el prev, valor y next, ahora son tres valores
 *      nodo 0 = [10,null, 2]; esto significa, el nodo cero vale 10, va a head y al nodo 2
 * 
 * 
 */