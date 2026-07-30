export {};
/**
 * Example 2: 2351. First Letter to Appear Twice

    Given a string s, return the first character to appear twice. It is guaranteed that the input will have a duplicate character.
 */

function character_repeted(s: string): string{

    let seen =  new Set();

    for (let i = 0; i < s.length; i++) {
        //revisamos si la letra ya existe, si existe significa que esta repetida y esa la tenemos que devolver
        if (seen.has(s[i])) {
            return s[i];
        }
        seen.add(s[i]); // si no se sumple condicion (NO existe) agregamos la letra l set
        
    }
    return '';
}

console.log(character_repeted("abcdeda"));
/**
 * NOTAS
 * 
 * Este problema es sobre veriricar si un caracter ya existe, por lo que se puede usar un MAP o un SET, sin embargo, el SET seria mejor
 */