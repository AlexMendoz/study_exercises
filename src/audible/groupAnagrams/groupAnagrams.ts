/**
 * 49. Group Anagrams
Medium
Topics
premium lock icon
Companies
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
Example 2:

Input: strs = [""]

Output: [[""]]

Example 3:

Input: strs = ["a"]

Output: [["a"]]

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.
 */

function groupAnagrams(strs: string[]): string[][]{

    let ans: string[][] = []; // variable que almacenara la respuesta

    let strsKeys = new Map(); // map for struct key: value ["",""]
    let setStrs = new Set(); // set for unique string values


    for (const element of strs) {
        // sort characters in string for create set
        let stringSort = element.split("").sort().join("");
        setStrs.add(stringSort) // add sort stirng in set
        // validation of exist in set
        if (setStrs.has(stringSort)) {
            // obtain current list or empty array
            let arraysTmp  = strsKeys.get(stringSort) || [];
            // push new string to key
            arraysTmp.push(element);
            //set array with new element
            strsKeys.set(stringSort, arraysTmp)
        }
        
    }
    ans = [...strsKeys.values()]// this is Ok, you remerber that
    // ans = Array.from(strsKeys.values()) // also this is OK, you remember the primitive fiunctions
    return ans;
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))

/**
 * NOTA
 * Realize un ejercicio similar a este, donde tenia que ve runa palabra era subarray se una palabra
 *  -   Esto ejercicio se peude mejorar
 */