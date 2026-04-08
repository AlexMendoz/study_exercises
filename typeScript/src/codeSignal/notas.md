# Arreglos multidimencionales (Matrices)

- Basicamente lo que nos dicen es sobre como acceder a las matrices y como son:

```ts
let arr = [
    [2,3,4],
    [5,6,7],
    [8,9,0]
]
// Acceder a los elementos
console.log("seguno elemnto", arr[0][1])
// el acceso es desde el cero para obtener el primer elemento
// nos pueden dar ciertos errores si tratamos de acceder a elementos que no existen como intentar:
console.log("error:", arr[0][3]) // cuarto elemento del primero array
```
- Para acceder a cada elemento de un arreglo multidimencional es con un for anidado, esto es: for { for {} }

```ts
let arr = [
    [2,3,4],
    [5,6,7],
    [8,9,0]
]
for (let i=0; i < arr.lenght; i++){
    // accedemos al primero arreglo [2,3,4]
    for (let j=0; j< arr[i].lenght; j++){
        // accedemos a los elemetnos de cada subarrreglo
        console.log("elemento", arr[i]{j})
    }
    console.log()
}

```
- Actualizacion de un elemento
```ts
let arr = [
    [2,3,4],
    [5,6,7],
    [8,9,0]
]

arr[1][1] = 1000;
// ahora el array tendra los siguinetes elementos
// [
//     [2,3,4],
//     [5,100,7],
//     [8,9,0]
// ]
```
- Agregar un nuevo elemto a como fila

```ts
let arr = [
    [2,3,4],
    [5,6,7],
    [8,9,0]
]

arr[3] =[20,30,40]
// lo que da como salida
// [
//     [2,3,4],
//     [5,100,7],
//     [8,9,0],
//     [20,30,40]
// ]
```
- remover una columna o elemento, esto se hace directamente con el metodo 'splice'

```ts
let arr = [
    [2,3,4],
    [5,6,7],
    [8,9,0]
]

// remover un elemento en la posicion 1 de cada elemento
for(int i =0; i < arr.lenght; i++){
    arr[i].splice(1,1) //elimina en el arrego i, 1 elemento en la posicion 1
}
// [
//     [2,4],
//     [5,7],
//     [8,0]
// ]

// remover un elemento del array
arr.splice(1,1) // quita 1 elemento de la posicion 1
// [
//     [2,3,4],
//     [8,9,0]
// ]
```
En cada caso se elimina 1 elemento con el indice 1

- break y continuos en los array
```ts
let array = [
    ["Apt 101", "Apt 102", "Apt 103"],
    ["Apt 201", "Exit Floor", "Apt 203"],
    ["Apt 301", "Apt 302", "Apt 303"]
];

// Break in nested loop
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        if (array[i][j] === "Exit Floor") {
            break;
        }
        console.log(array[i][j] + ", ");
    }
    console.log();
}

// Outputs:
// Apt 101, 
// Apt 102, 
// Apt 103, 
//
// Apt 201, se rompe el recorrido en el array y se salta hasta le proximo elemento
//
// Apt 301, 
// Apt 302, 
// Apt 303, 

// Continue in nested loop
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        if (array[i][j] === "Exit Floor") {
            continue;
        }
        console.log(array[i][j] + ", ");
    }
    console.log();
}
// Outputs:
// Apt 101, 
// Apt 102, 
// Apt 103, 
//
// Apt 201, Al encontrar la condicion, se salta el elemento pero continua en el array
// Apt 203, 
//
// Apt 301, 
// Apt 302, 
// Apt 303, 
```     

# String y Arrays

Aun que parece que los string y los array son los mismos, no lo son, un array se puede modificar despues de ser creado pero un string no se puede modificar despues de ser creado.

```ts
const myList = [1, 2, 3, 4];
let myString = "hello";

// Now let's try to change the first element of both these features
// Using index to change the element at the specified index (0 in this case)
myList[0] = 100;
myString[0] = "t"; // does not change anything
// The following method does not change the string in place,
// but returns a new string where 'h' is replaced with 'H'
myString.replace('h', 'H');
// So it is possible to obtain a new string like this:
const newString = myString.replace('h', 'H');

console.log(myList); // prints [100, 2, 3, 4]
console.log(myString); // prints hello
console.log(newString); // prints Hello
```
- Metodo splice, elimina, reemplaza y agrega elementos a un arrelgo, tiene 3 parametros:
> El primero es la posicion del elemento a afectar
> El segundo el cuantos elementos se agregan (0- nada, o mas de 0)
> El tercero es lo que se va a agregar
```ts
const fruits = ["apple", "banana", "cherry"];

// Add a new element at the end
fruits.push("date"); // ['apple', 'banana', 'cherry', 'date']

// Inserting an element at a specific position
fruits.splice(1, 0, "bilberry"); // ['apple', 'bilberry', 'banana', 'cherry', 'date']

// Removing a particular element
fruits.splice(fruits.indexOf("banana"), 1); // ['apple', 'bilberry', 'cherry', 'date']
//indexOf de banana busca a primera ocurrecia de bana ay me regresa el indice:
// ['apple', 'bilberry', 'banana', 'cherry', 'date'] el indice de banana es 2
// fruits.splice(2,1); 
//se afecta al elemto de indice 2 "banana", se agrega un elemento, no hay tercer parametro, no se agrega nada y solo lo elimina
// Accessing elements using 
// replace value
fruits.splice(0,1, "apple modificado")
const firstFruit = fruits[0]; // apple
const lastFruit = fruits[fruits.length - 1]; // date

console.log(fruits)
```

- Entendiendo los string. Como ya se menciono, los string son inmutables pero pondemos acceder a los elemtnos y exisiten metodos para manipularlos y crear nuevos string

```ts
const greetingString = "Hello, world!";

// Accessing characters using indexing
const firstChar = greetingString[0]; // 'H'
const lastChar = greetingString[greetingString.length - 1]; // '!'

// Making the entire string lowercase
const lowercaseGreeting = greetingString.toLowerCase(); // "hello, world!"

```
Mas ejemplos de metodos y formas de manipular strings y arrays, ten en cuenta el spread operator [...array]
También que se pueden concatenar string con el operador `+`
```ts
const myList = [1, 2, 3, 4, 5];
const myString = "Hello";

// Slicing: `slice` for array and `substring` or `slice` for strings
// Note: The first index is inclusive and the second index is exclusive 
const sliceList = myList.slice(2, 4); // [3, 4]
const sliceString = myString.substring(1, 3); // "el"

// Concatenation: `concat` or spread operator for lists and `+` operator or template literals for strings
const concatenateList = myList.concat([6, 7, 8]); // [1, 2, 3, 4, 5, 6, 7, 8]
const concatenateListSpread = [...myList, 6, 7, 8]; // [1, 2, 3, 4, 5, 6, 7, 8]
const concatenateString = `${myString}, world!`; // "Hello, world!"
const concatenateStringPlus = myString + ", world!"; // "Hello, world!"

// Finding the index of an element in a list or a string
// `indexOf` returns the first occurrence index of the element
// returns -1 if the list or the string doesn't contain the element
const indexList = myList.indexOf(3); // 2 - Index of element '3'
const indexString = myString.indexOf('e'); // 1 - Index of character 'e'

// Sorting items in array in non-increasing order
const sortedList = [...myList].sort((a, b) => b - a); // [5, 4, 3, 2, 1]
// esta forma elegante de ordenar un array con el metodo sort compara los elementos de forma consecutiva, es decir
// si alguno de estos elemenos se se intercambia, a o b se mantiene constante en la funcion
// a = 1; b=2; b-a; 2-1 =1; positivo (se intercambia); [2,1,3,4,5]; a = 2, b= 3

```
# Loop de 
- Bucle for
Como recordatorio, el bucle for es el mismoque se conoce de toda la vida `for(let i = 0; i<len; i++){}` para recorrer arreglos o elementos que puedan ser recorridos.
Otro recordatorio es que el bucle for tambien se puede hacer mas sencillo `for (let fruit in fuits){}` esto si no se necesita trabajar con el indice o similares.

```ts
for (let num = 0; num < 5; num++) {
    console.log(num);
}

// Output:
// 0
// 1
// 2
// 3
// 4
let word = "hello";
// `ch` is each individual character in `word`
for (let ch of word) {
    console.log(ch);
}

// Output:
// h
// e
// l
// l
// o
```
- Bucle While
El mismo bucle while de toda la vida `while (condicion) {}`

```ts
let num = 0;
// The loop keeps running until `num` is no longer less than 5
while (num < 5) {
    console.log(num);
    // Increase `num` by 1 at the end of each iteration
    num++;
}

// Output:
// 0
// 1
// 2
// 3
// 4
```


```ts

```


```ts

```


```ts

```


```ts

```






```ts

```



