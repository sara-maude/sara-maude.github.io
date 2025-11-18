document.getElementById("play").addEventListener("click", function() {
    window.location.href = "jeu.html";
});

document.getElementById("settings").addEventListener("click", function() {
    window.location.href = "reglages.html";
});

document.getElementById("info").addEventListener("click", function() {
    window.location.href = "tutoriel.html";
});

document.getElementById("trophy").addEventListener("click", function() {
    window.location.href = "historique.html";
});

const robot  = document.querySelector("#robot");
const friend = document.querySelector("#group");
const checkbox = document.querySelector("#toggle");

checkbox.addEventListener("change", () => {
    const robotFilled = robot.classList.contains("filled");
    let mode;

    if (robotFilled) {
        mode = "ami";
        robot.classList.remove("filled");
        robot.classList.add("unfilled");

        friend.classList.remove("unfilled");
        friend.classList.add("filled");
    } else {
        mode = "bot";
        robot.classList.remove("unfilled");
        robot.classList.add("filled");

        friend.classList.remove("filled");
        friend.classList.add("unfilled");
    }

    localStorage.setItem("gameMode", mode);
});

