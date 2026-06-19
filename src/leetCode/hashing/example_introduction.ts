function main() {
    let myHashMap = new Map(); //
    
    myHashMap.set(4, 83);
    console.log(myHashMap.get(4)); // Prints 83
    
    console.log(myHashMap.has(4)); // Prints true
    console.log(myHashMap.has(854)); // Prints false
    
    myHashMap.set(8, 327);
    myHashMap.set(45, 82523);
    
    for (const [key, val] of myHashMap) {
        console.log(`${key}: ${val}`);
    }
}

function example1(){
    //asi se crea un Map
    let myHashMap = new Map(); // es un map vacio

    //agregando elementos
    myHashMap.set(1, "a"); //llave 1 : valor "a"
    myHashMap.set(2, 1); // llave 2: valor 1

    console.log(myHashMap);

    //verificando existencia de elementos
    console.log("if key exisit",myHashMap.get(1)) //devuelve el valor

    console.log("if key not exist",myHashMap.get(4)); // si la llave no exsite devuelve undefined

    // if key doesn´t exisit, insert key and value
    myHashMap.set(4,"four")

    // if the key exist, update value
    myHashMap.set(2, "two");

    //delete key
    myHashMap.delete(1);

    // obtain size
    console.log(myHashMap.size);
    //iterate hashmap
    console.log("\niterate")
    for (const [key, value] of myHashMap) {
        console.log(key, " : ", value);
    }

    // verify if element exist
    console.log("2 :",myHashMap.has(2));
    console.log("5 :",myHashMap.has(5));
}

example1()
