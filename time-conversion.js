function timeConversion(s) {
    let formatTime = s.substr(-2);
    let time = s.substr(0,8).split(":");
    let hours = parseInt(time[0]);
    switch(formatTime) {
        case "AM":
            if(hours === 12) {
                hours = "00";
                time[0] = hours;
            }
        break;
        case "PM":
            if(hours === 12) hours = "12";
            else {
                hours += 12;
                time[0] = hours.toString();
            }
        break;
    }
    time = `${time[0]}:${time[1]}:${time[2]}`;
    console.log(time);
}

const s = "12:05:56PM";
timeConversion(s);