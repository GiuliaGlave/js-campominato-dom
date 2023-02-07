/* 
//Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.
Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell'array delle bombe non potranno esserci due numeri uguali.

//In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. 
//Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

//La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti(ovvero quando ha rivelato tutte le celle che non sono bombe).

//Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l'utente ha cliccato su una cella che non era una bomba. 
*/

/* ON LOAD */
const gridEl = document.getElementById("grid");
console.log(gridEl);

const square = 100;

const playButtonEl = document.getElementById("play-button");

playButtonEl.addEventListener(
    "click",
    function () {

        generateGrid(gridEl, square);
    }
)


/* FUNCTION */

function generateGrid(grid, squareTotal) {

    for (let i = 0; i < squareTotal; i++) {

        const cardEl = document.createElement("div");
        cardEl.classList.add("grid-element");
        cardEl.classList.add("col");
        cardEl.classList.add("col-auto");
        cardEl.classList.add("p-3");
        cardEl.innerHTML = i + 1;
        grid.append(cardEl);

        console.log(cardEl);

        cardEl.addEventListener(
            "click",
            function () {

                this.classList.toggle("active");
                console.log(this.innerHTML);

            }
        );
    }
}