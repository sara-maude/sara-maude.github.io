import { PIECE, ROW, SCORE, COULEURS, PALETTE, PIECES, CHECK, UNDO, REFRESH, RESULTS, ANSWER } from "./constantes.js";
class GameLogic {
    constructor(difficulty) {
        this.currentTry = 0;
        this.currentChoice = 0;
        this.secretCode = [];
        this.maybeCode = [];
        this.stillPlaying = true;

        if (difficulty) {
            this.maxTries = 8;
            this.maxChoices = 4;
            this.colorColumn = 3;
        } else {
            this.maxTries = 10;
            this.maxChoices = 5;
            this.colorColumn = 4;
        }
    }

    createCode() {
        this.secretCode = [];
        for (let i = 0; i < this.maxChoices; i++){
            const randomIndex = Math.floor(Math.random() * ROW * this.colorColumn);
            this.secretCode[i] = randomIndex;
        }
        console.log(this.secretCode); 
    }

    changeLevel(level) {
        if(level){
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
        this.displayBoard();
        this.displayPalette();
    }

    displayBoard() {
        this.stillPlaying = true;
        this.hideAnswer();
        let boardHTML = "";
        let scoreHTML = "";
    
        for (let i = 0; i < this.maxTries; i++) {
            let line = "<div class='line'>";
            let lineScore = "<div class='line'>";
            for (let j = 0; j < this.maxChoices; j++) {
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
    
    }

    
    displayPalette() {
        let paletteHTML = "";

        for (let i = 0; i < ROW; i++) {
            let line = "<div class='line'>";
            for (let j = 0; j < this.colorColumn; j++) {
                const index = i === 0 ? j : j + this.colorColumn;
                const style = `background-color:${COULEURS[index]};`;
                line += `${PALETTE} style="${style}"></div>`;
            }
            line += "</div>";
            paletteHTML += line;
        }
    
        document.getElementById("palette").innerHTML = paletteHTML;
    }

    start() {
        this.currentChoice = 0;
        this.currentTry = 0;
        for (let i = 0; i < PIECES.length; i++) {
            PIECES[i].style.backgroundColor = "var(--fonce)";
        }
        CHECK.classList.add("disabled");
        UNDO.classList.add("disabled");
        REFRESH.classList.add("disabled");
        this.playLine();
        this.createCode();
    }

    playLine() {
        for (let j = 0; j < this.maxChoices; j++) {
            const index = j + this.currentTry * this.maxChoices;
            if (PIECES[index] && this.stillPlaying) {
                PIECES[index].classList.add("inUse");
            }
            if (PIECES[index - this.maxChoices]) {               // <-- protection
                PIECES[index - this.maxChoices].classList.remove("inUse");
            }
        }
        this.currentTry += 1;
        console.log("abbled");
    }

    giveColor(index) {
        REFRESH.classList.remove("disabled");
        // bonne piece du jeux et donner couleur + compteur piece actuelle
        if (this.currentChoice < this.maxChoices && this.stillPlaying){
            this.maybeCode[this.currentChoice] = index;
            console.log(this.maybeCode);
            if (this.currentChoice === 0){
                UNDO.classList.remove("disabled");
            }
            console.log("couleur click");
            const position = (this.currentTry - 1) * this.maxChoices + this.currentChoice;
            PIECES[position].style.backgroundColor = COULEURS[index];
            this.currentChoice += 1;
            if (this.currentChoice === (this.maxChoices)){
                CHECK.classList.remove("disabled");
            }
        }
    }

    refresh() {
        console.log("refresh");
        this.displayBoard();
        this.start();
    }

    undo() {
        if (this.currentChoice !== 0) {
            const position = (this.currentTry - 1) * this.maxChoices + this.currentChoice;
            PIECES[position - 1].style.backgroundColor = "var(--fonce)";
            this.currentChoice -= 1;
            if (this.currentChoice === 0) {
                CHECK.classList.add("disabled");
                UNDO.classList.add("disabled");
            }
        }
    }

    check() {
        console.log("check");
        if (this.currentChoice === this.maxChoices){
            if (this.compareCodes() || this.currentTry == this.maxTries){
                this.showAnswer();
                this.stillPlaying = false;
            }
            if (this.currentTry <= this.maxTries) {
                console.log("on devrait check");
                this.evaluateMaybeCode();
                this.playLine();
                this.currentChoice = 0;
                CHECK.classList.add("disabled");
                UNDO.classList.add("disabled");
            }
        }
    }

    compareCodes() {
        for (let i = 0; i < this.maxChoices; i++) {
            if (this.maybeCode[i] !== this.secretCode[i]) return false;
        }
        return true;
    }

    evaluateMaybeCode() {
        let codeCopy  = [...this.secretCode];   // copie du code secret
        let guessCopy = [...this.maybeCode];    // copie du code proposé
        let results = [];                        // tableau pour stocker les résultats

        // 1️⃣ Bien placés (black)
        for (let i = 0; i < this.maxChoices; i++) {
            if (guessCopy[i] === codeCopy[i]) {
                results.push(RESULTS[1]);  // bien placé
                codeCopy[i] = guessCopy[i] = null; // marquer comme utilisé
            }
        }

        // 2️⃣ Mal placés (white)
        for (let i = 0; i < this.maxChoices; i++) {
            if (guessCopy[i] != null) {
                let index = codeCopy.indexOf(guessCopy[i]);
                if (index !== -1) {
                    results.push(RESULTS[0]); // mal placé
                    codeCopy[index] = null;   // marquer comme utilisé
                }
            }
        }

        // 3️⃣ Affichage dans l’ordre
        for (let i = 0; i < results.length; i++) {
            const position = (this.currentTry - 1) * this.maxChoices + i;
            document.getElementsByClassName("score")[position].style.backgroundColor = results[i];
        }
    }

    showAnswer() {
        let answer = "";
        for (let i = 0; i < this.maxChoices; i++) {
            const index = this.secretCode[i];
            const style = `background-color:${COULEURS[index]};`;
            answer += `${ANSWER} style="${style}"></div>`;
        }
        document.getElementById("messageCode").innerHTML = answer;
    }

    hideAnswer() {
        document.getElementById("messageCode").innerHTML = "Code Secret";
    }

}

export default GameLogic;