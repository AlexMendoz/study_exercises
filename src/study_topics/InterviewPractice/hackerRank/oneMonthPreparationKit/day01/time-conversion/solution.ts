export {};

function timeConversion(s: string): string {

    if (s.length != 10) { // tienen que tener el formato indicado en el input
        return '';
    }

    //hay que hacer verificaciiones primero para que se pueda hacer esta logica
    let time = s[s.length-2]+s[s.length-1];
    let splitTime = s.replace(/[^0-9]+$/g,"").split(":")
    console.log(splitTime,time)

    if (time == "AM") {
        if (splitTime[0] == "12") {
            splitTime[0] = "00";
        }
    } else {
        if (splitTime[0] != "12") {
            splitTime[0] = (+splitTime[0] + 12).toString(); // esto me lo enseño mi novia
        } 
    }
    
    return splitTime.join(":");
}


console.log(timeConversion('07:05:45PM'))
console.log(timeConversion('12:01:45AM'))
console.log(timeConversion('12:45:54PM'))



/**
 * sumar mas 12 y quitar el PM o AM
 * 
 * si es PM, sumar 12
 * pero si es PM y es 12, dejar como esta
 * si es AM no hacer nada
 * pero si es 12 AM pasa a ser 00
 * 
 * 12:45:54PM
Expected Output
12:45:54

 */