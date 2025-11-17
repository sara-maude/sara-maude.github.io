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

document.getElementById("light").addEventListener("click", () => {
    const root = document.documentElement;
    const fonce = getComputedStyle(root).getPropertyValue("--fonce");
    const pale  = getComputedStyle(root).getPropertyValue("--pale");

    root.style.setProperty("--fonce", pale);
    root.style.setProperty("--pale", fonce);

    const icon = document.querySelector("#light span");

    if (icon.textContent.trim() === "light_off") {
        icon.textContent = "lightbulb";
    } else {
        icon.textContent = "light_off";
    }
});

const robot  = document.querySelector("#robot");
const friend = document.querySelector("#group");
const checkbox = document.querySelector("#toggle");

checkbox.addEventListener("change", () => {
    const robotFilled = robot.classList.contains("filled");

    if (robotFilled) {
        robot.classList.remove("filled");
        robot.classList.add("unfilled");

        friend.classList.remove("unfilled");
        friend.classList.add("filled");
    } else {
        robot.classList.remove("unfilled");
        robot.classList.add("filled");

        friend.classList.remove("filled");
        friend.classList.add("unfilled");
    }
});

