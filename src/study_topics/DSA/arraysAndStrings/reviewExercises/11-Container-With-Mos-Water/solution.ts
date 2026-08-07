export {};

function containerWithMostWater( heigth: number[]): number {
    let i = 0;
    let j = heigth.length -1;
    let area = 0;

    while (i < j) {
        let tempArea = 0;
        let altura = Math.min(heigth[i], heigth[j]);
        let distancia = j - i;
        // condicion para avanzar j o avanzar i
        tempArea = distancia * altura;
        let difI = tempArea - heigth[i];
        let difJ = tempArea - heigth[j];

        if (heigth[i] < heigth[j]) {
            i++;
        } else {
            j--;
        }
        area = Math.max(area, tempArea)
    }
    return area;
}

console.log(containerWithMostWater([1,8,6,2,5,4,8,3,7]))
console.log(containerWithMostWater([1,1]))
/**
 * [1,8,6,2,5,4,8,3,7] son lineas sin area
 * 
 *    con indices 8 y 7 seria calcular el area de dos rectangulos con indices 1,6 y 6,8, esto es
 * 1) [8,8] con altura maxima 7; base = 6 - 1 = 5; area = 5 * 7 = 35
 * 2) [8,7] altua maxima 7; base = 8 -6= 2; 2 * 7 = 14
 * 
 * area 1 + area 2= 35 + 14 = 49;
 * esto se resume a 
 * [1,8] = [8,7], altura maxima 7, base = 8 -1 = 7; 7x7 = 49
 * 
 * [1,1] = 1
 * 
 */