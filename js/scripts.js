// inserire 100 quadratini nel div #campo
function numeroQuadrati(quadratini) {
    for (var i = 1; i <= quadratini; i++) {
        document.getElementById("campo").innerHTML += `<div class="quadrato">${i}</div>`;
    }
}
var quadratini = prompt("inserisci il numero di Quadratini");
numeroQuadrati(quadratini);



document.getElementById("campo").addEventListener("click",
    function (event) {
        // l'elemento del dom su cui clicco
        event.target.classList.toggle("clicco")
        console.log(event.target.innerText);
    }
);



var bombe = generaArrayNumeriRandom();
// genero numero random
function generaNumeroRandom(max) {
    var numeroRandom = (Math.floor(Math.random() * max) + 1);
    // console.log ("numero Random:" + numeroRandom);
    return numeroRandom;
}
generaNumeroRandom(100);



function generaArrayNumeriRandom() {
    var numeriRandom = [];
    while (numeriRandom.length < 16) {
        var numeroCasuale = generaNumeroRandom(100);
        var cerca = numeriRandom.includes(numeroCasuale);
        if (cerca == false) {
            numeriRandom.push(numeroCasuale);
        }
    }
    return numeriRandom;
}
console.log(generaArrayNumeriRandom());

