export {};

function squaresOfASortedArray(nums: number[]) {
    let i = 0;
    let j = nums.length-1;

    let squares = [];

    while(i < j || i == j){
        //lo mas sencillo seria calcular el cuadrado de todos los numeros
        if (Math.pow(nums[i],2) < Math.pow(nums[j],2)) {
            squares.push(Math.pow(nums[j],2));
            j--;
        } else{
            squares.push(Math.pow(nums[i],2));
            i++;
        }
        
    }
    // squares = squares.reverse()
    return squares.reverse();
}

console.log(squaresOfASortedArray([-4,-1,0,3,10]));
console.log(squaresOfASortedArray([-4]));