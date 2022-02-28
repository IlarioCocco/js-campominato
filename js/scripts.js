// Esercizio: Campo Minato
// nome repo: js - campominato


// FUNZIONI ---------------------------------------------------------------------------

// inserire 100 quadratini nel div id = #campo tramite JS!
// dato il numero di celle disegna il campo da gioco
function creaCampo(nCelle) {
    for (var i = 1; i <= nCelle; i++) {
        document.getElementById("campo").innerHTML += `<div class="quadrato">${i}</div>`; //template literal
    }
}
// l'utente disegna il campo da gioco
// var numeroCelle = prompt("Crea Campo Minato maggiore del numero Bombe = 16");
// creaCampo(numeroCelle);


// dato l array e l'elemento da cercare 
// restituisce true se l'elemento è presente altrimenti false
// CICLO WHILE INDEFINITO
function inArray(array, elemento) {
    var i = 0;
 
    while( i < array.length ) {
        if (array[i] == elemento) {
            return true;
        } 
        i++;
    }   
    return false;
}



// dato un range di numeri restituisce numeri Random
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}

// FUNZIONI -----------------------------------------------------------------------------






// PROGRAMMA PRINCIPALE ------------------------------------------------------------------
var livello = parseInt(prompt("Scegli il tuo Livello: 0 ~ 1 ~ 2"))
if (livello == 0) {
    numeroCelle = 100;
    alert("HAI SCELTO 100 CELLE ~ GOOD LUCK!")
} else if (livello == 1) {
    numeroCelle = 70;
    alert("HAI SCELTO 70 CELLE ~ GOOD LUCK!")
}  else {
    numeroCelle = 50;
    alert("HAI SCELTO 50 CELLE ~ GOOD LUCK!")
}  





// variabili di base
var nBombe = 16;
var possibilita = numeroCelle - nBombe;



// // Il computer deve generare 16 numeri casuali tra 1 e 100(bombe).
// // I numeri non possono essere duplicati.
var bombe = [];

// ciclo per 16 volte
while(bombe.length < nBombe) {
    // inserisco i numer nell'array delle Bombe
    var numero = getRndInteger(1, numeroCelle);
    // se il numero NON è presente nell' array delle bombe lo inserisco
    if (inArray(bombe, numero) == false) {
        bombe.push(numero);
    }
}
console.log(bombe);




//da sistema
creaCampo(numeroCelle);

// al click sulle celle del campo da gioco
// in seguito il giocatore clicca su un numero vietato o sule celle delle bombe
// In seguito il giocatore clicca sulle celle numerate(non può cliccare più volte sulla stessa cella)
// La partita termina quando il giocatore clicca su un numero “vietato” o clicca su tutte le celle che non sono delle bombe.
var numeriValidi =[];

document.getElementById("campo").addEventListener("click", //Si tratta di un oggetto che contiene alcune informazioni circa l'evento che è stato scatenato: cose come il bottone del mouse che è stato premuto o il tasto della tastiera che abbiamo schiacciato.
    
    function (event) {

        console.log(event);
        // event.target è l'elemento del dom su cui clicco
        // mi salvo il numero della casella
        // event.target.classList.add("cliccato");
      
        var numeroCliccato = parseInt(event.target.innerHTML);
        console.log(numeroCliccato);

        // se il numero cliccato è presente nell'array delle BOMBE hai perso! il punteggio
        // altrimenti se hai già cliccato ti AVVISO !   
        // altrimenti è un numero consentito 
        if (inArray(bombe, numeroCliccato) == true) {
            alert(`hai perso!!! il tuo punteggio è  ${numeriValidi.length} !` ); //semplifico utilizzando il templete literal
            location.reload(); // aggiorna il campo minato
        } else if(inArray(numeriValidi, numeroCliccato) == true) {
            alert("hai gia cliccato");
        } else {
            numeriValidi.push(numeroCliccato);
            event.target.classList.add("cliccato");
            if(numeriValidi.length == possibilita) {
                alert("hai finito il gioco");
            }
        }
    }
);

// PROGRAMMA PRINCIPALE ------------------------------------------------------------------





// Al termine della partita il software deve comunicare il punteggio.
//     BONUS: (da fare solo se funziona tutto il resto)
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 => tra 1 e 80
// con difficoltà 2 => tra 1 e 50