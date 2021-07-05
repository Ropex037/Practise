var ime = document.getElementById('inp1');
var email = document.getElementById('email1');
var msg = document.getElementById('message');
var send = document.getElementById('sendBtn');
var xx;

send.addEventListener('click', validacija);
ime.addEventListener('focus', clear);
email.addEventListener('focus', clear);
msg.addEventListener('focus', clear);



function validacija() {
    xx = 1
    if (ime.value == "") {
        ime.value = "Ovo polje je obavezno";
        ime.style.color = 'red';
        xx = 0
    }
    if (email.value == "") {
        email.value = "Ovo polje je obavezno";
        email.style.color = 'red';
        xx = 0
    }
    if (msg.value == "") {
        msg.value = "Ovo polje je obavezno";
        msg.style.color = 'red';
        xx = 0
    }
    if (xx == 1) {
        window.location.assign('second.html')
    }
}

function clear() {
    this.value = "";
    this.style.color = 'black';
}