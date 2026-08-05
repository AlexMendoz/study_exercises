export {};

function reverseString(s: string[]) {
    let i: number = 0;
    let j: number = s.length-1;
    let aux;

    while (i <= j) {
        aux = s[j];
        s[j] = s[i];
        s[i] = aux;
    }   
}
