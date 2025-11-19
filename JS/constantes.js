// utils.js

export const COULEURS = [
    "#FF0000",
    "#FF7300",
    "#FFF200",
    "#35D300",
    "#00B7FF",
    "#9900FF",
    "#FE00E5",
    "#0400FF"
];

export const DEBUTANT = true;
export const AVANCE = false;
export const ROW = 2;
export const PALETTE = "<div class='piece choix' onclick='giveColor(";

export const PIECE = "<div class='piece piece-board'></div>";
export const SCORE = "<div class='score'></div>";

// Tu peux aussi exporter des fonctions utilitaires
export function randomInt(max) {
    return Math.floor(Math.random() * max);
}
