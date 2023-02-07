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
const square = 100;

/* START GAME */
const playButtonEl = document.getElementById("play-button");
playButtonEl.addEventListener(
    "click",
    function () {
        generateGrid(gridEl, square);
    }
)
/* FUNCTION */

function generateGrid(grid, squareTotal) {

    
    const bomb = bombGenerate(1, squareTotal);
    console.log(bomb);

    for (let i = 0; i < squareTotal; i++) {

        const cellEl = document.createElement("div");
        cellEl.classList.add("grid-element");
        cellEl.classList.add("col");
        cellEl.classList.add("col-auto");
        cellEl.innerHTML = i + 1;
        grid.append(cellEl);

        cellEl.addEventListener(
            "click",
            function () {

                this.classList.toggle("active");

                // se al click è bomba diventa rosso
                //altrimenti resta active
                if(bomb.includes(parseInt(this.innerHTML))) {
                    cellEl.classList.add("bomb");
                    cellEl.innerHTML = "&#128163;";

                    gameOver();

                } else {
                    cellEl.innerHTML = "&#127800;";
                }

                const activeEl = document.querySelectorAll(".grid-element.active");
                if(squareTotal - bomb.length == activeEl.length){
                    alert("hai vinto");
                }
            }
        );
        
      
    }
}

/*BOMBE  */ 

function bombGenerate (min, max){

    const bombArray = [];

    while (bombArray.length < 16) {
        
        const randomNumber = Math.floor(Math.random() * max - min + 1) + min;

        if (!bombArray.includes(randomNumber)){
            bombArray.push(randomNumber);
        }    
    }

    return bombArray;
}

/* GAME OVER */

function gameOver(){
    const activeEl = document.querySelectorAll(".grid-element.active");

    alert("hai indovitato " + (activeEl.length - 1) + " celle");
    
}