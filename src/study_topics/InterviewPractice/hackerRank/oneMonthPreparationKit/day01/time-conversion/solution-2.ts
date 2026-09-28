export {};

function timeConversion(s: string): string {

    let time = s[s.length-2] + s[s.length-1]
    let splitTime = s.replace(/[a-zA-Z]/g,"").split(":")
    console.log(splitTime, time)

    if (time == "PM") {
        if (splitTime[0] != '12') {
            splitTime[0] =  String(+splitTime[0] + 12);
        }
    } else if (time == "AM"){
        if (splitTime[0] == "12") {
            splitTime[0] = "00";
        }
    }

    return splitTime.join(":");
}

console.log(timeConversion("12:00:00AM"))
console.log(timeConversion("12:00:00PM"))
console.log(timeConversion("7:00:00PM"))