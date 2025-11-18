document.getElementById("back").addEventListener("click", function() {
    window.location.href = "accueil.html";
});

const couleur = "<div class='piece choix' ";
const couleurs = ["#FF0000","#FF7300", "#FFF200", "#35D300", "#00B7FF", "#9900FF", "#FE00E5", "#0400FF"];

const element = "<div class='piece'></div>";

displayGame(8,4,2,3);

const debutant = document.getElementById("debutant");
const avance = document.getElementById("avance");

debutant.addEventListener("click", () => {
    if (debutant.classList.contains("active")){
        debutant.classList.replace("active", "selected");
        avance.classList.replace("selected", "active");
        displayGame(8,4,2,3);
    }
})

avance.addEventListener("click", () => {
    if (avance.classList.contains("active")){
        avance.classList.replace("active", "selected");
        debutant.classList.replace("selected", "active");
        displayGame(10,5,2,4);
    }
})

function displayGame(rowboard, columnboard, rowcolor, columncolor){
    let boardHTML = "";
    let paletteHTML = "";

    for (let i = 0; i < rowboard; i++) {
        let line = "<div class='line'>";
        for (let j = 0; j < columnboard; j++) {
            line += element;
        }
        line += "</div>";
        boardHTML += line;
    }

    document.getElementById("board").innerHTML = boardHTML;

    for (let i = 0; i < rowcolor; i++) {
        let line = "<div class='line'>";
        for (let j = 0; j < columncolor; j++) {
            const index = i === 0 ? j : j + columncolor;
            const style = `background-color:${couleurs[index]};`;
            line += `${couleur} style="${style}"></div>`;
        }
        line += "</div>";
        paletteHTML += line;
    }

    document.getElementById("palette").innerHTML = paletteHTML;
}