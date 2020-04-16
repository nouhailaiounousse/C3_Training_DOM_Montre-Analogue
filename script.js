var secondsLine = document.getElementById("second");
var minutesLine = document.getElementById("minute");
var hoursLine = document.getElementById("hour");

function nextMove() {
    var date = new Date;
    // SECONDES
    var seconds = date.getSeconds();
    secondsDeg = (360 / 60) * seconds;
    secondsLine.setAttribute("transform", "rotate(" + secondsDeg + ")");


    // MINUTES
    var minutes = date.getMinutes();
    minutesDeg = (360 / 60) * minutes;
    minutesLine.setAttribute("transform", "rotate(" + minutesDeg + ")");


    // HOURS
    var hours = date.getHours();
    if (hours > 12) {
        hours = hours - 12
    };
    hoursDeg = (360 / 12) * hours;
    hoursLine.setAttribute("transform", "rotate(" + hoursDeg + ")");


}
nextMove();
setInterval(nextMove, 1000);