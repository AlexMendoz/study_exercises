/**
 * Given a 0-indexed string word and a character ch, reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive). If the character ch does not exist in word, do nothing.

For example, if word = "abcdefd" and ch = "d", then you should reverse the segment that starts at 0 and ends at 3 (inclusive). The resulting string will be "dcbaefd".
Return the resulting string.

Example 1:

Input: word = "abcdefd", ch = "d"
Output: "dcbaefd"
Explanation: The first occurrence of "d" is at index 3. 
Reverse the part of word from 0 to 3 (inclusive), the resulting string is "dcbaefd".
Example 2:

Input: word = "xyxzxe", ch = "z"
Output: "zxyxxe"
Explanation: The first and only occurrence of "z" is at index 3.
Reverse the part of word from 0 to 3 (inclusive), the resulting string is "zxyxxe".
Example 3:

Input: word = "abcd", ch = "z"
Output: "abcd"
Explanation: "z" does not exist in word.
You should not do any reverse operation, the resulting string is "abcd".
 */

function reversePrefix(word: string, ch: string){

    let chars = word.split("");
    let j = -1;
    
    for (let i = 0; i < chars.length; i++) {
        
        if (chars[i] === ch) {
            j = i ;
            break;
        } 
    }
    
    if (j == -1) return word;
    // let i = 0;
    let aux = "";

    for (let i = 0; i < j; i++) {
        //guardmos el ultimo en el aux
        aux = chars[j];
        // asignamos el primero al ultimo
        chars[j] = chars[i];
        // asign last to first
        chars[i] = aux;
        j--;
    }
    
    return chars.join("");
}

console.log(reversePrefix("abcdefd", "d"));
console.log(reversePrefix("abcd", "z"));


const bestSolution = (word: string, ch: string) => {
    let i = 0;
    const chars = word.split("");
    let indexOfCh = word.indexOf(ch); //obtener el indidce de la primera apararion de ch
    if (indexOfCh == -1) return word;

    while (i < indexOfCh) {
        [chars[i], chars[indexOfCh]] = [chars[indexOfCh], chars[i]]
        i++;
        indexOfCh--;
    }
    return chars.join("");
}
console.log(bestSolution("abcdefd", "d"));
// tienes que ser bien especifico en los nombre de tus variables

/**
 * NOTES
 * convert string into array to iterate 
 * I use two pointer for this
 * 
 * is the same idea that reverse string but in this case, we know first the last index
 * when I know the last index, now reverse the section of the string
 * 
 * Input: word = "abcdefd", ch = "d"
 * 
 * 
 */