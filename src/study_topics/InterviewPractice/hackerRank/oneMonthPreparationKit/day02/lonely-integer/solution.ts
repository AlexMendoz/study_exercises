export {};


function lonelyInteger(a:  number[]): number {

    if (a.length == 0) {
        return 0;
    }
    if (a.length == 1) {
        return a[0];
    }

    let unique = new Map<number,number>();
    for (const e of a) {
        unique.set(e,(unique.get(e) ?? 0) +1);
    }
    // console.log(unique);
    for (const [key,_] of unique) {
        if(unique.get(key) == 1){
            
            return key;
        }
    }
    return 0;

}

console.log(lonelyInteger([1,2,3,4,3,2,1]));