var polje1 = document.getElementById('polje1');
var polje2 = document.getElementById('polje2');
var rezlutatPolje = document.getElementById('rezultat');
var form = document.getElementById('procenat');

form.addEventListener('submit', function (event) {
    if (!polje1.value || !polje2.value) {
        alert("Popunite obavezna polja");
    } else {
        var x = parseFloat(polje1.value);
        var y = parseFloat(polje2.value);

        var zbir = x / y;
        var precent = zbir * 100;

        rezlutatPolje.innerText = "Answer is : " + precent + "%";
        event.preventDefault();
    }
});