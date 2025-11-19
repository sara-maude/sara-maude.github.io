import "./constantes.js";
import { PIECE, ROW, SCORE } from "./constantes.js";
class GameLogic {
    constructor(difficulte) {
        if (difficulte) {
            this.maxTries = 8;
            this.maxChoices = 4;
            this.colorColumn = 3;
        } else {
            this.maxTries = 10;
            this.maxChoices = 5;
            this.colorColumn = 4;
        }
    }

    display() {
        let boardHTML = "";
        let scoreHTML = "";
        let paletteHTML = "";
    
        for (let i = 0; i < this.maxChoices; i++) {
            let line = "<div class='line'>";
            let lineScore = "<div class='line'>";
            for (let j = 0; j < this.maxTries; j++) {
                line += PIECE;
                lineScore += SCORE;
            }
            line += "</div>";
            lineScore += "</div>";
            boardHTML += line;
            scoreHTML += lineScore;
        }
    
        document.getElementById("board").innerHTML = boardHTML;
        document.getElementById("scoreBoard").innerHTML = scoreHTML;
    
        for (let i = 0; i < ROW; i++) {
            let line = "<div class='line'>";
            for (let j = 0; j < this.colorColumn; j++) {
                const index = i === 0 ? j : j + this.colorColumn;
                const style = `background-color:${COULEURS[index]};`;
                line += `${PALETTE}${index})' style="${style}"></div>`;
            }
            line += "</div>";
            paletteHTML += line;
        }
    
        document.getElementById("palette").innerHTML = paletteHTML;
    }

}

export default GameLogic;