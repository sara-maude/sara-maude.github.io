import GameLogic from "./logiqueJeu.js";

const debutant = document.getElementById("debutant");
const avance = document.getElementById("avance");

document.getElementById("back").addEventListener("click", function() {
    window.location.href = "accueil.html";
});

function getLevel() {
    let valeur = localStorage.getItem("gameMode");
    if (valeur === null){
        return true;
    }
    return valeur === "easy";
}

function getMode() {
    return localStorage.getItem("versus") === "bot";
}

const mode = getMode();
const level = getLevel();

if (level) {
    debutant.classList.add("selected");
    avance.classList.add("active");
} else {
    debutant.classList.add("active");
    avance.classList.add("selected");
}
const newGame = new GameLogic(level, mode);
console.log(localStorage.getItem("versus"));

changeLevel();

debutant.addEventListener("click", () => {
    localStorage.setItem("gameMode", "easy");
    if (debutant.classList.contains("active")){
        debutant.classList.replace("active", "selected");
        avance.classList.replace("selected", "active");
        changeLevel();
        listenerPalette();
    }
});

avance.addEventListener("click", () => {
    localStorage.setItem("gameMode", "hard");
    if (avance.classList.contains("active")){
        avance.classList.replace("active", "selected");
        debutant.classList.replace("selected", "active");
        changeLevel();
        listenerPalette();
    }
});

document.getElementById("check").addEventListener("click", () => {
    newGame.check();
});

document.getElementById("refresh").addEventListener("click", () => {
    newGame.refresh();
});

document.getElementById("undo").addEventListener("click", () => {
    newGame.undo();
});

function listenerPalette() {
    const piecePalette = document.querySelectorAll(".piece.choix");
    piecePalette.forEach((p, index) => {
        p.addEventListener("click", () => newGame.giveColor(index));
    });
}

function changeLevel() {
    console.log("change level");
    newGame.changeLevel(getLevel());
    newGame.display();
    if (mode) {
        newGame.start();
    } else {
        console.log(mode);
        newGame.secretBox();
    }
}

const piecePalette = document.querySelectorAll(".piece.choix");
piecePalette.forEach((p, index) => {
    p.addEventListener("click", () => newGame.giveColor(index));
});