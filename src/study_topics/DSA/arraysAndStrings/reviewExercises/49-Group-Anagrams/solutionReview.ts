export {};

function anagrams(strs: string[]): string[][]{

    let unique = new Set();
    for (const c of strs) {
        const raiz = c.split("").sort().join();
        unique.add(raiz);
    }

    let anagrams = new Map();

    for (const c of strs) {
        const raiz = c.split("").sort().join("");
        if (anagrams.has(raiz)) {
            let tmp = anagrams.get(raiz);
            tmp.push(c) // como tmp esta apuntando a la memoria del map, no es necesario hacer set otra vez
        } else {
            anagrams.set(raiz,[c]); //esto solo se ejecuta una vez
        };
    }

    return [...anagrams.values()];

}

console.log(anagrams(["eat","tea","tan","ate","nat","bat"]))

/**
 * 1) encontramos la raiz de la palabra, ordenamos cada pa¿labra y hacemos un set
 * 
 * 2) Evaluamos cada palabra, si esta en el set la agregamos al Map como un array nuevo
 */