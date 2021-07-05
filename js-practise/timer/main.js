var timer = document.getElementById('timer');
var loop;

function displayTimer() {
    var sada = new Date();
    var h = sada.getHours();
    var m = sada.getMinutes();
    var s = sada.getSeconds();

    timer.innerHTML = h + "h:" + m + "m:" + s + "s"
}

loop = setInterval(displayTimer, 1000);