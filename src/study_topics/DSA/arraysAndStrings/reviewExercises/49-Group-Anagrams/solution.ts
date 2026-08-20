export {};

function groupAnagrams(strs: string[]) {

    let ans = [];
    let anagrams = new Set()

    for (const s of strs) {
        anagrams.add(s.split("").sort().join("")); //como el ornde importa, ate y eat son distintos en el set, por lo que se tiene que ordenar y como tiene los mismos caracteres resuelta en aet, entones para el set el mismo y solo agrega uno
    };

    for (const a of anagrams) {
        let tmp = [];
        for (const s of strs) {
            if (s.split("").sort().join("") == a) {
                tmp.push(s)
            }
        }
        ans.push(tmp);
    }

    return ans;
}

groupAnagrams(["eat","tea","tan","ate","nat","bat"]);