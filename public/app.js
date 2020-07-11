var hours = 0;
var min = 0;
var sec = 0;
var msec = 0;
var hoursHeading = document.getElementById("hours")
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
function timer() {
    msec++;
    msecHeading.innerHTML = msec;
    if (msec ===100) {
        sec++;
        secHeading.innerHTML = sec;
        msec = 0;
    } else if (sec == 60) {
        min++;
        minHeading.innerHTML = min;
        sec = 0
    } else if (min==60){
        hours++;
        hoursHeading.innerHTML = hours;
        min=0;

    }
}

function start() {
    interval = setInterval(timer, 10)
    document.getElementById("dis").disabled = true;
}

function pause() {
    clearInterval(interval)
    document.getElementById("dis").disabled = false;
}

function reset() {
    hours=0;
    min = 0;
    sec = 0;
    msec = 0;
    hoursHeading.innerHTML = "00";
    minHeading.innerHTML = "00";
    secHeading.innerHTML = "00";
    msecHeading.innerHTML = "00";
    clearInterval(interval)
}


