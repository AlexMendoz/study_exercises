export {};

function plusMinus(arr: number[]): void {

    

    //son tres casos. positivos negativos y ceros
    //i0: postivos, i1: negativos, i2 ceros
    let ratios = [0,0,0];
    //recurda siempre las validaciones
    if (arr.length === 0) {
        for (const element of ratios) {
            console.log(element)
        }
        return;
    }
    const len = arr.length;

    for (const element of arr) {
        if (element > 0) {//positivo
            ratios[0]+=1;
        } else if(element < 0){
            ratios[1]+=1;
        } else {
            ratios[2]+=1;
        }
    }

    // const round = (n: number) => { return (Math.round(n * 10000) / 10000)}

    for (const element of ratios) {
        console.log((Math.round((element/len) * 10000) / 10000));
    }
    return;
}


console.log(plusMinus([1,1,0,0,-1,-1]));