import { DEBUTANT } from "./constantes.js";
import GameLogic from "./logiqueJeu.js";
import {couleurs} from "./utils.js";

document.getElementById("back").addEventListener("click", function() {
    window.location.href = "accueil.html";
});

let essaieActuel = 1;
let billeActuelle = 0;
let essaieMax = 8;
let billeMax = 4;
displayGame(8,4,2,3);
playLine(0, 4);

const debutant = document.getElementById("debutant");
const avance = document.getElementById("avance");

debutant.addEventListener("click", () => {
    if (debutant.classList.contains("active")){
        debutant.classList.replace("active", "selected");
        avance.classList.replace("selected", "active");
        const easyGame = new GameLogic(DEBUTANT);
        easyGame.display();
        playLine(0, 4);
        essaieActuel = 1;
        essaieMax = 8;
        billeMax = 4;
    }
})

avance.addEventListener("click", () => {
    if (avance.classList.contains("active")){
        avance.classList.replace("active", "selected");
        debutant.classList.replace("selected", "active");
        displayGame(10,5,2,4);
        playLine(0, 5);
        essaieActuel = 1;
        essaieMax = 10;
        billeMax = 5;
    }
})

function displayGame(rowboard, columnboard, rowcolor, columncolor){
    let boardHTML = "";
    let scoreHTML = "";
    let paletteHTML = "";

    for (let i = 0; i < rowboard; i++) {
        let line = "<div class='line'>";
        let lineScore = "<div class='line'>";
        for (let j = 0; j < columnboard; j++) {
            line += element;
            lineScore += score;
        }
        line += "</div>";
        lineScore += "</div>";
        boardHTML += line;
        scoreHTML += lineScore;
    }

    document.getElementById("board").innerHTML = boardHTML;
    document.getElementById("scoreBoard").innerHTML = scoreHTML;

    for (let i = 0; i < rowcolor; i++) {
        let line = "<div class='line'>";
        for (let j = 0; j < columncolor; j++) {
            const index = i === 0 ? j : j + columncolor;
            const style = `background-color:${couleurs[index]};`;
            line += `${couleur}${index})' style="${style}"></div>`;
        }
        line += "</div>";
        paletteHTML += line;
    }

    document.getElementById("palette").innerHTML = paletteHTML;
}

function revealSecretCode() {
    document.getElementById("hide").style.display = "none";
}


function playLine(start, essaie) {
    const piece = document.getElementsByClassName("piece-board");
    for (let j = 0; j < essaie; j++) {
        const index = j + start * essaie;
        if (piece[index]) {               // <-- protection
            piece[index].classList.add("inUse");
        }
    }
}

function nextLine(start, essaie) {
    const piece = document.getElementsByClassName("piece-board");
    for (let j = 0; j < essaie; j++) {
        const index = j + start * essaie;
        if (piece[index]) {               // <-- protection
            piece[index].classList.remove("inUse");
        }
    }
}

document.getElementById("check").addEventListener("click", () => {
    if (essaieActuel < essaieMax) {
        nextLine(essaieActuel - 1, billeMax);
        playLine(essaieActuel, billeMax);
        essaieActuel += 1;
    } else {
        setCheckEnabled(false);
    }
})

document.getElementById("refresh").addEventListener("click", () => {
    nextLine(essaieActuel - 1, billeMax);

    essaieActuel = 0;
    playLine(essaieActuel, billeMax);
    essaieActuel += 1;
    setCheckEnabled(true);
});

function setCheckEnabled(enabled) {
    document.getElementById("check").disabled = !enabled;
}

function giveColor(index) {
    // bonne piece du jeux et donner couleur + compteur piece actuelle
    console.log("couleur click");
    const position = (essaieActuel - 1)*billeMax + billeActuelle;
    document.getElementsByClassName("piece-board")[position].style.backgroundColor = couleurs[index];
    if (billeActuelle < (billeMax - 1)){
        billeActuelle += 1;
    } else {
        billeActuelle = 0;
    }
}