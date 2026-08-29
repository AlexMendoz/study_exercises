export {};

function isomorphicStrings(s: string, t: string) {
    let sMap = new Map();
    let unique = new Set();

    for (let i = 0; i < s.length; i++) {
        if (!sMap.has(s[i])) {
            if(unique.has(t[i])){
                return false;
            }
            sMap.set(s[i], t[i]);
            unique.add(t[i]);
            
        } 
        if (sMap.get(s[i]) != t[i]) {
            return false;
        };
        
    }
    return true;
}
console.log(isomorphicStrings("ego", "add"))
console.log(isomorphicStrings("egg", "add"))

console.log(isomorphicStrings("bbbaaaba", "aaabbbba"))
console.log(isomorphicStrings("baba", "abba"))


/**
 * 3:50
 * 
 * 
 * Cada letra de a le correpconde una de b
 * Input: s = "f11", t = "b23"
 * 
 * f -> b
 * 1 -> 2       por la naturaleza de Map no permite ptra lalve igual
 * 
 * false
 * 
 * Input: s = "egg", t = "add"
 * 
 * e -> a
 * g -> d       por la naturaleza de Map no permite una llave igual, sin embargo, g sigue cumpliendo la condidcion para el ultimo elemento
 * 
 * true
 * 
 * Input: s = "ego", t = "add"
 * 
 * e -> a
 * g -> d
 * o -> d       Como g -> d, ya no se puede hacer o -> d
 * 
 * tengo que ver la nueva llave no este en el map, luego tengo que ver que el nuevo valor no este en el SET
 * 
 * false
 * 
 * 1) comprobamos que la llave exista
 * 
 */