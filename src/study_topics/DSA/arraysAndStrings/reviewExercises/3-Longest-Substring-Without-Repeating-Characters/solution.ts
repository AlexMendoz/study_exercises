export {};

function longestSubstring(s: string): number {
    let i = 0;
    // let j = 0;

    let ans = 0;

    for (let j = 0; j < s.length; j++) {
        if (s[i] != s[j]) {
            ans = j - i;
        } else if (s[i] == s[j]) {
            console.log(s[i], s[j])
            ans = j - i;
            i++;
            j--;
        } else if (s[i] == s[j] && i == 0){
            continue;
        }
    }
    return ans;
}

console.log(longestSubstring("abcabcbb"));
console.log(longestSubstring("bbbbb"));
console.log(longestSubstring("pwwkew"));

// j siempre avanza, pero j tiene que esperar una iteracion en el mismo lugar cuando i avanza
/**
 * abcabcbb     s[i] != s[j]-> a != a -> NO; j++;  i == 0
 * i
 * j
 * abcabcbb     s[i] != s[j]-> a != b -> SI; calc len 1; j++; 
 * i
 *  j
 * abcabcbb     s[i] != s[j]-> a != c -> SI; calc len 2; j++; 
 * i
 *   j
 * abcabcbb     s[i] != s[j]-> a != a -> NO -> i++ j--; calc len; j++; 
 * i
 *    j
 * abcabcbb     s[i] != s[j]-> b != a -> SI ; calc len; j++; 
 *  i
 *    j
 * 
 */