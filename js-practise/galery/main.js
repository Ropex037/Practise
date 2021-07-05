var curent = document.getElementById('curent');
var slike = document.getElementsByClassName('thumb');
for (var i = 0; i < slike.length; i++) {
    slike[i].addEventListener('click', display);
}
function display() {
    var sl = this.getAttribute('src');
    curent.setAttribute('src', sl);
}