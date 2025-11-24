document.getElementById("play").addEventListener("click", function() {
    window.location.href = "HTML/jeu.html";
});

const robot  = document.querySelector("#robot");
const friend = document.querySelector("#group");
const checkbox = document.querySelector("#toggle");

const vsBot = localStorage.getItem("versus") === "bot";
if (vsBot) {
    robot.classList.replace("unfilled", "filled");
    friend.classList.replace("filled", "unfilled");
} else {
    friend.classList.replace("unfilled", "filled");
    robot.classList.replace("filled", "unfilled");
    document.getElementById("toggle").checked = true;
}

checkbox.addEventListener("change", () => {
    const robotFilled = robot.classList.contains("filled");
    let mode;

    if (robotFilled) {
        mode = "ami";
        friend.classList.replace("unfilled", "filled");
        robot.classList.replace("filled", "unfilled");
    } else {
        mode = "bot";
        robot.classList.replace("unfilled", "filled");
        friend.classList.replace("filled", "unfilled");
    }

    localStorage.setItem("versus", mode);
});

