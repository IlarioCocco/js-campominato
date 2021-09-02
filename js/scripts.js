// Esercizio di oggi: Campo Minato
// nome repo: js - campominato

// Consegna:

// Il computer deve generare 16 numeri casuali tra 1 e 100(bombe).
// I numeri non possono essere duplicati.
// In seguito il giocatore clicca sulle celle numerate(non può cliccare più volte sulla stessa cella)
// La partita termina quando il giocatore clicca su un numero “vietato” o clicca su tutte le celle che non sono delle bombe.
// Al termine della partita il software deve comunicare il punteggio.
//     BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50


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

