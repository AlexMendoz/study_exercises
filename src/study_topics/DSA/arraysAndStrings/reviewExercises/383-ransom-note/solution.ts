export {};

function ransomNote(ransomNote: string, magazine: string) {
    
    let countChars = new Map();

    for (const c of magazine) {
        countChars.set(c, (countChars.get(c) ?? 0) +1);
    }

    for (const c of ransomNote) {
        if (countChars.has(c)) {
            countChars.set(c,(countChars.get(c))-1);
            if (countChars.get(c) == -1) {
                return false;
            }
        } else {
            return false;
        }
    }

    return true;
}

console.log(ransomNote("aa", "aab"));
console.log(ransomNote("aac", "aab"));