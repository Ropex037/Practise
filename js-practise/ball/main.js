var ball = document.getElementById('ball');
addEventListener('keydown', move);

function move(e) {
    if (e.which == 37) {
        ball.style.left = '50px'
    }
    if (e.which == 38) {
        ball.style.top = '50px'
    }
    if (e.which == 39) {
        ball.style.left = '1100px'
    }
    if (e.which == 40) {
        ball.style.top = '600px'
    }
}