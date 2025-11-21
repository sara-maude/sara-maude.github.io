export const COULEURS = [
    "#FF0000",
    "#FF7300",
    "#FFF200",
    "#35D300",
    "#00B7FF",
    "#9900FF",
    "#FE00E5",
    "#0400FF",
    "#CCC3BA",
    "#092834",
    "#3A4F56"
];

export const RESULTS = [
    "#FFFFFF",
    "#000000"
]

export const ROW = 2;
export const PALETTE = "<div class='piece choix'";

export const PIECE = "<div class='piece piece-board'></div>";
export const SCORE = "<div class='score'></div>";

export const PIECES = document.getElementsByClassName("piece-board");
export const CHECK = document.getElementById("check");
export const UNDO = document.getElementById("undo");
export const REFRESH = document.getElementById("refresh");
// Tu peux aussi exporter des fonctions utilitaires
export function randomInt(max) {
    return Math.floor(Math.random() * max);
}
