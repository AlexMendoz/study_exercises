export {};

function validAnagram(s: string, t: string) {
    let canonic = new Set();
    const sortS = (s: string) => {return s.split("").sort().join("")} 

    return canonic.add(sortS(s)).add(sortS(t)).size === 1;
}


console.log(validAnagram("anagram", "nagaram"))