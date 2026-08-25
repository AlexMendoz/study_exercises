export {};


function isIsomorphic(s: string, t: string): boolean{
    let charMap = new Map();
    
    for (let i = 0; i < s.length; i++) {
        let isInMap = [...charMap.values()].includes(t[i])
        if (!isInMap) {
            // charMap.set(s[i], "");
            // continue;
            charMap.set(s[i], t[i])
        } else {
            continue;
        }
    }

    console.log(charMap)
    for (let i = 0; i < s.length; i++) {
        // console.log(s[i],charMap.get(s[i]), t[i])
        if (charMap.get(s[i]) != t[i]) {
            return false;   
        }
        
    }

    return true;
}


console.log(isIsomorphic("add", "egg"));
console.log(isIsomorphic("f11", "b23"));
console.log(isIsomorphic("badc", "baba"));
console.log(isIsomorphic("foo", "bar"));


/**
 * b -> b, a -> a, d -> b, c -> a
 *                 ------
 * Ese mapeop de d -> b, no deberia estar por que b -> b, ya existe, entonces se tiene que revisar que si b ya  existe en el map no se haga el map de "d"
 * 
 * b, me pregunto si b ya existe, si no existe, la agrego al map,
 * ¿Como puedo verificar que b ya exista? con [...map.values].includes o con un set
 * 
 * badc
 * 
 * b -> verifico que no este en el map
 * si no esta, la agrego con su llave y continuo
 * a -> verifico que no este el map
 * si no esta, la agrego con su llave y continuo
 * b -> veririco que no este el map
 * Si esta en el map, salto esta iteracion
 * c -> verifico que no este en el map
 * Si esta en el map salto la iteracion
 * 
 */