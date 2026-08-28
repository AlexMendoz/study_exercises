export {};

function validAnagram(s: string, t: string) {
    
    const sortS = (s: string) => {return s.split("").sort().join("")} 

    return sortS(s) == sortS(t);
}

console.log(validAnagram("anagram", "nagaram"))