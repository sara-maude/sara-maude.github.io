document.getElementById("back").addEventListener("click", function() {
    window.location.href = "accueil.html";
});

const element = "<div class='piece'></div>";
let boardHTML = "";

for (let i = 0; i < 8; i++) {
    let line = "<div class='line'>";
    for (let j = 0; j < 4; j++) {
        line += element;
    }
    line += "</div>";
    boardHTML += line;
}

document.getElementById("board").innerHTML = boardHTML;

const couleur = "<div class='piece choix' ";
let paletteHTML = "";
const couleurs = ["#FF0000","#FF7300", "#FFF200", "#35D300", "#00B7FF", "#9900FF", "#FE00E5", "#0400FF"];

for (let i = 0; i < 2; i++) {
    let line = "<div class='line'>";
    for (let j = 0; j < 3; j++) {
        const index = i === 0 ? j : j + 3;
        const style = `background-color:${couleurs[index]};`;
        line += `${couleur} style="${style}"></div>`;
    }
    line += "</div>";
    paletteHTML += line;
}

document.getElementById("palette").innerHTML = paletteHTML;