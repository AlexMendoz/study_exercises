export {};

function plusMinus(arr: number[]): void{
    let frecuencies = [0,0,0];
    if (arr.length == 0) {
        // console.log(frecuencies)
        for (const r of frecuencies) {
            console.log(r)
        }
        return;
    }

    for (const n of arr) {
        if (n > 0) { //positivos
            frecuencies[0] = frecuencies[0] + 1;
        } else if (n < 0){ // negativos
            frecuencies[1]+= 1;
        } else { //ceros
            frecuencies[2]+= 1;
        }
    }

    for (const n of frecuencies) {
        console.log(Math.round((n/arr.length)*1000)/1000)
    }
}

plusMinus([1,2,2,0,0,-2,-3,-1]);
plusMinus([1,2,2,-2,-3,-1]); // no hay ceros
plusMinus([1,2,2,0,0]);// no hay negativos
plusMinus([0,0,-2,-3,-1]); // no hay positivos
plusMinus([]);

